  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Age', 'Tailles en cm'],
      ['3 mois',  0],
      ['6 mois',  1170],
      ['9 mois',  660],
      ['1 an',  1030],
      ['15mois',  1030],
      ['18 mois',  1030],
      ['21 mois',  1030],
      ['2 ans',  1030],
      ['27 mois',  1030],
      ['30 mois',  1030],
      ['33 mois',  1030],
      ['3 ans',  1030],
    ]);

    var options = {
      title: 'Courbe de croissance d\'un patient',
      curveType: 'function',
      legend: { position: 'bottom' }
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

    chart.draw(data, options);
  }
