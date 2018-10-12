import React from 'react';
import './index.less'
import axios from '../../utils/axios'

import {Form,Select,Card,DatePicker,Button,Table,Spin,message,Modal} from 'antd'
// Pagination
const FormItem = Form.Item;
const Option = Select.Option;
const { RangePicker } = DatePicker;


class Order extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tableData:[],
            tableDatafilter:[], //使用handleSearch()方法时修改了数据，所以将一个存储数据，一个显示数据，
            // 方法二，定义一个方法，返回数据
            pn:1,
            pagination:{
                current: 1,//当前页数
                pageSize: 10,//每页条数
                total: '',
                // size: 'small' //middle
            },
            isLoading:false,
            // selectedIndex:'',
            // selectedItem: null,
            endItem: {},
        };
    }
    // 数据查询功能
    handleSearch(){
        // console.log(this.props.form)
        // console.log(this.props.form.getFieldsValue())
        // this.setState({
        //     tableDatafilter: this.state.tableData.filter(item => item.status == this.props.form.getFieldsValue().status )
        // })
        if(this.props.form.getFieldsValue().status == undefined){
            return this.state.tableData
        }else{
            return this.state.tableData.filter(item => item.status == this.props.form.getFieldsValue().status )
        }
    }
    orderDetails = () => {
        // window.open(`/#/admin/details`, '_blank')
        // console.log(this.state.selectedItem)
        if(this.state.selectedItem){
            let id = this.state.selectedItem[0].id
            window.open(`/#/admin/details/${id}`, '_blank')
        }else{
            message.warning('选择一条订单！！！')
        }
    }
    // 重置数据，使用此方法不需要绑定this
    resetData = () => {
        this.props.form.resetFields()
    }
    // 获取数据
    getData = async () => {
        await this.setState({
            isLoading:true
        },() => { //解决this.setState({})赋值语句的异步问题，
            // 在setState({},()=>{(回调函数)})的回调函数内写方法，
            // 或者用async,await,以及其他方法
        })
        axios.get('/order/list',this.state.pn).then(res => {
            // console.log(res)
            if(res.code == 0){
                this.setState({
                    isLoading: false,
                    tableData: res.result.item_list.map((item,index) => {
                        item.key = index
                        return item
                    }),
                    pagination: {
                        current: res.result.page,
                        pageSize: res.result.page_size,
                        total: res.result.total_count,
                    },
                })
                this.setState({
                    tableDatafilter: this.state.tableData
                })
            }
        })
    }
    // 结束订单
    handleDel = async () => {
        if(this.state.selectedItem){
            await this.setState({
                visible: true,
                loading: true
            })
            // 在点击结束订单还是在选择订单后获取数据？？？
            axios.get('/order/ebike_info',{id: this.state.selectedItem[0].id}).then(res => {
                // console.log(res);
                if(res.code == 0){
                    this.setState({
                        endItem:res.result,
                        loading: false
                    })
                }else{
                    // message.warning('获取数据失败！')
                    Modal.error({
                        centered: true,
                        className: '',
                        title:'消息提示',
                        content: '获取数据失败！',
                        onOk:()=>{},
                        onCancel: ()=>{},
                    })
                }
            })
        }else{
            message.warning('选择一条订单！！！')
        }
    }

    handleOk = () =>{
        // console.log(this.state.endItem);
        axios.get('/order/finish_order',this.state.endItem.id).then(res => {
            // console.log(res)
            if(res.code == 0){
                message.info('成功结束行程！')
                this.getData()
                setTimeout(() => {
                    this.setState({
                        visible:false
                    })
                },500)
            }else{
                message.error('行程结束失败！请检查网络！')
                setTimeout(() => {
                    this.setState({
                        visible:false
                    })
                },500)
            }
        })
    }
    // handleCancel = () => { this.setState({visible: false})}

    // 渲染之前的钩子函数,将要装载,在render之前调用
    componentWillMount(){
        this.getData()
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        // , getFieldsError, getFieldError, isFieldTouched
        // const columns = [{
        //     title: '姓名',
        //     dataIndex: 'name',
        //     key: 'name',
        //     // render:(text, record) => (
        //     //     <span> {record} {text}</span>
        //     //   )
        //     // Function(text, record, index) {} 参数：当前行的值，当前行数据，行索引
        // },]
        // const Pagination = {
        //     total: '',  //总数
        //     defaultCurrent: '',     //默认第几页
        //     Current: '',//当前页
        //     pageSize: '',   //每页多少条
        //     onChange: (index)=>{ }, //index:页数
        // }
        // 表格数据显示的配置
        const tableColumns = [
            {
                title:'订单编号',
                dataIndex:'order_sn',
                key: 'order_sn'
            },
            {
                title: '车辆编号',
                dataIndex: 'bike_sn',
                key: 'bike_sn'
            },
            {
                title: '用户名',
                dataIndex: 'user_name',
                key: 'user_name'
            },
            {
                title: '手机号',
                dataIndex: 'mobile',
                key: 'mobile'
            },
            {
                title: '里程',
                dataIndex: 'distance',
                render(distance){
                    return distance/1000 + 'Km';
                },
                key: 'distance'
            },
            {
                title: '行驶时长',
                dataIndex: 'total_time',
                key: 'total_time'
            },
            {
                title: '状态',
                dataIndex: 'status',
                key: 'status'
            },
            {
                title: '开始时间',
                dataIndex: 'start_time',
                key: 'start_time'
            },
            {
                title: '结束时间',
                dataIndex: 'end_time',
                key: 'end_time'
            },
            {
                title: '订单金额',
                dataIndex: 'total_fee',
                key: 'total_fee'
            },
            {
                title: '实付金额',
                dataIndex: 'user_pay',
                key: 'user_pay'
            }
        ]
        //城市数据配置
        const cityOption = [
            {
                label:'北京',
                value:0
            },
            {
                label:'上海',
                value:1
            },
            {
                label:'广州',
                value:2
            },
        ]
        //状态数据配置
        const orderStatus = [
            {
                label:'进行中',
                value:0
            },
            {
                label:'已完成',
                value:1
            },
            {
                label:'结束行程',
                value:2
            },
        ]
        //分页pagination属性的onChange方法
        this.state.pagination.onChange = (index) => {
            // console.log(this)
            // console.log(index)
            this.state.pn = index
            this.getData()
        }
        //表格数据选择功能的配置
        const rowSelection = {
            type: 'radio',
            onChange: async (selectedRowKeys, selectedRows) => {
                // console.log(selectedRowKeys, selectedRows) //selectedRowKeys表格数据的索引，selectedRows所选行的数据
                await this.setState({
                    selectedIndex: selectedRowKeys,
                    selectedItem: selectedRows,
                })
                // axios.get('/order/ebike_info',{id: this.state.selectedItem[0].id}).then(res => {
                //     console.log(res);
                //     if(res.code == 0){
                //         this.setState({
                //             endItem:res.result
                //         })
                //     }else{
                //         message.warning('获取数据失败！')
                //     }
                // })
            }
        }

        return (
            <div className='form-wrap'>
                <Card>
                    <Form layout="inline">
                        <FormItem label='城市：'>
                            {getFieldDecorator('city',{
                                rules: [{ required: false, message: 'Is Required !' }],
                                // initialValue: 0,
                            })(
                                <Select style={{ width: 150 }} placeholder='请选择一个城市'>
                                    {cityOption.map((item,index) => <Option value={item.value} key={index}>{item.label}</Option>)}
                                </Select>
                            )}
                        </FormItem>
                        <FormItem label='时间段：'>
                            {getFieldDecorator('data',{

                            })(
                                <RangePicker></RangePicker>
                            )}
                        </FormItem>
                        <FormItem label='订单状态：'>
                            {getFieldDecorator('status',{
                                // initialValue: 0
                            })(
                                <Select style={{ width: 150 }} placeholder='订单状态'>
                                    {orderStatus.map(item => <Option value={item.value} key={item.value}>{item.label}</Option>)}
                                </Select>
                            )}

                        </FormItem>
                        <div className='button-wrap flr'>
                            <Button type='primary' onClick={this.handleSearch.bind(this)}>查询</Button>
                            <Button type='ghost' onClick={this.resetData}>重置</Button>
                        </div>
                    </Form>
                </Card>
                <Card style={{marginTop: '-1px'}}>
                    <div className='button-content-wrap'>
                        <Button type='primary' onClick={this.orderDetails}>订单详情</Button>
                        <Button type='danger' onClick={this.handleDel}>结束订单</Button>
                    </div>
                </Card>
                <Card>
                    <Table 
                        bordered
                        className='table-wrap' 
                        columns={tableColumns}
                        // dataSource={this.state.tableData}
                        // dataSource={this.state.tableDatafilter}
                        dataSource={this.handleSearch()}
                        pagination={this.state.pagination}
                        loading={this.state.isLoading}
                        rowSelection={rowSelection}></Table>
                </Card>
                <Modal
                    title='结束订单'
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={() => { this.setState({ visible: false }) }}>
                    <Spin spinning={this.state.loading}>
                        <ul className='ul-data'>
                            <li>
                                <span className='li-title'>车辆编号：</span>
                                {this.state.endItem.bike_sn}
                            </li>
                            <li>
                                <span className='li-title'>剩余电量：</span>
                                {this.state.endItem.battery}
                            </li>
                            <li>
                                <span className='li-title'>行程开始时间：</span>
                                {this.state.endItem.start_time}
                            </li>
                            <li>
                                <span className='li-title'>当前位置：</span>
                                {this.state.endItem.location}
                            </li>
                        </ul>
                    </Spin>
                </Modal>
            </div>
        );
    }
}

// export default Order;
export default Form.create()(Order);
