queue()
  .defer(d3.json, "/vgsJson")
  .await(createGraphs);

function createGraphs(error, videoGameSales) {
  if (error) {
    console.error("createGraphs error on receiving dataset:", error.statusText);
    throw error;
  }

  var videoGames = videoGameSales;
  videoGames.forEach(function (d) {
    d["Year"] = new Date(d["Year"], 0, 1);
  });

  // Create a Crossfilter instance
  var ndx = crossfilter(videoGames);

  // Dimensions start

  var yearDim = ndx.dimension(function (d) {
    return d["Year"] ? d["Year"] : 0;
  });
  var genreDim = ndx.dimension(function (d) {
    return d["Genre"] ? d["Genre"] : "";
  });
  var publisherDim = ndx.dimension(function (d) {
    return d["Publisher"] ? d["Publisher"] : "";
  });
  var platformDim = ndx.dimension(function (d) {
    return d["Platform"] ? d["Platform"] : "";
  });
  var totalNumEUSales = ndx.dimension(function (d) {
    return d["EU_Sales"] ? d["EU_Sales"] : 0;
  });
  var totalNumGlobalSales = ndx.dimension(function (d) {
    return d["Global_Sales"] ? d["Global_Sales"] : 0;
  });
  var totalNumJPSales = ndx.dimension(function (d) {
    return d["JP_Sales"] ? d["JP_Sales"] : 0;
  });
  var totalNumNASales = ndx.dimension(function (d) {
    return d["NA_Sales"] ? d["NA_Sales"] : 0;
  });
  var totalNumOtherSales = ndx.dimension(function (d) {
    return d["Other_Sales"] ? d["Other_Sales"] : 0;
  });
  var totalNumGames = ndx.dimension(function (d) {
    return d["Rank"] ? d["Rank"] : 0;
  });

  // Dimensions end

  // Metrics start
  var yearReleased = yearDim.group();
  var numVideoGameGenres = genreDim.group();
  var pubGroup = publisherDim.group();
  var numVideoGameSalesByPlatform = platformDim.group();
  var totalEUSales = totalNumEUSales.groupAll().reduceSum(function (d) {
    return d["EU_Sales"];
  });
  var totalGlobalSales = totalNumGlobalSales.groupAll().reduceSum(function (d) {
    return d["Global_Sales"];
  });
  var totalJPSales = totalNumJPSales.groupAll().reduceSum(function (d) {
    return d["JP_Sales"];
  });
  var totalNASales = totalNumNASales.groupAll().reduceSum(function (d) {
    return d["NA_Sales"];
  });
  var totalOtherSales = totalNumOtherSales.groupAll().reduceSum(function (d) {
    return d["Other_Sales"];
  });
  var totalGames = totalNumGames.groupAll().reduceSum(function (d) {
    return d["Rank"];
  });

  // Metrics end

  // Values for charts
  var minYear = yearDim.bottom(1)[0]["Year"];
  var maxYear = yearDim.top(1)[0]["Year"];

  // Charts

  var yearChart = dc.barChart("#year-release-bar-chart");
  var genreChart = dc.rowChart("#genre-row-chart");
  var publisherSelect = dc.selectMenu("#publisher-select-menu");
  var platformChart = dc.rowChart("#platform-row-chart");

  // Metric Counters
  var euSalesND = dc.numberDisplay("#number-eu-sales-nd");
  var videoGamesND = dc.numberDisplay("#number-video-games-nd");
  var globalSalesND = dc.numberDisplay("#number-global-sales-nd");
  var jpSalesND = dc.numberDisplay("#number-japan-sales-nd");
  var naSalesND = dc.numberDisplay("#number-na-sales-nd");
  var otherSalesND = dc.numberDisplay("#number-other-sales-nd");

  // Chart properties and values
  euSalesND
    .formatNumber(d3.format("d"))
    .valueAccessor(function (d) {
      return d;
    })
    .group(totalEUSales)
    .formatNumber(d3.format(".3s"));

  videoGamesND
    .formatNumber(d3.format("d"))
    .valueAccessor(function (d) {
      return d;
    })
    .group(totalGames)
    .formatNumber(d3.format(".3s"));

  globalSalesND
    .formatNumber(d3.format("d"))
    .valueAccessor(function (d) {
      return d;
    })
    .group(totalGlobalSales)
    .formatNumber(d3.format(".3s"));

  jpSalesND
    .formatNumber(d3.format("d"))
    .valueAccessor(function (d) {
      return d;
    })
    .group(totalJPSales)
    .formatNumber(d3.format(".3s"));

  naSalesND
    .formatNumber(d3.format("d"))
    .valueAccessor(function (d) {
      return d;
    })
    .group(totalNASales)
    .formatNumber(d3.format(".3s"));

  otherSalesND
    .formatNumber(d3.format("d"))
    .valueAccessor(function (d) {
      return d;
    })
    .group(totalOtherSales)
    .formatNumber(d3.format(".3s"));

  // Select Menu
  publisherSelect.dimension(publisherDim).group(pubGroup);

  // Year Bar Chart
  yearChart
    // amend values to own spec
    .ordinalColors(["#79CED7", "#66AFB2", "#C96A23", "#D3D1C5", "#F5821F"])
    .width(700)
    .height(300)
    .brushOn(false)
    .margins({
      top: 30,
      right: 50,
      bottom: 30,
      left: 40
    })
    .dimension(yearDim)
    .group(yearReleased)
    .x(d3.time.scale().domain([minYear, maxYear]))
    // makes bars thicker, solution found on StackOverflow mentioned in README
    .xUnits(function () {
      return 40;
    })
    // makes the bar chart clickable, solution found on StackOverflow and mentioned in README
    .on("renderlet", function (yearChart) {
      yearChart.selectAll("rect.bar").on("click", yearChart.onClick)
    })
    .centerBar(true)
    .elasticY(true)
    .renderHorizontalGridLines(true)
    .xAxisLabel("Year")
    .yAxis()
    .ticks(8);

  // Genre Row Chart
  genreChart
    // amend values to own spec
    .ordinalColors(["#79CED7", "#66AFB2", "#C96A23", "#D3D1C5", "#F5821F"])
    .width(700)
    .height(300)
    .margins({
      top: 30,
      right: 50,
      bottom: 30,
      left: 40
    })
    .dimension(genreDim)
    .group(numVideoGameGenres)
    .xAxis()
    .ticks(4);

  // Platform Row Chart
  platformChart
    .ordinalColors(["#79CED7", "#66AFB2", "#C96A23", "#D3D1C5", "#F5821F"])
    .width(700)
    .height(727)
    .margins({
      top: 30,
      right: 50,
      bottom: 30,
      left: 40
    })
    .dimension(platformDim)
    .group(numVideoGameSalesByPlatform)
    .xAxis()
    .ticks(4);

  // Data Table
  var tabledData = dc.dataTable("#data-table");
  tabledData
    .dimension(yearDim)
    .group(function (d) {
      // format the date as d/m/YYYY, add +1 to month as JS months are zero based.
      return (
        d.Year.getDate() +
        "/" +
        (d.Year.getMonth() + 1) +
        "/" +
        d.Year.getFullYear()
      );
    })
    .size(Infinity)
    .columns([
      function (d) {
        return d.Name;
      },
      function (d) {
        return d.Platform;
      },
      function (d) {
        return (
          d.Year.getDate() +
          "/" +
          (d.Year.getMonth() + 1) +
          "/" +
          d.Year.getFullYear()
        );
      },
      function (d) {
        return d.Genre;
      },
      function (d) {
        return d.Publisher;
      },
      function (d) {
        return d.NA_Sales;
      },
      function (d) {
        return d.EU_Sales;
      },
      function (d) {
        return d.JP_Sales;
      },
      function (d) {
        return d.Other_Sales;
      },
      function (d) {
        return d.Global_Sales;
      }
    ])
    .sortBy(function (d) {
      return d["Year"];
    })
    .order(d3.ascending);

  dataSlice();
  dc.renderAll();

  // Data table pagination
  var pageStart = 0;
  var pageEntries = 15;

  function pageSelect() {
    d3.select('#current-record-set')
      .text(pageStart);
    d3.select('#total-records')
      .text(pageStart + pageEntries - 1);
    d3.select('#previous-page')
      .attr('disabled', pageStart - pageEntries < 0 ? 'true' : null);
    d3.select('#next-page')
      .attr('disabled', pageStart + pageEntries > ndx.size() ? 'true' : null);
    d3.select('#db-size')
      .text(ndx.size());
  }

  function dataSlice() {
    tabledData.beginSlice(pageStart);
    tabledData.endSlice(pageStart + pageEntries);
    pageSelect();
  }

  function nextTable() {
    pageStart += pageEntries;
    dataSlice();
    tabledData.redraw();
  }

  function prevTable() {
    pageStart -= pageEntries;
    dataSlice();
    tabledData.redraw();
  }

}