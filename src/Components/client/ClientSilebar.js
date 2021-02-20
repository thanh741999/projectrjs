import { ListItem } from '@material-ui/core';
import React from 'react';
import {ListGroupItem,
    ListGroup,
    Form,
    Button,} from 'reactstrap';
import {Link} from 'react-router-dom'

const ClientSilebar = () => {
    return (
        <ListGroup>
                            <ListGroupItem className="product-title">
                                Danh Muc Sản Phẩm
                                <ListItem><Link>Áo Vải</Link> </ListItem>
                                <ListItem><Link>Quần Kaki</Link> </ListItem>
                                <ListItem><Link>Quần Jean</Link> </ListItem>
                                <ListItem><Link>Áo Thun</Link> </ListItem>
                                <ListItem><Link>Hoodie</Link> </ListItem>
                                <ListItem><Link>Quần Váy</Link> </ListItem>
                                <ListItem><Link>Sơ mi</Link> </ListItem>
                            </ListGroupItem>
                            <ListGroupItem className="price">
                                Giá
                                <ListItem>
                                    10$-20$
                                </ListItem>
                                <ListItem>
                                    20$-40$
                                </ListItem>
                                <ListItem>
                                    40$-80$
                                </ListItem>
                                <ListItem>
                                    80$-100$
                                </ListItem>
                            </ListGroupItem>
        </ListGroup>
    );
};

export default ClientSilebar;