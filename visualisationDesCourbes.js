  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Age', 'Tailles en cm'],
      ['3 mois',  50],
      ['6 mois',  55],
      ['9 mois',  64],
      ['1 an',  65],
      ['15mois',  69],
      ['18 mois',  70],
      ['21 mois',  75],
      ['2 ans',  79],
      ['27 mois',  80],
      ['30 mois',  85],
      ['33 mois',  96],
      ['3 ans',  100],
    ]);

    var options = {
      title: 'Courbe de croissance d\'un patient',
      curveType: 'function',
      legend: { position: 'bottom' }
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

    chart.draw(data, options);
  }
