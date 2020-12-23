import Axios from 'axios'
import React, { Component } from 'react'
import MaterialTable from 'material-table'

export default class Order extends Component {
    state={
        order:[]
    }
    componentDidMount() {
        this.setState({
            loading:true
        })
        Axios.get('https://shopping-api-with-jwt.herokuapp.com/carts').then(res=>{
            console.log(res)
            this.setState({
                order:res.data,
            })
        }).catch(err=>{
            this.setState({
            })
        })
    }
    

    render() {
        return (
            <>
                <MaterialTable title="Simpoe Action Preview"
                columns={[
                    {
                        title:"ID",
                        field:"id"
                    },
                    {
                        title:"Full name",
                        field:"name"
                    },
                    {
                        title:"So dien thoai",
                        field:"phone"
                    },
                    {
                        title:"Adress",
                        field:"adress"
                    },
                    {
                        title:"total_price",
                        field:'total_price'
                    }
                ]} data={this.state.order}        
                actions={[
                    {
                        icon: 'save',
                        tooltip: 'Save User',
                    },
                    {
                        icon: 'delete',
                        tooltip: 'Delete User',
                    }
                ]}
                options={{
                    actionsColumnIndex: -1
                  }}
                detailPanel={rowData => {
                    return (
                        rowData.cart.map(item=>{
                           return <h3>{item.name}</h3>
                        })
                        )
                }}
                />
            </>
                    
                  
        )
    }
}
