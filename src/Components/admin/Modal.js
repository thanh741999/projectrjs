import React from 'react';
import Axios from 'axios'
export default class Model extends React.Component {
    state = {
        loading:false,
        name:"",
        Price:20,
        image_one:"https://product.hstatic.net/1000351433/product/4a3c7686-0b83-4ab1-abff-de3d21a1758e_31d51d9c063940f09bddd0e5ac3475d3_grande.jpg",
        image_two:"https://product.hstatic.net/1000351433/product/4eee6a98-f7e1-4c2d-a132-b301793f3722_fae4260f34d14b4fb1817eeb2a69d7c7_grande.jpg",
        image_three:"https://product.hstatic.net/1000351433/product/e5c92366-2f71-425b-8d4b-49be6b8d2399_36fdea90d03a43cf8c53c7079f0c2db1_grande.jpg",
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
        if(this.props.edittingProduct) {
            const _state = {...this.state};
            delete _state.loading;
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
    // getDrivedStateFromProps(props,state) {
    //     return {

    //     }
    //     this.componentDidUpdate()
    // }
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
                                <input type="text" name="image"class="form-control" placeholder="Product Image" value={image_one} onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label >Product Image_two</label>
                                <input type="text" name="image"class="form-control" placeholder="Product Image" value={image_two} onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label >Product Image_three</label>
                                <input type="text" name="image"class="form-control" placeholder="Product Image" value={image_three} onChange={this.handleChange}/>
                            </div>
                            <button type="submit" className="btn btn-primary">{this.props.edittingProduct?"Update":"ADD"}</button>
                        </form>
                    </div>
                </div>

            )
        }
}