import React from 'react';
import Axios from 'axios'
import Swal from 'sweetalert2'
export default class Model extends React.Component {
    state = {
        loading:false,
        name:"",
        Price:20,
        image_one:"",
        image_two:"",
        image_three:"",
    }
    handleChange = (event)=> {
        this.setState({
            [event.target.name]:event.target.value,
        })
    }
    handleSubmit = (event)=> {
        event.preventDefault()
        const {name,price,image_one,image_two,image_three} = this.state
        const image=[image_one,image_two,image_three]
        if(name === ''|| price === ''||image === '') {
            Swal.fire({
                title:'Unsuccessfull',
                timer:2000,
                icon:'error',
                timerProgressBar:true
            })
            return
        } 
        if(this.props.edittingProduct) {
            const _state = {...this.state};
            // delete _state.loading;
            this.props.updateProduct(this.props.edittingProduct.id,_state)
        }
        else {
            this.props.addProduct(name,price,image)
            this.handleClose()
        }
        this.setState({
            loading:true,
        })
    }
    handleClose = ()=> {
        this.props.toggleModal()
    }
    componentDidMount() {
        if(this.props.edittingProduct)
        {
            this.setState({
                loading:true,
            })
            console.log(this.props.edittingProduct)
            Axios.get(`https://shopping-api-with-jwt.herokuapp.com/products/${this.props.edittingProduct.id}`).then(res=>{
                console.log(res)
                const {image,price,name} = res.data
                this.setState({
                    image_one:image[0],
                    image_two:image[1],
                    image_three:image[2],
                    price,
                    name,
                    loading:false
                })
            }).catch(err=>{
                console.log(err)
                this.setState({
                    loading:false
                })
            })
            const {name,price,image} = this.props.edittingProduct;
            this.setState({
                name,
                price,
                image,
            })
        }
        else {

        }
    }
    componentWillUnmount() {
        this.props.clearIsEditting()
    }
    
        render() {
            const {name,price,image_one,image_two,image_three} = this.state;
            return (
                <div className="model">
                    <div className="content">
                        <button className="btn btn-dark close" onClick={this.handleClose}>close</button>
                        <form onSubmit={this.handleSubmit} className="p-3">
                            <h5>{this.props.edittingProduct?'Update':'Create'} Product</h5>
                            <div className="form-group">
                                <label >Product Name</label>
                                <input type="text" name="name"class="form-control" placeholder="Product Name" value={name} onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label >Product Price</label>
                                <input type="number" name="price"class="form-control" placeholder="Product Price" value={price} onChange={this.handleChange} min={1}/>
                            </div>
                            <div className="form-group">
                                <label >Product Image_one</label>
                                <input type="text" name="image_one"class="form-control" placeholder="Product Image" value={image_one} onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label >Product Image_two</label>
                                <input type="text" name="image_two"class="form-control" placeholder="Product Image" value={image_two} onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label >Product Image_three</label>
                                <input type="text" name="image_three"class="form-control" placeholder="Product Image" value={image_three} onChange={this.handleChange}/>
                            </div>
                            <button type="submit" className="btn btn-primary">{this.props.edittingProduct?"Update":"ADD"}</button>
                        </form>
                    </div>
                </div>

            )
        }
}