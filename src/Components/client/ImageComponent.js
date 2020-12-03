import React from 'react'
import { Col, Container,Row } from 'reactstrap'
import '../../style/productDetail.scss'
export default class ImageComponent extends React.Component {
    state = {
        items:[],
        selected: 0,
    }
    componentDidMount(){
        this.setState({
            items:this.props.items,
        })
    }
    handleSelect = index => {
        this.setState({
            selected:index,
        })
    }
    render() {
        return (
            <Container fluid>
            <Row>
            <img  className='img-items' src={(typeof this.state.items) !== 'string' ? this.state.items[this.state.selected] : this.state.items}></img>
            </Row>
            {(typeof this.state.items) !== 'string' && <Row className="mt-3">   
                        {this.state.items.map((item,index)=>{
                            return <Col md={4} onClick={()=>{this.handleSelect(index)}}>
                                <img className='img-items' key={index} src={item}></img>
                            </Col>
                        })}
                    </Row>}
            </Container>
            
        )
            
    }
}