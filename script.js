// initialize a chart and put it in the 'barChart' div
const line = document.getElementById('lineChart').getContext('2d');
const lineChart = new Chart(line, {
   type: 'line',
			data: {
				labels:['2012', '', '', '', '2013', '', '', '', '2014', '', '', '', '2015', '', '', '', '2016', '', '', '', '2017', '', '', '', '2018', '', '', '', '2019', '', '', ''],
				datasets: [{
					backgroundColor: 'rgba(204, 0, 0, 0.3)',
					borderColor: 'rgba(255, 153, 51, 1)', 
					data: [39.186,	35.023,	35.966,54.512,	43.603,	35.323,	37.472, 57.594, 45.646, 37.432, 42.123, 74.599, 58.010, 49.605, 51.501, 75.872, 50.557, 42.358, 46.852, 78.352,52.896,45.408,52.579,88.293,61.137,53.265,62.900,84.310,58.015,53.809,64.040,91.819],
					fill: false,
				}]
			},
			options: {
				responsive: true,
				title: {
					display: true,
					text: 'Apple Inc.\'s Annual Revenue',
          fontSize: 24
				},
				tooltips: {
					mode: 'index',
					intersect: false,
				},
				hover: {
					mode: 'nearest',
					intersect: true
				},
				scales: {
					xAxes: [{
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'Year'
						},
            gridLines: {
                display:false
            }
					}],
					yAxes: [{
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'Revenue in (billion USD)'
						},
            gridLines: {
                display:false
            }
					}]
				},
        legend: {
            display: false
        }
			}
		});

let canvas=document.querySelector('canvas');
canvas.width=600;
canvas.height=300;
 

let xGrid=10;
let yGrid=10;
let cellSize=10;

let ctx=canvas.getContext('2d');

function drawGrids()
{
  ctx.beinPath();
  
  while(xGrid<canvas.height)
    {
      ctx.moveTo(0,xGrid);
      ctx.lineTo(canvas.width,xGrid);
      xGrid+=cellSize;
    }
  
    while(yGrid<canvas.width)
    {
      ctx.moveTo(yGrid,0);
      ctx.lineTo(yGrid,canvas.height);
      yGrid+=cellSize;
    }
  
  ctx.stroke();
}

drawGrids()