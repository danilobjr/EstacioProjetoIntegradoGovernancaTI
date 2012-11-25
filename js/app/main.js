$(function () {

    var poChart = new Highcharts.Chart({
	            
        chart: {
            renderTo: 'grafico-po',
            polar: true,
            type: 'area'
        },
	    
        title: {
            text: 'Planejar e Organizar',
            x: -80
        },
	    
        pane: {
            size: '80%'
        },
	    
        xAxis: {
            categories: ['PO-01', 'PO-02', 'PO-03', 'PO-04', 'PO-05',
	                'PO-06', 'PO-07', 'PO-08', 'PO-09', 'PO-10'],
            tickmarkPlacement: 'on',
            lineWidth: 0
        },
	        
        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0,
            max: 5
        },
	    
        tooltip: {
            shared: true            
        },
	    
        legend: {
            align: 'right',
            verticalAlign: 'top',
            y: 100,
            layout: 'vertical'
        },
	    
        series: [{
            name: 'Nível de Maturidade',
            data: [1, 2, 2, 1, 5, 2, 2, 1, 2, 5],
            pointPlacement: 'on'
        }]
	
    });

    var aiChart = new Highcharts.Chart({

        chart: {
            renderTo: 'grafico-ai',
            polar: true,
            type: 'area'
        },

        title: {
            text: 'Aquisição e Implementação',
            x: -80
        },

        pane: {
            size: '80%'
        },

        xAxis: {
            categories: ['AI-01', 'AI-02', 'AI-03', 'AI-04', 'AI-05',
	                'AI-06', 'AI-07'],
            tickmarkPlacement: 'on',
            lineWidth: 0
        },

        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0,
            max: 5
        },

        tooltip: {
            shared: true
        },

        legend: {
            align: 'right',
            verticalAlign: 'top',
            y: 100,
            layout: 'vertical'
        },

        series: [{
            name: 'Nível de Maturidade',
            data: [2, 2, 0, 0, 2, 0, 0],
            pointPlacement: 'on'
        }]

    });

    var aiChart = new Highcharts.Chart({

        chart: {
            renderTo: 'grafico-ds',
            polar: true,
            type: 'area'
        },

        title: {
            text: 'Entrega e Suporte',
            x: -80
        },

        pane: {
            size: '80%'
        },

        xAxis: {
            categories: ['DS-01', 'DS-02', 'DS-03', 'DS-04', 'DS-05', 'DS-06', 'DS-07',
                        'DS-08', 'DS-09', 'DS-10', 'DS-11', 'DS-12', 'DS-13'],
            tickmarkPlacement: 'on',
            lineWidth: 0
        },

        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0,
            max: 5
        },

        tooltip: {
            shared: true
        },

        legend: {
            align: 'right',
            verticalAlign: 'top',
            y: 100,
            layout: 'vertical'
        },

        series: [{
            name: 'Nível de Maturidade',
            data: [1, 0, 1, 1, 2, 3, 0, 0, 0, 4, 0, 1, 2],
            pointPlacement: 'on'
        }]

    });

    var aiChart = new Highcharts.Chart({

        chart: {
            renderTo: 'grafico-me',
            polar: true,
            type: 'area'
        },

        title: {
            text: 'Monitoração e Avaliação',
            x: -80
        },

        pane: {
            size: '80%'
        },

        xAxis: {
            categories: ['ME-01', 'ME-02', 'ME-03', 'ME-04'],
            tickmarkPlacement: 'on',
            lineWidth: 0
        },

        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0,
            max: 5
        },

        tooltip: {
            shared: true
        },

        legend: {
            align: 'right',
            verticalAlign: 'top',
            y: 100,
            layout: 'vertical'
        },

        series: [{
            name: 'Nível de Maturidade',
            data: [3, 0, 0, 0],
            pointPlacement: 'on'
        }]

    });

});