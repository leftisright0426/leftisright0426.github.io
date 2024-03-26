// 使用 ECharts 创建一个基本的柱状图

var chart1 = echarts.init(document.getElementById('chart1'));
var option1 = {
  title: {
    text: '县中现象新闻趋势图',
    subtext: '数据来源：锐研中文新闻数据库',
    textStyle: {
      color: 'black',
      fontSize: 16,
    },
    subtextStyle: {
      fontfamily: 'Helvetica',
      fontSize: 16,
    },
    top: 'bottom',
    left: 'center',

  },
  xAxis: {
    type: 'category',
    data: ['2005', '', '2008', '', '2013', '', '2015', '', '2019', '', '2021', '2023'],
    axisLine: {
      lineStyle: {
        color: '#000'
      }
    },
    axisLabel: {
      color: '#333',
    }
  },
  yAxis: {
    type: 'value',
    axisLine: {
      lineStyle: {
        color: '#000'
      }
    },
    axisLabel: {
      color: '#333',
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: '#ccc'
      }
    }
  },
  series: [
    {
      data: [10, 2, 1, 12, 2, 3, 1, 3, 5, 10, 9, 2],
      type: 'line',
      smooth: true,
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: 'rgba(30,144,255,0.7)' // 深蓝色渐变
        },
          {
            offset: 1,
            color: 'rgba(70,130,180,0)' // 透明
          }
        ])
      },
      markPoint: {
        data: [
          {type: 'max', name: '最大值'},
          {type: 'min', name: '最小值'}
        ]
      },
      animationDuration: 4000,
    }
  ],
  tooltip: {
    trigger: 'axis',
    backgroundColor: 'rgba(30,144,255,0.7)',
    textStyle: {
      color: '#fff'
    }
  },

};


// chart1.setOption(option1);

// 假设这是你的关键词和权重数据
var keywordData = [
  { name: '高考神话', value: 7 },
  { name: '应试教育', value: 6 },
  { name: '教育资源', value: 6 },
  { name: '县中模式', value: 6 },
  { name: '教学经验', value: 4 },
  { name: '教育怪相', value: 4 },
  { name: '硬件设施', value: 4 }
];

// 初始化echarts实例
var chart2 = echarts.init(document.getElementById('chart2'));

var option2 = {
  title: {
    text: '县中现象关键词',
    textStyle: {
      color: 'black',
    },
    top: 'bottom', // 将标题置于图表下方
    left: 'center' // 居中对齐
  },
  series: [{
    type: 'wordCloud',
    animationDuration: 2000,
    gridSize: 15, // 调整间隔
    sizeRange: [12, 60], // 调整大小范围
    rotationRange: [-90, 90],
    shape: 'circle', // 使用圆形形状
    width: 800, // 增加宽度
    height: 600, // 增加高度
    drawOutOfBound: true,
    textStyle: {

        color: function() {
          return 'rgb(' + [
            Math.round(Math.random() * 255),
            Math.round(Math.random() * 255),
            Math.round(Math.random() * 255)
          ].join(',') + ')';
        },

      emphasis: {
        shadowBlur: 10,
        shadowColor: '#333'
      }
    },
    data: [
      {name: '高考神话', value: 7},
      {name: '应试教育', value: 6},
      {name: '教育资源', value: 6},
      {name: '县中模式', value: 6},
      {name: '教学经验', value: 4},
      {name: '教育怪相', value: 4},
      {name: '硬件设施', value: 4},
      // ...
    ]
  }],
  tooltip: {
    trigger: 'axis',
  }};


// 使用刚指定的配置项和数据显示图表。
// chart2.setOption(option2);

var option3 = {

  title: {
    text: '县中困难关键词',
    textStyle: {
      color: 'black',
    },
    top: 'bottom', // 将标题置于图表下方
    left: 'center' // 居中对齐
  },
  series: [{
    animationDuration: 2000,
    type: 'wordCloud',
    gridSize: 15,
    sizeRange: [12, 60],
    rotationRange: [-90, 90],
    shape: 'circle',
    width: 800,
    height: 600,
    drawOutOfBound: true,
    textStyle: {

        color: function() {
          return 'rgb(' + [
            Math.round(Math.random() * 255),
            Math.round(Math.random() * 255),
            Math.round(Math.random() * 255)
          ].join(',') + ')';
        },

      emphasis: {
        shadowBlur: 10,
        shadowColor: '#333'
      }
    },
    data: [
      {name: '招生困难', value: 4},
      {name: '师资困难', value: 4},
      {name: '乡村学子命运', value: 5},
      {name: '薪酬待遇', value: 5},
      {name: '有关部门', value: 5},
      {name: '办学活力', value: 9},
      {name: '生源师资', value: 10},
      {name: '特色发展', value: 10},
      {name: '教育资源', value: 11},
      {name: '优秀教师', value: 11},
      {name: '招生计划', value: 11},
      {name: '优秀生源', value: 14},
      {name: '加强县域', value: 15},
      {name: '教育质量', value: 16},
      {name: '区域招生', value: 20},
      {name: '薄弱地区', value: 23},
      {name: '发达地区城区', value: 30}
    ]
  }],
  tooltip: {
    trigger: 'axis',
  }
};

// 初始化echarts实例
var myChart3 = echarts.init(document.getElementById('chart3'));

// 使用刚指定的配置项和数据显示图表。
// myChart3.setOption(option3);
var years = [];
for (var i = 2000; i <= 2023; i++) {
  years.push(i);
}
var values = [1,3,1,3,7,3,9,32,10,26,24,26,69,44,92,66,81,96,155,160,204,511,261,100];
var option4 = {
  title: {
    text: '县中困境新闻趋势',
    textStyle: {
      color: '#333' // 重新设置标题颜色
    },
    top: '90%',
    left: 'center',
    subtext: '数据来源：锐研中文新闻数据库',
  },
  xAxis: {
    type: 'category',
    data: years,
    axisLabel: {
      textStyle: {
        color: '#333' // 重新设置x轴标签颜色
      }
    }
  },
  yAxis: {
    type: 'value',
    max: 600,
    axisLabel: {
      textStyle: {
        color: '#333' // 重新设置y轴标签颜色
      }
    }
  },
  series: [{
    animationDuration: 2000,
    type: 'line',
    data: values,
    lineStyle: {
      color: '#FF7F50' // 重新设置折线颜色
    },
    itemStyle: {
      color: '#FF7F50' // 重新设置点的颜色
    }
  }],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  }
};


// 初始化echarts实例
var myChart4 = echarts.init(document.getElementById('chart4'));

// 使用刚指定的配置项和数据显示图表。
// myChart4.setOption(option4);


// 初始化echarts
var chart5 = echarts.init(document.getElementById('chart5'));

// 数据
var data5 = [
  {source: '城区', target: '正高级', value: 5334},
  {source: '城区', target: '副高级', value: 306322},
  {source: '城区', target: '中级', value: 382705},
  {source: '城区', target: '教师总数', value: 1054513},
  {source: '镇区', target: '正高级', value: 2035},
  {source: '镇区', target: '副高级', value: 223403},
  {source: '镇区', target: '中级', value: 310664},
  {source: '镇区', target: '教师总数', value: 898258},
  {source: '乡村', target: '正高级', value: 220},
  {source: '乡村', target: '副高级', value: 14092},
  {source: '乡村', target: '中级', value: 21465},
  {source: '乡村', target: '教师总数', value: 75570},
];

// 配置
var option5 = {
  title: {
    text: '2021年度不同职级教师分布图',
    subtext: '数据来源：教育部年度教育统计数据',
    top: 'top',
    left: 'center',
    padding: [0, 0, 20, 0], // 这会在标题和副标题之间增加20像素的边距
    textStyle: {
      fontSize: 20,
      color: 'black',
    },
    subtextStyle: {
      fontSize: 15,
      color: 'black',
    }
  },

    series: {
    type: 'sankey',
    layout: 'none',
    data: [
      {name: '城区'},
      {name: '镇区'},
      {name: '乡村'},
      {name: '正高级'},
      {name: '副高级'},
      {name: '中级'},
      {name: '教师总数'}
    ],
    links: data5,
    animation: true, // 开启动画
    animationDuration: 2000, // 动画持续时间
    animationEasing: 'quadraticInOut',
    lineStyle: {
      color: 'source' // 可以根据源节点自动选择颜色
      // 或者使用固定的颜色，例如 color: 'red'
    }
  },
  tooltip: {
    trigger: 'item',
    formatter: function (params) {
      if (params.dataType === "edge") {
        return `${params.data.source} -> ${params.data.target} : ${params.data.value}`;
      } else {
        return params.name;
      }
    }
  }
  };

// 使用刚指定的配置项和数据显示图表。
// chart5.setOption(option5);

// 初始化echarts
var chart6 = echarts.init(document.getElementById('chart6'));

// 数据
var data6 = [
  { name: '非常不满意', value: 79, color: '#FF5722' }, // 每个数据项指定颜色
  { name: '不满意', value: 233, color: '#FFC107' },
  { name: '满意', value: 128, color: '#8BC34A' },
  { name: '非常满意', value: 14, color: '#03A9F4' }
];

// 配置
var option6 = {
  title: {
    text: '教师对薪酬满意情况',
    subtext: '数据来源：中国县域高中教师职业发展特征分析（2020-2021）',
    top: 'top', // 将标题放在底部
    left: 'center',
    subtextStyle: {  // 修正这里
      fontSize: 12, // 设置 subtext 的字体大小
      color: 'gray',
    }
  },

  xAxis: {
    type: 'category',
    data: data6.map(item => item.name),
    axisTick: {
      alignWithLabel: true
    }
  },
  yAxis: {
    type: 'value'
  },
  series: [{
    animationDuration: 2000,
    type: 'bar',
    barWidth: '50%',
    data: data6.map(item => ({
      value: item.value,
      itemStyle: {
        color: item.color // 使用数据项中指定的颜色
      }
    }))
  }],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow' // 显示在柱子的阴影位置
    }
  }};

// 使用刚指定的配置项和数据显示图表。
// chart6.setOption(option6);
// 初始化echarts
var chart7 = echarts.init(document.getElementById('chart7'));

// 学科列表和对应的薪酬数据
var subjects = ['地理', '物理', '历史', '化学', '数学', '英语', '语文', '生物', '政治'];
var salaries = [4772.0, 4543.0, 4518.7, 4464.5, 4460.9, 4397.4, 4337.6, 4151.8, 4053.5];
// 计算平均月薪的值
var averageSalary = 4401.1;
// 设置图表的配置项和数据
var option7 = {
  title: {
    text: '学科教师实际薪酬情况',
    x: 'center',
    subtext:'数据来源：中国县域高中教师职业发展特征分析（2020～2021）'
  },
  xAxis: {
    type: 'category',
    data: subjects
  },
  yAxis: {
    type: 'value',
    name: '薪酬',
    min: 0,
    max: Math.max(...salaries) + 500, // 调整纵坐标的范围
    interval: 500
  },
  series: [{
    animationDuration: 2000,
    name: '薪酬',
    type: 'bar',
    data: salaries,
    itemStyle: {
      color: function() {
        return 'rgb(' + [
          Math.round(Math.random() * 255),
          Math.round(Math.random() * 255),
          Math.round(Math.random() * 255)
        ].join(',') + ')';
      },
    },
    // 添加tooltip配置
    emphasis: {
      focus: 'series',
      trigger: 'item',
      formatter: '{b}: {c} 元' // 显示学科和薪酬
    }
  }, {
    // 平均薪酬的水平直线
    type: 'line',
    data: Array(subjects.length).fill(averageSalary),
    symbol: 'none',
    lineStyle: {
      color: 'white',
      type: 'dashed'
    }
  }],
  // 添加tooltip配置
  tooltip: {
    trigger: 'axis',
  }
};


// 使用刚指定的配置项和数据显示图表。
// chart7.setOption(option7);


var dataOrange = [
  364.8655, 364.8727, 373.5274, 378.2122, 374.6924, 293.0927, 293.5470, 294.4136, 293.2179, 273.6861, 301.4263, 291.7762, 81.4224
].reverse();

var dataBlue = [
  404.6934, 404.6834, 421.0455, 437.2203, 439.4533, 486.4291, 477.2596, 477.8623, 477.0935, 515.1259, 488.3443, 433.7612, 400.9038
].reverse();

// 初始化echarts
var chart8 = echarts.init(document.getElementById('chart8'));

// 配置
var option8 = {
  animationDuration: 2000,
  title: {
    text: '2003-2015全国普通高中招生数域-县折线图',
    top: 'top' ,// 将标题放在底部
    left: 'center'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['dataOrang', 'dataBlue'],
    textStyle: {
      fontSize: 17, // 调整字体大小
    },
  },
  xAxis: {
    type: 'category',
    data: [
      '2003', '2004', '2005', '2006', '2007', '2008',
      '2009', '2010', '2011', '2012', '2013', '2014', '2015'
    ]
  },
  yAxis: {
    type: 'value'
  },
  series: [

    {
      name: '城市普通高中招生数(万人)',
      type: 'line',
      data: dataOrange,
      color: '#FFA726' // 橙色
    },
    {
      name: '县镇普通高中招生数(万人)',
      type: 'line',
      data: dataBlue,
      color: '#1976D2' // 蓝色
    }
  ]
};

// 使用刚指定的配置项和数据显示图表。
// chart8.setOption(option8);

var years9 = ['2015年', '2016年', '2017年', '2018年', '2019年', '2020年', '2021年'];
var localHighSchool = [45, 46, 61, 63, 42, 24, 31];
var outsideHighSchool = [57, 55, 42, 39, 60, 76, 69];
// 初始化echarts
var chart9 = echarts.init(document.getElementById('chart9'));

// 配置
var option9 = {
  title: {
    text: '2015年至2021年中考成绩前100名学生 高中升学去向',
    subtext: '数据来源：吴秋翔.从“县中塌陷”到县中振兴：高考专项计划如何改变县中困局[J].',
    textStyle: {
        color: 'black',
    },
    subtextStyle: {
        color: 'black',
    },
    top: 'bottom', // 将标题放在底部
    left: 'center'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    data: ['就读本县高中人数(人)', '就读县外高中人数(人)'],
    textStyle: {
      fontSize: 17, // 调整字体大小
    },
  },
  xAxis: {
    type: 'category',
    data: years9
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '就读本县高中人数(人)',
      type: 'bar',
      data: localHighSchool,
      itemStyle: {
        color: '#1976D2' // 蓝色
      }
    },
    {
      name: '就读县外高中人数(人)',
      type: 'bar',
      data: outsideHighSchool,
      itemStyle: {
        color: '#FFA726' // 橙色
      }
    },

  ],
  animationDuration: 2000,
};

// 使用刚指定的配置项和数据显示图表。
// chart9.setOption(option9);


// var chart10 = echarts.init(document.getElementById('chart10'));
var option10 = {
  title: {
    text: '县中的"恶性循环"',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  series: [
    {
      animationDuration: 2000,
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      data: [
        { value: 500, name: '更多的生源流失',
          label: {
            fontSize: 16, // 标签字体大小
            color: 'blue'
          }
        },
        { value: 500, name: '更差的高考成果' ,
          label: {
            fontSize: 16, // 标签字体大小
            color: '#61a0a8'
          }
        },
        { value: 500, name: '更少的教育投入',
          label: {
            fontSize: 16, // 标签字体大小
            color: '#d48265'
          }},
        { value: 500, name: '更匮乏的教育资源' ,
          label: {
            fontSize: 16, // 标签字体大小
            color: '#c23531'
          }},
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }

      },
      labelLine: {
        show: true, // 显示标签线
        length: 20, // 标签线的长度
        length2: 20 // 标签线的第二段长度
      },

    },

  ],
};

// chart10.setOption(option10);


// var chart11 = echarts.init(document.getElementById('chart11'));
option11 = {
  title: {
    text: '城市高中的"良性循环"',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  series: [
    {
      animationDuration: 2000,
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      data: [
        { value: 500, name: '更好的优秀生源',
          label: {
            fontSize: 16, // 标签字体大小
            color: 'blue'
          }
          },
        { value: 500, name: '更好的高考成果' ,
          label: {
            fontSize: 16, // 标签字体大小
            color: '#61a0a8'
          }
        },
        { value: 500, name: '更多的教育投入',
          label: {
            fontSize: 16, // 标签字体大小
            color: '#d48265'
          }},
        { value: 500, name: '更丰厚的教育资源' ,
          label: {
            fontSize: 16, // 标签字体大小
            color: '#c23531'
          }},
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }

      },
      labelLine: {
        show: true, // 显示标签线
        length: 20, // 标签线的长度
        length2: 20 // 标签线的第二段长度
      },

    },

  ],
};

// chart11.setOption(option11);

var chart12 = echarts.init(document.getElementById('chart12'));
var option12 = {
  title: {
    text: '中国普通高中数量分布',
    subtext: '数据来源：中华人民共和国教育部',
    left: 'center',
    subtextStyle: {
      fontSize: 14, // 设置 subtext 的字体大小
      color: 'black',
    }
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    top: 'bottom', // 垂直居中
    textStyle: {
      fontSize: 16, // 调整字体大小
      color: '#ff5733' // 调整颜色
    },
  },
  series: [
    {
      animationDuration: 2000,
      type: 'pie',
      radius: '50%',
      data: [
        { value: 7000, name: '城市高中数量：0.70万',  itemStyle: { color: '#1E90FF' } },
        { value: 7200, name: '县域高中数量：0.72万',  itemStyle: { color: '#FF6A6A' } },

      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};
// chart12.setOption(option12);
var chart13 = echarts.init(document.getElementById('chart13'));

var option13 = {
  animationDuration: 2000,
  title: {
    text: '东、中、西部县域高中学生高中数量',
    subtext: '  数据来源：《2023年乡村教育发展报告》',
    left: 'center',
    subtextStyle: {
      fontSize: 14, // 设置 subtext 的字体大小
      color: 'black',
    }
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    data: ['在校', '招生', '毕业'],
    top: 'bottom',
    textStyle: {
      fontSize: 16, // 调整字体大小
      color: '#ff5733' // 调整颜色
    },
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '15%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: ['西部省份', '中部省份', '东部省份']
  },
  yAxis: {
    type: 'value',
    name: '人数（万人）'
  },
  series: [
    {
      name: '在校',
      type: 'bar',
      stack: '总量',
      data: [427.4, 484.7, 395.7],
      emphasis: {
        focus: 'series'
      }
    },
    {
      name: '招生',
      type: 'bar',
      stack: '总量',
      data: [147.9, 169.7, 140],
      emphasis: {
        focus: 'series'
      }
    },
    {
      name: '毕业',
      type: 'bar',
      stack: '总量',
      data: [134, 144.4, 110.6],
      emphasis: {
        focus: 'series'
      }
    }
  ]
};

// chart13.setOption(option13);

var chart14 = echarts.init(document.getElementById('chart14'));
let years14 = ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'];
let cityData = [802471, 818567, 856102, 890694, 920308, 954686, 998909, 1054513];
let townData = [805347, 821705, 822116, 825874, 831249, 840901, 864626, 898258];
let villageData = [54882, 55082, 55241, 57385, 61027, 63655, 69693, 75570];
var option14 = {
  animationDuration: 4000,
  title: {
    text: '2014-2021年普通高中专任教师数',
    subtext: '城区、镇区、乡村',
    top: 'bottom' ,// 将标题放在底部
    left: 'center',
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['城区', '镇区', '乡村'],
    textStyle: {
      fontSize: 16, // 调整字体大小
      color: '#ff5733' // 调整颜色
    },
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: years14
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '城区',
      type: 'line',
      data: cityData,
      color: '#ff4500',
      smooth: true, // 使线条更加平滑
      emphasis: {
        focus: 'series'
      }
    },
    {
      name: '镇区',
      type: 'line',
      data: townData,
      color: '#32cd32',
      smooth: true,
      emphasis: {
        focus: 'series'
      }
    },
    {
      name: '乡村',
      type: 'line',
      data: villageData,
      color: '#1e90ff',
      smooth: true,
      emphasis: {
        focus: 'series'
      }
    }
  ]
};
// chart14.setOption(option14)
var data15 = {
  schools: ['团陂高中', '黄冈中学', '华师大附中'],
  scoresAbove600: [0, 70, 86.27],
  oneBenRate: [0.56, 97, 99.12],
  undergradRate: [9.29, 98, 99.9]
};
var chart15 = echarts.init(document.getElementById('chart15'));
var option15 = {
  title: {
    text: '三所学校2023年的高考情况',
    subtext: '数据来源：各学校官网',
    top: 'bottom',
    left: 'center'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    data: ['600分以上', '一本率', '本科率'],
    textStyle: {
      fontSize: 16, // 调整字体大小
      color: '#ff5733' // 调整颜色
    },
  },
  xAxis: {
    type: 'category',
    data: data15.schools
  },
  yAxis: {},
  series: [
    {
      name: '600分以上',
      type: 'bar',
      data: data15.scoresAbove600,
      itemStyle: {
        color: 'red'
      }
    },
    {
      name: '一本率',
      type: 'bar',
      data: data15.oneBenRate,
      itemStyle: {
        color: 'yellow'
      }
    },
    {
      name: '本科率',
      type: 'bar',
      data: data15.undergradRate,
      itemStyle: {
        color: 'blue'
      }
    }
  ]
};
// 创建一个 IntersectionObserver 实例
var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      // 当图表进入视窗时，执行以下代码

      // 获取图表编号
      var chartNumber = entry.target.dataset.chartNumber;

      // 初始化图表
      var chart = echarts.init(document.getElementById('chart' + chartNumber));

      // 根据图表编号设置相应的数据和选项
      var option = window['option' + chartNumber];

      // 设置图表的数据和选项
      chart.setOption(option);

      // 停止监听，避免重复执行
      observer.unobserve(entry.target);
    }
  });
});

// 监听所有图表元素
for (var i = 1; i <= 15; i++) {
  if(i == 10 || i == 11 ){
    continue;
  }
  var chartElement = document.getElementById('chart' + i);
  chartElement.dataset.chartNumber = i;
  observer.observe(chartElement);
}
