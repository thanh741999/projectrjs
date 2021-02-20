import React from 'react'
import Star from '../../img//star-regular'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider  from 'react-slick'
import {Col, Card, ListGroup, ListGroupItem} from 'reactstrap'
import { Link } from 'react-router-dom';
// 
const product_sale = ['https://product.hstatic.net/1000351433/product/4a3c7686-0b83-4ab1-abff-de3d21a1758e_31d51d9c063940f09bddd0e5ac3475d3_grande.jpg',
"https://product.hstatic.net/1000351433/product/193d9383-2e68-459f-9410-5e2401faafd0_0acca79e2ab04140913356573bf595f0_grande.jpg",
"https://product.hstatic.net/1000351433/product/a1612015-3b99-4f80-a884-b24ef08296e8_30c6eeb7acb048589f3b3f8146d0c0ac_grande.jpg",
"https://product.hstatic.net/1000351433/product/75ef9ba9-926e-4f21-a533-583afbb62e7b_46bc0046a175484fa9ea328db9ef4716_grande.jpg",
"//bizweb.dktcdn.net/thumb/large/100/331/067/products/106493627-1104633393243213-3606329519053421832-n.jpg?v=1596542759000",
"//bizweb.dktcdn.net/thumb/large/100/331/067/products/123249733-1518238965231068-2542738556674352399-n.jpg?v=1604149138000",
"//bizweb.dktcdn.net/thumb/large/100/331/067/products/130191086-4695038163904375-4136105752107117386-n.jpg?v=1607664796000",
"//bizweb.dktcdn.net/thumb/large/100/331/067/products/130991720-203716081300693-7533353712156573740-n.jpg?v=1607664697000",
]
export default function ProductSale(props) {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
    return (
        
        <Slider {...settings}>
             {product_sale.map((product,index)=>{
                 return (
                        <Col md={12}>
                            <Card className="product-sale">
                                <div className="sale"></div>
                                     <Link to="/product">
                                        <img src={product} alt="sale_img">
                                        </img>
                                     </Link>
                                <div className="product-info">
                                    <h3 className="product-name">
                                       <Link to="/product">Product {index}</Link> 
                                    </h3>
                                    <div className="product-star">
                                        <ListGroup>
                                            <ListGroupItem><Star></Star></ListGroupItem>
                                            <ListGroupItem><Star></Star></ListGroupItem>
                                            <ListGroupItem><Star></Star></ListGroupItem>
                                            <ListGroupItem><Star></Star></ListGroupItem>
                                            <ListGroupItem><Star></Star></ListGroupItem>
                                        </ListGroup>
                                    </div>
                                    <div className="product-price">
                                        <div className="special-price">
                                            <span>30$</span>
                                        </div>
                                        <div className="old-price">
                                            <span>50$</span>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </Col>                                        
                )
                })}
        </Slider>
    )
}
