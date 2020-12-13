import React from 'react';
import {
    Row,Spinner} from 'reactstrap';
import Product from './Product';
import {connect} from 'react-redux';
import Axios from 'axios';
 class ProductList extends React.Component {
    state = {
        products: [],
        loading: false
    }
    componentDidMount() {
        this.setState({
            loading: true
        })
        Axios.get('https://shopping-api-with-jwt.herokuapp.com/products').then(res=>{
            this.setState({
                products:res.data,
                loading: false
            })
        })
        .catch(error=>{
            console.log(error)
        })
    }
    render() {
        return (
            <Row>
                {this.state.loading && <Spinner color="secondary" />}
                {this.state.products.map((product,index)=>{
                    return <Product addToCart = {this.props.add_To_Cart} key={`$Product_${index}`} id = {product.id} name={product.name} price={product.price} image={product.image}></Product>
                })}
            </Row>
        )
    }
}
const mapDispathToProps = (dispath)=> {
    return {
        add_To_Cart: (product,quantyti)=>{
            dispath({
                type:"Add_To_Cart",
                payload:{...product,quantyti}
            })
        }
    }
 }
export default connect(null,mapDispathToProps)(ProductList)