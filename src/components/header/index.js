import React, { Component } from 'react';
import './index.less'
import { connect} from 'react-redux'
import {formaDate as utils} from '../../utils'
import axios from 'axios'
// import {axios as fetch} from '../../utils'


class HeaderTop extends Component {
    state = {
        time : "2018-01-01",
        weather : "天气晴朗",
        timeer:null,
    } 

    getTime () {
        let unixdate = new Date().getTime()
        let timeStr  = utils(unixdate)
        this.setState({time: timeStr})
        this.getTimeInter()
        // // 异步操作，会在渲染之后执行，需先渲染一次数据，再执行异步操作，
        // setInterval(()=>{
        //     let unixdate = new Date().getTime()
        //     // let timeStr  = utils.formaDate(unixdate)
        //     let timeStr  = utils(unixdate)
        //     this.setState({
        //         time: timeStr
        //     })
        // },1000)
    }
    //不在componentWillMount钩子内执行异步操作===============================
    getTimeInter(){
        // 异步操作，会在渲染之后执行，需先渲染一次数据，再执行异步操作，
        this.state.timeer =  setInterval(()=>{
            let unixdate = new Date().getTime()
            // let timeStr  = utils.formaDate(unixdate)
            let time  = utils(unixdate)
            this.setState({ time })
        },1000)
    }

    getWeather() {
        // fetch.get('http://t.weather.sojson.com/api/weather/city/101010700').then(res => {
        //     console.log(res)
        // })
        axios.get('http://t.weather.sojson.com/api/weather/city/101010700').then(res => {
            let weatherData = res.data.data.forecast[0]
            let weatherStr = `${weatherData.low} ~ ${weatherData.high} ${weatherData.fx} ${weatherData.fl}`
            this.setState({weather: weatherStr})
        })
    }

    componentWillMount(){
        this.getTime()
        this.getWeather()
        // if(this.props.className == 'header-top'){
        //     console.log('aaa');
        // }
        // console.log(this.props);
    }
    componentWillUnmount(){
        clearInterval(this.state.timeer)
    }
    render() {
        return (
            <div className={ this.props.className == 'header-top' ? 'header-detail' : 'header-wrap'}> 
                <div className='header clearfix'>
                    <div className='user-info flr'>
                        <div className="user-wrap fll">欢迎，<span className="username">姓名</span></div>
                        <div className='logout fll'>退出</div>
                    </div>
                </div>
                {
                    this.props.className == 'header-top' ? '' :
                    <div className='header-detail clearfix'>
                        <div className="breadcrumb-title fll">{this.props.menuText}</div>
                        <div className="weather flr clearfix">
                            <div className="date fll">{this.state.time}</div>
                            <div className="weather-detail fll">{this.state.weather}</div>
                        </div>
                    </div> 
                }
            </div>
        );
    }
}

// export default HeaderTop;
// export default connect(
//     // function mapStateToProps(state){
//     //     return {
//     //         mennuText : state.mennuText
//     //     }
//     // }
//     (state)=>({
//         mennuText: state.mennuText
//     })
// )(HeaderTop);
function mapStarteTopProps(state) {
    return {
        menuText: state.menuText
    }
}
export default connect(mapStarteTopProps)(HeaderTop);
