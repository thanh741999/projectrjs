import React from 'react';
// import ProductRow from './ProductRow'
import ContentHeader from './ContentHeader'
import ProductRow from './ProductRow';
import Modal from './Modal'
import Axios from 'axios';
import {Spinner} from 'reactstrap'
import Swal from 'sweetalert2';
export default class Maincontent extends React.Component {
    state = {
        isEditting: undefined,
        open_modal: false,
        products:[
        ],
        loading: true,
    }
    componentDidMount(){

        this.getData()
    }
    getData(){
        this.setState({
            products:[]
        })
        Axios.get("https://shopping-api-with-jwt.herokuapp.com/products").then(res=>{
            this.setState({
                products:res.data,
                loading: false,
            })
        })
    }
    addProduct = (name,price,image) => {
        Axios.post('https://shopping-api-with-jwt.herokuapp.com/products',{
            name,
            price,
            image,
        },{
            headers:{
                token:window.localStorage.getItem('admin_token')
            }
        }).then(res=>{
            Swal.fire({
                title: 'Create Sucssessfully',
                timer: 2000,
                icon:"success",
            })
        }).catch(error=>{
            this.handleError(error);
        })
    }
    handleError = (err) => {
        if(err.response.status === 401 || err.response.status === 403){
            Swal.fire({
                title:"Unauthorized, Please Login again!",
                text:err.message,
                timer:1000,
                icon:'error'
            }).then(()=>{
                window.localStorage.setItem('admin_token','');
                this.props.history.push('/admin/login')
            })
        }
    }
    
    
    deleteProduct = (id) => {
        Axios.delete(`https://shopping-api-with-jwt.herokuapp.com/products/${id}`,{
            headers:{
                token: window.localStorage.getItem('admin_token')
            }
        }).then(res=>{
            Swal.fire({
                title: 'Delete Sucssessfully',
                timer: 2000,
                icon:"success",
            })
            this.getData();
        }).catch(err=>{
            this.handleError(err)
        })
    }
    updateProduct = (id,data)=> {
        Axios.patch(`https://shopping-api-with-jwt.herokuapp.com/products/${id}`,data,{
            headers:{
                token: window.localStorage.getItem('admin_token')
            }
        }).then(res=>{
            Swal.fire({
                title: 'Update Sucssessfully',
                timer: 2000,
                icon:"success",
            })
            this.getData();
            this.toggleModal()
        }).catch(err=>{
            console.log(err.response)
            this.handleError(err)
            this.toggleModal()

        })
    }
    
    updateIsEditting = (id) => {
        const product_index = this.state.products.findIndex((product)=>{
            return product.id === id
        })
        this.setState({
            isEditting:product_index,
        })
        this.toggleModal()
    }
    toggleModal = ()=> {
        this.setState({
            open_modal:!this.state.open_modal,
        })
    }
    clearIsEditting = () => {
        this.setState({
            isEditting:undefined
        })
    }
    render() {
       return (
           <>
             <ContentHeader toggleModal={this.toggleModal}></ContentHeader>
                <div className="content-table">
                    <div className="table-headers">
                        <div className="table-header">
                            id
                        </div>
                        <div className="table-header">
                            Name
                        </div>
                        <div className="table-header">
                            Price
                        </div>
                        <div className="table-header">
                            image
                        </div>
                        <div className="table-header">
                            Action
                        </div>
                    </div>
                    {this.state.loading && <Spinner color="secondary" />}
                    {this.state.products.map((product)=>{
                        return <ProductRow updateIsEditting={this.updateIsEditting} toggleModal={this.toggleModal} deleteProduct={this.deleteProduct} key={`product_id${product.id}`} product={product} ></ProductRow>
                    })}       
                </div>
                {this.state.open_modal?<Modal  updateProduct={this.updateProduct} clearIsEditting={this.clearIsEditting} edittingProduct={this.state.products[this.state.isEditting]} addProduct={this.addProduct} toggleModal={this.toggleModal}></Modal>:''}
                
           </>
       )
    }
}