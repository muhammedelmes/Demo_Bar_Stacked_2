var series = [
  { name: 'Finance Min & Affiliates', data: [41, 38, 32, 17] },
  { name: 'National Oil Corp', data: [34, 18, 0, 0] }, 
  { name: 'Social Affairs Min & Affiliates', data: [15, 17, 14, 10] },
  { name: 'Defense Min & Affiliates', data: [5, 0, 0, 0] },
  { name: 'Oil & Gas Min & Affiliates', data: [5, 0, 0, 13] },
  { name: 'Health Min & Affiliates', data: [0, 8, 9, 3] },
  { name: 'GECOL', data: [0, 7, 0, 0] },
  { name: 'Allocated for Dev Projects', data: [0, 0, 10, 0] },
  { name: 'Allocated for NOC & GECOL', data: [0, 0, 10, 0] },
  { name: 'Interior Min & Affiliates', data: [0, 0, 0, 4] },
];

// sort series by total sum descending
series.sort((a, b) => {
  let sumA = a.data.reduce((acc, val) => acc + val, 0);
  let sumB = b.data.reduce((acc, val) => acc + val, 0);
  return sumB - sumA; // descending, for ascending use sumA - sumB
});

// then pass sorted series to chart options
var options = {
  series: series, // sorted series
  colors: [
    "#ec4218ff", "#194bd6ff", "#5eb191ff", "#fc6e2dff",
    "#9fb34aff", "#798c4bff", "#8394b9ff", "#682b56ff",
    "#bd2222ff", "#2c9daaff"
  ],
  
  chart: {
  type: 'bar',
  stacked: true,
  stackType: '100%',
  background: '#e5d6bf',
  responsive: [{
    breakpoint: 600,
    options: {
      legend: {
        position: 'bottom'
      }
    }
  }]
},

  
  grid: {
    borderColor: '#998972ff', // Grid line color
    row: {
      colors: ['#e5d6bf', '#dfcfb7ff'], // optional row stripes
      opacity: 0.5
    }
  },
  xaxis: {
    categories: ['2022', '2023', '2024', '2025'],
    labels: {
      style: {
        colors: '#333333',  // X-axis text color
        fontSize: '12px'
      }
    },
    axisBorder: {
      show: true,
      color: '#999999'  // X-axis line color
    },
    axisTicks: {
      show: true,
      color: '#999999'
    }
  },
  yaxis: {
    labels: {
      style: {
        colors: '#333333', // Y-axis text color
        fontSize: '12px'
      }
    }
  },
  fill: {
    opacity: 1
  },
 legend: {
  position: 'top',
  offsetX: 0,
  offsetY: 0,
  labels: {
    colors: '#1d2656', // change to any color you like
    useSeriesColors: false // if true, it uses the series colors instead
  }
},
  responsive: [{
    breakpoint: 480,
    options: {
      legend: {
        position: 'bottom',
        offsetX: -10,
        offsetY: 0
      }
    }
  }]
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();