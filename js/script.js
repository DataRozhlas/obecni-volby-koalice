var colorsCR = ['#CCCCCC', '#555555', '#FFC900', '#FF0000', '#FF8E00', '#0065AB', '#2B2C5F', '#00C9F1', 'brown', '#755B7B', 'black', '#00AFD4', '#008023', 'gray', '#E30000', '#009A84', '#FFC700', '#FD0000']

var dataCR = [

  [{y:5.3, kandidati:202014, marker:{radius:45}}, {y:6.3, kandidati:226961, marker:{radius:48}}, {y:11.2, kandidati:233877, marker:{radius:48}}, {y:15.7, kandidati:216500, marker:{radius:47}}],
  [{y:7, kandidati: 85567, marker:{radius:29}}, {y:7.3, kandidati: 96853, marker:{radius:31}}, {y:13.8, kandidati: 108746, marker:{radius:33}}, {y:16.6, kandidati: 111202, marker:{radius:33}}],
  [{y:3.8, kandidati: 21748, marker:{radius:15}}, {y:5.2, kandidati: 18381, marker:{radius:14}}, {y:7.3, kandidati: 17930, marker:{radius:13}}, {y:15.2, kandidati: 15913, marker:{radius:13}}],
  [{y:0.8, kandidati: 23079, marker:{radius:15}}, {y:1.1, kandidati: 20835, marker:{radius:14}}, {y:1.3, kandidati: 19062, marker:{radius:14}}, {y:2.1, kandidati: 15291, marker:{radius:12}}],
  [{y:0.5, kandidati: 18737, marker:{radius:14}}, {y:0.9, kandidati: 19103, marker:{radius:14}}, {y:1, kandidati: 18438, marker:{radius:14}}, {y:2.9, kandidati: 13504, marker:{radius:12}}],
  [{y:1, kandidati: 21478, marker:{radius:15}}, {y:1.2, kandidati: 20671, marker:{radius:14}}, {y:5.3, kandidati: 13688, marker:{radius:12}}, {y:11, kandidati: 12881, marker:{radius:11}}],
  [{}, {}, {y:0.4, kandidati: 8753, marker:{radius:9}}, {y:0.4, kandidati: 8581, marker:{radius:9}}],
  [{}, {y:37.8, kandidati: 5085, marker:{radius:7}}, {y:34.5, kandidati: 5683, marker:{radius:8}}, {y:38.5, kandidati: 6888, marker:{radius:8}}],
  [{}, {}, {}, {y:2.7, kandidati: 4552, marker:{radius:7}}],
  [{}, {y:3.8, kandidati: 11109, marker:{radius:11}}, {y:11.1, kandidati: 7993, marker:{radius:9}}, {y:58, kandidati: 3653, marker:{radius:6}}],
  [{}, {y:5, kandidati: 441, marker:{radius:2}}, {y:31.2, kandidati: 981, marker:{radius:3}}, {y:14.6, kandidati: 2963, marker:{radius:5}}],
  [{y:5.2, kandidati: 2648, marker:{radius:5}}, {y:1.2, kandidati: 1771, marker:{radius:4}}, {y:2.9, kandidati: 2177, marker:{radius:5}}, {y:12.3, kandidati: 1669, marker:{radius:4}}],
  [{y:5.6, kandidati: 5246, marker:{radius:7}}, {y:19.7, kandidati: 3640, marker:{radius:6}}, {y:52.3, kandidati: 2572, marker:{radius:5}}, {y:70.2, kandidati: 1553, marker:{radius:4}}],
  [{y:17.5, kandidati: 1541, marker:{radius:4}}, {y:19.3, kandidati: 1113, marker:{radius:3}}, {y:12.2, kandidati: 1052, marker:{radius:3}}, {y:11.5, kandidati: 1087, marker:{radius:3}}],
  [{}, {y:0.9, kandidati: 343, marker:{radius:2}}, {y:5.4, kandidati: 445, marker:{radius:2}}, {y:36, kandidati: 1147, marker:{radius:3}}],
  [{}, {y:5.1, kandidati: 730, marker:{radius:3}}, {y:1.7, kandidati: 2934, marker:{radius:5}}, {y:37.4, kandidati: 1126, marker:{radius:3}}],
  [{y:10.2, kandidati: 6823, marker:{radius:8}}, {y:8.7, kandidati: 2994, marker:{radius:5}}, {y:9.6, kandidati: 1732, marker:{radius:4}}, {y:10.4, kandidati: 1020, marker:{radius:3}}],
  [{}, {}, {y:11.3, kandidati: 690, marker:{radius:3}}, {y:10.6, kandidati: 1040, marker:{radius:3}}]

];

var stranyCR = ["celkem", "SNK", "KDU-ČSL", "KSČM", "ČSSD", "ODS", "ANO", "STAN", "SPD", "TOP", "Piráti", "Nezávislí", "SZ", "Nestraníci", "Soukromníci", "Svobodní", "SNK ED", "Pro zdraví a sport"];

$(function () {

    Highcharts.setOptions({
            lang: {
                months: ['leden', 'únor', 'březen', 'duben', 'květen', 'červen', 'červenec', 'srpen', 'září', 'říjen', 'listopad', 'prosinec'],
                weekdays: ['neděle', 'pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota'],
                shortMonths: ['leden', 'únor', 'březen', 'duben', 'květen', 'červen', 'červenec', 'srpen', 'září', 'říjen', 'listopad', 'prosinec'],
                thousandsSep: '',
                decimalPoint:',',
                rangeSelectorZoom: 'Zobrazit'
            }
        });

	Highcharts.chart('casovarada', {
	    chart: {
	        type: 'line'
	    },
	    title: {
	        text: 'Koalice v obecních volbách'
	    },
	    subtitle: {
	        text: 'podle navrhující strany, za roky 2006 až 2018'
	    },
	    xAxis: {
	        categories: [2006, 2010, 2014, 2018]
	    },
	    yAxis: {
	        title: {
	            text: 'podíl kandidátů v koalicích'
	        },
	        labels: {
	            format: '{value} %'
	        }
	    },
	    tooltip: {
	        pointFormat: '{point.series.name}: <b>{point.y} %</b> kandiduje v koalicích (celkem kandidátů: {point.kandidati})<br/>',
	        shared: false
	    },
	    exporting: {
	        enabled: false
	    },
	    credits: {
	        href: 'https://volby.cz/',
	        text: 'Zdroj: ČSÚ'
	    },
	    series: [{
	        name: stranyCR[0],
	        data: dataCR[0],
	        color: colorsCR[0],
	        marker: {
	            symbol: 'circle',
	            lineWidth: 1
	        },
	        visible: false
	    }, {
	        name: stranyCR[1],
	        data: dataCR[1],
	        color: colorsCR[1],
	        marker: {
	            symbol: 'circle',
	            lineWidth: 1
	        },
	        visible: false
	    }, {
	        name: stranyCR[2],
	        data: dataCR[2],
	        color: colorsCR[2],
	        marker: {
	            symbol: 'circle',
	            lineWidth: 1
	        },
	        visible: false
	    }, {
	        name: stranyCR[3],
	        data: dataCR[3],
	        color: colorsCR[3],
	        marker: {
	            symbol: 'circle',
	            lineWidth: 1
	        },
	        visible: false
	    }, {
	        name: stranyCR[4],
	        data: dataCR[4],
	        color: colorsCR[4],
	        marker: {
	            symbol: 'circle',
	            lineWidth: 1
	        },
	        visible: false
	    }, {
	        name: stranyCR[5],
	        data: dataCR[5],
	        color: colorsCR[5],
	        marker: {
	            symbol: 'circle',
	            lineWidth: 1
	        },
	        visible: false
	    }, {
	        name: stranyCR[6],
	        data: dataCR[6],
	        color: colorsCR[6],
	        marker: {
	            symbol: 'circle',
	            lineWidth: 1
	        },
	        visible: true
	    }, {
	        name: stranyCR[7],
	        data: dataCR[7],
	        color: colorsCR[7],
	        marker: {
	            symbol: 'circle',
	            lineWidth: 1
	        },
	        visible: false
	    }, {
	        name: stranyCR[8],
	        data: dataCR[8],
	        color: colorsCR[8],
	        marker: {
	            symbol: 'circle',
	            lineWidth: 1
	        },
	        visible: false
	    }, {
	        name: stranyCR[9],
	        data: dataCR[9],
	        color: colorsCR[9],
	        marker: {
	            symbol: 'circle',
	            lineWidth: 1
	        },
	        visible: true
	    }, {
	        name: stranyCR[10],
	        data: dataCR[10],
	        color: colorsCR[10],
	        marker: {
	            symbol: 'circle',
	            lineWidth: 1
	        },
	        visible: true
	    }, {
	        name: stranyCR[11],
	        data: dataCR[11],
	        color: colorsCR[11],
	        marker: {
	            symbol: 'circle',
	            lineWidth: 1
	        },
	        visible: false
	    }, {
	        name: stranyCR[12],
	        data: dataCR[12],
	        color: colorsCR[12],
	        marker: {
	            symbol: 'circle',
	            lineWidth: 1
	        },
	        visible: true
	    }, {
	        name: stranyCR[13],
	        data: dataCR[13],
	        color: colorsCR[13],
	        marker: {
	            symbol: 'circle',
	            lineWidth: 1
	        },
	        visible: false
	    }, {
	        name: stranyCR[14],
	        data: dataCR[14],
	        color: colorsCR[14],
	        marker: {
	            symbol: 'circle',
	            lineWidth: 1
	        },
	        visible: false
	    }, {
	        name: stranyCR[15],
	        data: dataCR[15],
	        color: colorsCR[15],
	        marker: {
	            symbol: 'circle',
	            lineWidth: 1
	        },
	        visible: false
	    }, {
	        name: stranyCR[16],
	        data: dataCR[16],
	        color: colorsCR[16],
	        marker: {
	            symbol: 'circle',
	            lineWidth: 1
	        },
	        visible: false
	    }, {
	        name: stranyCR[17],
	        data: dataCR[17],
	        color: colorsCR[17],
	        marker: {
	            symbol: 'circle',
	            lineWidth: 1
	        },
	        visible: false
	    }]
	});
})