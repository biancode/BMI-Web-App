//NOTE(Kay): This will only work when we are using a live server in cases where this is used without a server
//           it will fail miserably. In these cases we should use a local variable which then can be used inside
//           plotChart!
function loadJson(url, cb) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';

  xhr.onload = () => {
    if (xhr.status === 200) {
      cb(null, xhr.response);   // parsed JSON
    } else {
      cb(new Error(`HTTP ${xhr.status}`));
    }
  };

  xhr.onerror = () => cb(new Error('Network error while loading JSON'));

  xhr.send();
}

function plotChart(chartAnchorPoint, data) {
  const chartAnchor = document.getElementById(chartAnchorPoint);
  const plotData = data["data"];
  const configuration = {
    type: 'line',
    data: {
      labels: plotData.map(row => row.date),
      datasets: [
        {
          label: 'Body Mass Index',
          data: plotData.map(row => row.bmi_value),
        }
      ]
    }
  };

  return new Chart(chartAnchor, configuration);
}

//plotChart('bmi-chart');

loadJson('data_mock.json', (err, jsonData) => {
  if (err) {
    console.error('Failed to load BMI data:', err);
    return;
  }
  console.log(jsonData);
  plotChart('bmi-chart', jsonData);
});