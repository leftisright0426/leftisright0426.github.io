var data = {
    '西部': {
        '在校': 427.4,
        '招生': 147.9,
        '毕业': 134
    },
    '中部': {
        '在校': 484.7,
        '招生': 169.7,
        '毕业': 144.3
    },
    '东部': {
        '在校': 395.7,
        '招生': 140,
        '毕业': 110.6
    }
};

var currentRegion = '西部'; // 默认为西部

var option = {
    tooltip: {},
    geo: {
        map: 'china',
        regions: [{
            name: '西部',
            itemStyle: {
                areaColor: '#ffdead'
            }
        }, {
            name: '中部',
            itemStyle: {
                areaColor: '#ffb6c1'
            }
        }, {
            name: '东部',
            itemStyle: {
                areaColor: '#ffa07a'
            }
        }],
        emphasis: {
            itemStyle: {
                areaColor: '#ff4500'
            }
        }
    },
    xAxis: {
        type: 'category',
        data: ['在校', '招生', '毕业']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        type: 'bar',
        data: [data[currentRegion]['在校'], data[currentRegion]['招生'], data[currentRegion]['毕业']]
    }]
};

var myChart = echarts.init(document.getElementById('container'));

myChart.setOption(option);

// 添加鼠标事件
myChart.on('mouseover', function(params) {
    if (params.componentType === 'geo') {
        currentRegion = params.name;
        myChart.setOption({
            series: [{
                data: [data[currentRegion]['在校'], data[currentRegion]['招生'], data[currentRegion]['毕业']]
            }]
        });
    }
});
