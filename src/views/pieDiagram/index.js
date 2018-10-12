import React, { Component } from 'react'
import './index.less'

import ReactEcharts from 'echarts-for-react'
// import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/legend';

import { Card } from 'antd';

// import echartsTheme from './shine'

 class PieDiagram extends Component {

  // componentWillMount(){
  //   echarts.registerTheme('pietheme',echartsTheme)
  // }

  pie = () => {
    return {
      title : {
          text: '共享单车周数据',
          subtext: '纯属虚构',
          x: 'left'
      },
      tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)" // a:series.name, b:data.name, c:data.value, d:百分比
        },
      legend: {
          orient: 'vertical',
          // right: 'right',
          x:'right',
          data: ['周一','周二','周三','周四','周五','周六','周日']
      },
      series : [
          {
              name: '骑行订单',
              type: 'pie',
              radius : '80%',
              center: ['50%', '60%'],
              data:[
                  {value:335, name:'周一'},
                  {value:310, name:'周二'},
                  {value:234, name:'周三'},
                  {value:135, name:'周四'},
                  {value:548, name:'周五'},
                  {value:148, name:'周六'},
                  {value:154, name:'周日'},
              ],
              itemStyle: {
                  emphasis: {
                    // 阴影的大小
                      shadowBlur: 10,
                      // 阴影水平方向上的偏移
                      shadowOffsetX: 0,
                      // 阴影垂直方向上的偏移
                      shadowOffsetY: 0,
                      // 阴影颜色
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
              }
          }
      ]
  }
  }
  pie1 = () => {
    return {
      title : {
          text: '共享单车周数据',
          subtext: '纯属虚构',
          left: 'left'
      },
      tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)" // a:series.name, b:data.name, c:data.value, d:百分比
        },
      legend: {
          orient: 'vertical',
          right: 'right',
          // right: '20',
          // top: '20',
          data: ['周一','周二','周三','周四','周五','周六','周日']
      },
      series : [
          {
              name: '骑行订单',
              type: 'pie',
              radius : ['40%','80%'], //第一个参数，内圈的大小；第二个参数，整个圆的大小
              center: ['50%', '60%'], //圆的位置
              avoidLabelOverlap: false, //将所有的label显示居中
              label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '24',
                        fontWeight: 'bold'
                    }
                }
            },
            // labelLine: { normal: {show: false }},  ？？？
              data:[
                  {value:335, name:'周一'},
                  {value:310, name:'周二'},
                  {value:234, name:'周三'},
                  {value:135, name:'周四'},
                  {value:548, name:'周五'},
                  {value:148, name:'周六'},
                  {value:154, name:'周日'},
              ],
              itemStyle: {
                  emphasis: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowOffsetY: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
              }
          }
      ]
  }
  }

  render() {
    return (
      <div>
          <Card title='饼状图一'>
            <ReactEcharts option={this.pie()} ></ReactEcharts>
          </Card>
          <Card title='饼状图二'>
            <ReactEcharts option={this.pie1()} ></ReactEcharts>
          </Card>
      </div>
    )
  }
}

export default PieDiagram