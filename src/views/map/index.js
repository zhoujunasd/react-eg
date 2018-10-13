import React from 'react';
import PropTypes from 'prop-types';
import HeaderTop from './../../components/header/index';
import './index.less'
import { Card,message,Divider } from 'antd';
import FooterBottom from './../../components/footer/index';
import axios from '../../utils/axios'
import startImg from '../../static/imgs/01.jpg'
import endImg from '../../static/imgs/02.jpg'

class MapCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            point: [],
            info:{}
        };
    }

    // componentWillMount(){
        // console.log(this.props.match.params.id)
        // console.log(this.props)
    // }

    componentDidMount(){
        axios.get('/order/detail',this.props.match.params.id).then(res => {
            console.log(res)
            if(res.code == 0){
                // this.initMap(res.result)
                this.initMap(res.result)
                this.setState({
                    info: res.result
                })
            }else{
                message.error('获取数据失败！')
            }
        })
    }

    initMap = (result) =>  {
        // console.log(window)
        const BMap = window.BMap
        this.map = new BMap.Map("container");   // 创建地图实例 
        // this.map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
        this.drawPolyline(result.position_list)
        this.addContral()
        this.drawServiceArea(result.area)

    }

    addContral = () => {
        const BMap = window.BMap
        const map = this.map
        map.addControl(new BMap.NavigationControl({
            anchor:window.BMAP_ANCHOR_TOP_RIGHT
        }));    
        map.addControl(new BMap.ScaleControl({
            anchor:window.BMAP_ANCHOR_TOP_RIGHT
        }));
    }

    drawPolyline = (position_list) => {
        const BMap = window.BMap
        const map = this.map

        let startPoint = position_list[0]
        let endPoint = position_list[position_list.length -1]

        let startBmapPoint = new BMap.Point(startPoint.lon,startPoint.lat)
        let endBmapPoint = new BMap.Point(endPoint.lon,endPoint.lat)

        // var startIcon = new BMap.Icon("/start_point.png", new BMap.Size(23, 25), {    
        //     imageSize: new BMap.Size(23, 25)
        // }); 
        // var endIcon = new BMap.Icon("/end_point.png", new BMap.Size(23, 25), {    
        //     imageSize: new BMap.Size(23, 25)
        // }); 
        var startIcon = new BMap.Icon(startImg, new BMap.Size(23, 25), {    
            // 指定定位位置。   
            // 当标注显示在地图上时，其所指向的地理位置距离图标左上    
            // 角各偏移10像素和25像素。您可以看到在本例中该位置即是   
            // 图标中央下端的尖角位置。    
            // anchor: new BMap.Size(10, 25),    
            // 设置图片偏移。   
            // 当您需要从一幅较大的图片中截取某部分作为标注图标时，您   
            // 需要指定大图的偏移位置，此做法与css sprites技术类似。    
            // imageOffset: new BMap.Size(0, 0 - index * 25)   // 设置图片偏移    
            imageSize: new BMap.Size(23, 25)
        });
        var endIcon = new BMap.Icon(endImg, new BMap.Size(23, 25), {    
            imageSize: new BMap.Size(23, 25)
        });     

        // 创建标注对象并添加到地图   
        let startmarker = new BMap.Marker(startBmapPoint,{icon: startIcon});
        let endmarker = new BMap.Marker(endBmapPoint,{icon: endIcon});
        map.addOverlay(startmarker)
        map.addOverlay(endmarker)

        map.centerAndZoom(startBmapPoint, 11); //设置地图的中心点

        let polyline = new BMap.Polyline(position_list.map(item =>{
            return new BMap.Point(item.lon, item.lat)
        }),
            {strokeColor:"blue", strokeWeight:4, strokeOpacity:1}
            );
        map.addOverlay(polyline);
    }

    drawServiceArea = (area) => {
        const BMap = window.BMap
        const map = this.map
        let polygon = new BMap.Polygon(
            area.map(item =>{
                return new BMap.Point(item.lon, item.lat)
            }),{ strokeColor:'red', strokeWeight: 3,strokeStyle: 'dashed', fillColor:'yellow',strokeOpacity:0.5}
        ) 
        map.addOverlay(polygon);
    }

    render() {
        return (
            <div className='content-detailes'>
                <HeaderTop className='header-top'></HeaderTop>
                <Card className='w1170'  title='地图详情'>
                    <div id='container' className='bmap-wrap'></div>
                    <div className="detail-info">
                        <div className="item-title">
                            基础信息<Divider type="vertical" />
                        </div>
                            <Divider dashed>states</Divider>
                        <ul>
                            <li>
                                <span className="info-left">用车模式：</span>
                                <span className="info-right">{this.state.info.mode == 1 ? '服务区': '停车点'}</span>
                            </li>
                            <li>
                                <span className="info-left">订单编号：</span>
                                <span className="info-right">{this.state.info.order_sn}</span>
                            </li>
                            <li>
                                <span className="info-left">车辆编号：</span>
                                <span className="info-right">{this.state.info.bike_sn}</span>
                            </li>
                            <li>
                                <span className="info-left">用户姓名：</span>
                                <span className="info-right">{this.state.info.user_name}</span>
                            </li>
                            <li>
                                <span className="info-left">手机号码：</span>
                                <span className="info-right">{this.state.info.mobile}</span>
                            </li>
                        </ul>
                    </div>
                    <div className="detail-info">
                        <div className="item-title">
                            行驶轨迹
                        </div>
                            <Divider orientation="left" >轨迹数据</Divider>
                        <ul className='info-wrap'>
                            <li>
                                <span className="info-left">行程起点：</span>
                                <span className="info-right">{this.state.info.start_location}</span>
                            </li>
                            <li>
                                <span className="info-left">行程终点：</span>
                                <span className="info-right">{this.state.info.end_location}</span>
                            </li>
                            <li>
                                <span className="info-left">行驶里程：</span>
                                <span className="info-right">{this.state.info.distance/1000 + 'KM'}</span>
                            </li>
                        </ul>
                    </div>
                </Card>
                <FooterBottom></FooterBottom>
            </div>
        );
    }
}

MapCreate.propTypes = {};

export default MapCreate;
