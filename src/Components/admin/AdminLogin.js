import React, { Component } from 'react'
import { Card,
     Form,
     FormGroup,
     Label,
     Input,
     Button,
    } from 'reactstrap'
import Axios from 'axios';
import Swal from 'sweetalert2'
import '../../style/adminLogin.scss'
export default class Login extends Component {
   state = {
       email:"",
       password:""
   }
   handleChange = (event)=> {
       this.setState({
            [event.target.name]: event.target.value
       })
   }
   componentDidMount() {
       const token = window.localStorage.getItem('admin_token');
       if (token) {
           this.props.history.push('/admin')
       }
   }
   handleLogin = (e) => {
       e.preventDefault();
       Axios.post('https://shopping-api-with-jwt.herokuapp.com/login',{
        ...this.state
    }).then((res)=>{
            const token = res.data;
            window.localStorage.setItem('admin_token',token);
            Swal.fire({
                title: 'Login Sucssessfully',
                timer: 2000,
                icon:"success",
            }).then(()=>{
                this.props.history.push('/admin')
            })
       }).catch((error)=>{
            Swal.fire({
                title: 'Login unSucssessfully',
                timer: 2000,
                icon:"error",
            })
       })

   }
    render() {
        return (
            <div className="main-content">
                <Form className="form-page" onSubmit={this.handleLogin}>
                    <h1>Admin Login</h1>
                    <FormGroup>
                        <Label for="exampleEmail">Username</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="Username" onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="Password" onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary">Dang Nhap</Button>
                    </FormGroup>
                 </Form>
            </div>
        )
    }
}
