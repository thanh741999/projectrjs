import { ListItem } from '@material-ui/core';
import React from 'react';
import {ListGroupItem,
    ListGroup,
    Form,
    Button,} from 'reactstrap';

const ClientSilebar = () => {
    return (
        <ListGroup>
                            <ListGroupItem>
                                Danh Muc Sản Phẩm
                                <ListItem>Áo Vải</ListItem>
                                <ListItem>Quần Kaki</ListItem>
                                <ListItem>Quần Jean</ListItem>
                                <ListItem>Áo Thun</ListItem>
                                <ListItem>Hoodie</ListItem>
                                <ListItem>Quần Váy</ListItem>
                                <ListItem>Sơ mi</ListItem>
                            </ListGroupItem>
                            <ListGroupItem>
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