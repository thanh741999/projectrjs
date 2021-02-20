import React from 'react'
import ClientNavBar from './ClientNavBar'
import {Container,Row,Col,Card,Button} from 'reactstrap'
import ImageComponent from './ImageComponent'
import ComonQuatityInput from './ComonQuatityInput'
import {connect} from 'react-redux'
import Swal from 'sweetalert2';
import Axios from 'axios';
import '../../style/productDetail.scss'
class   CartProduct extends React.Component {
    state= {
        quantyti:0,
    }
    componentDidMount() {
        this.setState({
            quantyti:this.props.product.quantyti
        })
    }
    handleDelete = ()=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                this.props.delete_Cart(this.props.product.id_cart)
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
    }
    handleChangeQuantyti = (data,operator = false)=>{
        if(operator) {
            if(this.state.quantyti === 1 && data === -1) {
                this.handleDelete()
            }
            return this.setState({
                quantyti:this.state.quantyti + data
            },()=>{
                this.props.Update_Cart(this.props.product.id_cart,this.state.quantyti)
            })
        }
        if (data === 0 || data < 0) {
            return this.handleDelete()
        }
        this.setState({
            quantyti: data
        },()=>{
            this.props.Update_Cart(this.props.product.id_cart,this.state.quantyti)
        })

    }
    render(){
        const {name,price,image,id,card_id,quantyti} = this.props.product
    return  <Card className="p-3 mb-3">
                <Row>
                    <Col md={3}>
                        {/* <ImageComponent items={image}></ImageComponent> */}
                        <img src={image} alt="cart-img"></img>
                    </Col>
                    <Col md={9}>
                        <h3>{name}</h3>
                        <h5 className="text-warning">{price}$</h5>
                        <ComonQuatityInput onChange={this.handleChangeQuantyti} value={this.state.quantyti}/>
                        <Button color="secondary" outline>submit</Button>
                    </Col>
                </Row>
            </Card>
    }
}
class Checkout extends React.Component {
    state={
        fullname:'',
        adress:'',
        phone:'',
    }
    handleClose = ()=> {
        this.props.toggleModal()
    }
    handleChange=(event)=>{
        this.setState({
         [event.target.name]: event.target.value
        })
    }
    handleSubmit=(event)=>{
        const {name,adress,phone} = this.state;
        event.preventDefault();
        console.log(this.props.cart)
        if(name ===''|| adress ==='' || phone ==='' || this.props.cart.length === 0)
        {
            Swal.fire({
                title:'Checkout Unsuccessfull',
                timer:2000,
                icon:'error',
                timerProgressBar:true
            })
            return ;
        }
        Axios.post('https://shopping-api-with-jwt.herokuapp.com/carts',{
            ...this.state,
            cart:[
                ...this.props.cart
            ],
            total_items:this.props.total_items,
            total_price:this.props.total_price,
        }).then(res=>{
            Swal.fire({
                title:'Checkout Successfull',
                timer:2000,
                icon:'success',
                timerProgressBar:true
            }).then(()=>{
                this.props.clearCart()
            this.handleClose()
            
            })
            
        }).catch(error=>{
            Swal.fire({
                title:'Checkout Unsuccessfull',
                timer:2000,
                icon:'error',
                timerProgressBar:true
            })
        })
    }
    render() {
        const {name,adress,phone} = this.state;
        return (
            <div className="model">
                <div className="content-cart">
                    <button className="btn btn-dark close" onClick={this.handleClose}>close</button>
                    <form onSubmit={this.handleSubmit} className="p-3">
                        <div className="form-group">
                            <label >Full Name</label>
                            <input type="text" name="name"class="form-control" placeholder="Full Name" value={name} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label >Adress</label>
                            <input type="text" name="adress"class="form-control" placeholder="Adress" value={adress} onChange={this.handleChange} min={1}/>
                        </div>
                        <div className="form-group">
                            <label >Phone</label>
                            <input type="text" name="phone"class="form-control" placeholder="Phone" value={phone} onChange={this.handleChange}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Check Out</button>
                    </form>
                </div>
            </div>
        )
    }

}
class Cart extends React.Component {
    state={
        open:false,
    }

    toggleModal=()=>{
        this.setState({
            open:!this.state.open
        })
    }
    render() {
        return (
            <>
                <ClientNavBar></ClientNavBar>
                <Container>
                    <Row>
                        <Col md={9}>
                            {this.props.cart.length > 0 ?
                            this.props.cart.map((product)=>{
                                return <CartProduct delete_Cart={this.props.deleteCart} Update_Cart={this.props.updateCart} product={product} key={product.card_id}></CartProduct>
                            }):<h3>Emty</h3>}
                        </Col>
                        <Col md={3}>
                            <Card className="p-3">
                                <h3>Total items:{this.props.total_items}</h3>
                                <h4 className="text-warning">Toal price:{this.props.total_price} </h4>
                                <Button color="secondary" outline onClick={this.toggleModal}>Check out</Button>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                {
                    this.state.open && <Checkout total_items={this.props.total_items} total_price={this.props.total_price} cart={this.props.cart} clearCart={this.props.clearCart}toggleModal={this.toggleModal}/>
                }
            </>
        )
    }
}
const mapStateToProps = (state)=> {
    const total_items = state.cart.reduce((total,product)=>{
        return total += product.quantyti
    },0)
    const total_price = state.cart.reduce((total,product)=>{
        return total += product.price*product.quantyti
    },0)
    return {
        cart: state.cart,
        total_items,
        total_price,
    }
}
const mapDispathToProps = (dispath)=> {
    return {
        updateCart:(id_cart,quantyti)=>{
                dispath({
                    type:"Update_Cart",
                    payload:{
                        id_cart,
                        quantyti,
                    }
                })
        },
        deleteCart:(id_cart)=>{
            dispath({
                type:"Delete",
                payload:id_cart,
            })
        },
        clearCart:()=>{
            dispath({
                type:'Clear_Cart',
            })
        }
    }
}
export default connect(mapStateToProps,mapDispathToProps)(Cart)