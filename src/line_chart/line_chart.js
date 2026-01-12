  const data = [
    { month: 'Jan', bmi: 34.5 },
    { month: 'Feb', bmi: 32.5 },
    { month: 'Mar', bmi: 31.8 },
    { month: 'Apr', bmi: 28.7 },
    { month: 'May', bmi: 24.5 },
    { month: 'Jun', bmi: 22.2 },
    { month: 'Jul', bmi: 21.2 },
  ];

function plotChart(chartAnchorPoint) {
    const chartAnchor = document.getElementById(chartAnchorPoint);
    //TODO(Kay): Load the data with XMLHttpRequest from a mock file and present it here!
    const configuration = {
      type: 'line',
      data: {
        labels: data.map(row => row.month),
        datasets: [
          {
            label: 'Body Mass Index',
            data: data.map(row => row.bmi),
          }
        ]
      }
    };

    return new Chart(chartAnchor, configuration);
  }

plotChart('bmi-chart');