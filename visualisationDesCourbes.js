  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  google.charts.setOnLoadCallback(drawChartPoid);
  google.charts.setOnLoadCallback(drawChartPerimCranier);

  //Garçons
var poidsGMin = [2500, 3500, 4400, 4800, 5000, 5600, 5900, 6800, 7200, 7400, 7600, 7800, 8000];
var poidsGMax = [4500, 5700, 7000, 7800, 8200, 9200, 9500, 10200, 10600, 10900, 11200, 11600, 11800];
var tailleGMin = [46, 48, 52, 54, 57, 59, 61, 62, 64, 65, 66, 67, 68];
var tailleGMax = [54, 60, 64, 67, 70, 72, 74, 76, 78, 79, 80, 82, 83];
var periGMin = [32, 33, 34, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
var periGMax = [37, 38, 39, 41, 43, 44, 45, 46, 47, 48, 49, 50, 51];
//Filles
var poidsFMin = [2400, 3200, 4200, 4500, 4800, 5300, 5800, 6000, 6400, 6600, 6800, 7000, 7200];
var poidsFMax = [4400, 5200, 6500, 7400, 8200, 8700, 9200, 9600, 10000, 10400, 10600, 11000, 11400];
var tailleFMin = [46, 49, 52, 55, 57, 59, 60, 62, 63, 65, 66, 67, 68];
var tailleFMax = [54, 57, 61, 64, 67, 69, 71, 73, 74, 75, 77, 78, 79];
var periFMin = [32, 33, 34, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
var periFMax = [37, 38, 39, 41, 43, 44, 45, 46, 47, 48, 49, 50, 51];

var tailleInput = [];

var age = document.getElementById('age');
var poids = document.getElementById('poids');
var taille = document.getElementById('taille');
var perimetreCranien = document.getElementById('perimetreCranien');


  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Age', 'Tailles en cm', 'min', 'max'],
      ['3 mois',  taille, tailleGMin[0], tailleGMax[0]],
      ['6 mois',  55, tailleGMin[1], tailleGMax[1]],
      ['9 mois',  64, tailleGMin[2], tailleGMax[2]],
      ['1 an',  65, tailleGMin[3], tailleGMax[3]],
      ['15mois',  69, tailleGMin[4], tailleGMax[4]],
      ['18 mois',  70, tailleGMin[5], tailleGMax[5]],
      ['21 mois',  75, tailleGMin[6], tailleGMax[6]],
      ['2 ans',  79, tailleGMin[7], tailleGMax[7]],
      ['27 mois',  80, tailleGMin[8], tailleGMax[8]],
      ['30 mois',  85, tailleGMin[9], tailleGMax[9]],
      ['33 mois',  96, tailleGMin[10], tailleGMax[10]],
      ['3 ans',  100, tailleGMin[11], tailleGMax[11]],
    ]);
    

    var options = {
      title: 'Courbe de croissance de taille d\'un patient de sexe masculin',
      curveType: 'function',
      legend: { position: 'bottom' }
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

    chart.draw(data, options);
  }

 
  function drawChartPoid() {
    var data = google.visualization.arrayToDataTable([
      ['Age', 'Poids en grammes', 'min', 'max'],
      ['3 mois',  2000, poidsGMin[0], poidsGMax[0]],
      ['6 mois',  3000, poidsGMin[1], poidsGMax[1]],
      ['9 mois',  5000, poidsGMin[2], poidsGMax[2]],
      ['1 an',  6000, poidsGMin[3], poidsGMax[3]],
      ['15mois',  7000, poidsGMin[4], poidsGMax[4]],
      ['18 mois',  8000, poidsGMin[5], poidsGMax[5]],
      ['21 mois',  8500, poidsGMin[6], poidsGMax[6]],
      ['2 ans',  9000, poidsGMin[7], poidsGMax[7]],
      ['27 mois',  9400, poidsGMin[8], poidsGMax[8]],
      ['30 mois',  9450, poidsGMin[9], poidsGMax[9]],
      ['33 mois',  9600, poidsGMin[10], poidsGMax[10]],
      ['3 ans',  10000, poidsGMin[11], poidsGMax[11]],
    ]);
    

    var options = {
      title: 'Courbe de croissance de poids d\'un patient de sexe masculin',
      curveType: 'function',
      legend: { position: 'bottom' }
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart_poids'));

    chart.draw(data, options);
  }

  function drawChartPerimCranier() {
    var data = google.visualization.arrayToDataTable([
      ['Age', 'Périmètre du crane en cm', 'min', 'max'],
      ['3 mois',  33, periGMin[0], periGMax[0]],
      ['6 mois',  34, periGMin[1], periGMax[1]],
      ['9 mois',  35, periGMin[2], periGMax[2]],
      ['1 an',  38, periGMin[3], periGMax[3]],
      ['15mois',  39, periGMin[4], periGMax[4]],
      ['18 mois',  40, periGMin[5], periGMax[5]],
      ['21 mois',  41, periGMin[6], periGMax[6]],
      ['2 ans',  43, periGMin[7], periGMax[7]],
      ['27 mois',  44, periGMin[8], periGMax[8]],
      ['30 mois',  45, periGMin[9], periGMax[9]],
      ['33 mois',  46, periGMin[10], periGMax[10]],
      ['3 ans',  47, periGMin[11], periGMax[11]],
    ]);
    

    var options = {
      title: 'Courbe de croissance du périmètre cranien d\'un patient de sexe masculin',
      curveType: 'function',
      legend: { position: 'bottom' }
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart_cranien'));

    chart.draw(data, options);
  }

  