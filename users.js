// initialize a chart and put it in the 'barChart' div
const bar = document.getElementById("barChart").getContext("2d");
const barChart = new Chart(bar, {
  type: "bar", // make it a bar chart

  /*data: {
    labels: ["2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"], // use the array of continents as labels
    datasets: [
      {
        label: "iOS (Operating System) ",
        data: [20.83, 13.8, 18.72, 16.19, 15.82, 15.61, 13.9, 10.7], // use the array of populations to draw bars
        backgroundColor: "rgba(255, 99, 132, 0.2)", // make the bars translucent red
        borderColor: "rgba(255, 99, 132, 1)", // make the borders of the bars opaque red
        borderWidth: 2 // set the border width to 1 pixel
      }
    ]
  },*/
  data: {
    labels: ["2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"],
    datasets: [
      {
        label: "iOS",
        backgroundColor: "rgba(255, 0, 0, 0.2)",
        borderColor: "rgba(255, 0, 0, 1)",
        borderWidth: 1,
        data: [10.7, 13.9, 15.61, 15.82, 16.19, 18.72, 13.8, 20.83]
      },
      {
        label: "iPhone",
        backgroundColor: "rgba(0, 0, 255, 0.2)",
        borderColor: "rgba(0, 0, 255, 1)",
        borderWidth: 1,
        data: [45.6, 43.5, 41.9, 39.2, 36.4, 30.0, 25.0, 19.0]
      },
      {
        label: "Macbook/computer",
        backgroundColor: "rgba(0, 255, 0, 0.2)",
        borderColor: "rgba(0, 255, 0, 1)",
        borderWidth: 1,
        data: [6.14, 6.54, 6.93, 7.35, 6.9, 7.09, 6.16, 5.77]
      },
      {
        label: "iPad",
        backgroundColor: "rgba(255, 255, 0, 0.2)",
        borderColor: "rgba(255, 255, 0, 1)",
        borderWidth: 1,
        data: [34.6, 29.6, 30.1, 24.6, 22.3, 27.2, 20.4, 25.1]
      },
      {
        label: "Safari",
        backgroundColor: "rgba(0, 255, 255, 0.2)",
        borderColor: "rgba(0, 255, 255, 1)",
        borderWidth: 1,
        data: [5.74, 5.96, 5.82, 5.32, 4.98, 5.04, 5.12, 5.61]
      }
    ]
  },

  options: {
    responsive: true,
    title: {
      display: true,
      text: "Growth of Apple Users in Last 8 Years ",
      fontSize:24
    },
    tooltips: {
      mode: "index",
      intersect: false
    },
    hover: {
      mode: "nearest",
      intersect: true
    },
    scales: {
      xAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "Year"
          },
          stacked: true
        }
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "Market share in percentage"
          },
          stacked: true
        }
      ]
    },
    legend: {
      display: false
    }
  }
});
