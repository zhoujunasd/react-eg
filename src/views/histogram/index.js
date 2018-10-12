import React from 'react';
import './index.less'

import ReactEcharts from 'echarts-for-react'
// import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/title'
import 'echarts/lib/component/markPoint';

import { Card } from 'antd';

class Histogram extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount(){
        this.renderPie()
    }

    renderPie = () => {
        this.options = {
            color: ['#3398DB'],
            title:{
                text: '共享单车周订单',
                // x: 'center',
                left: 'left'
            },
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '5%',
                right: '5%',
                bottom: '5%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis : [
                { type : 'value' }
            ],
            series : [
                {
                    name:'共享单车订单量',
                    type:'bar',
                    barWidth: '50%',
                    data:[122, 532, 200, 334, 290, 330, 620]
                }
            ]
        };
        this.options2 = {
            // 标题
            title: {
                text: '用户骑行订单',
                x: 'center'
            },
            // 提示
            tooltip : {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            // x轴的内容
            xAxis : [
                {
                    type : 'category',
                    data : ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            // 悬浮图标的内容，数据以及位置
            legend: {
                data: ['OFO','摩拜', '小蓝单车'],
                right:'right'
            },
            // y轴显示的内容
            yAxis : [
                {
                    type : 'value',
                }
            ],
            // 数据
            series : [
                {   
                    name:'OFO',     //数据名
                    type:'bar',     //数据显示类型
                    data:[500, 1000, 1600, 3000, 2800, 2600, 2870]
                },
                {
                    name: '摩拜',
                    type: 'bar',
                    data: [600, 1200, 1800, 5000, 6000, 8000, 10000]
                },
                {
                    name: '小蓝单车',
                    type: 'bar',
                    data: [300, 600, 800, 1800, 2000, 1500, 1000]
                }
            ]
        }
    }

    options1 = () => {
        return {
            title : {
                text: '某地区蒸发量和降水量',
                subtext: '纯属虚构'
            },
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:['蒸发量','降水量']
            },
            toolbox: {
                show : true,
                feature : {
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'蒸发量',
                    type:'bar',
                    data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                    markPoint : {
                        data : [
                            {type : 'max', name: '最大值'},
                            {type : 'min', name: '最小值'}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name: '平均值'}
                        ]
                    }
                },
                {
                    name:'降水量',
                    type:'bar',
                    data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                    markPoint : {
                        data : [
                            {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183},
                            {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name : '平均值'}
                        ]
                    }
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <Card title='柱形图一'>
                    <ReactEcharts option={this.options}></ReactEcharts>
                </Card>
                <Card title='柱形图二'>
                    <ReactEcharts option={this.options1()}></ReactEcharts>
                </Card>
                <Card title='柱形图三'>
                    <ReactEcharts option={this.options2}></ReactEcharts>
                </Card>
            </div>
        );
    }
}


export default Histogram;
