import React from 'react'
import { Row,Col, FormControl, Form } from 'react-bootstrap'
import './login.css'
export default function 
() {
  return (
    <div class="wrapper">
        <div class="text-center mt-4 name"> Login Component </div>
        <Form as={'form'} className="p-3 mt-3">
           
            <div class="form-field d-flex align-items-center"> 
                <span class="far fa-user"></span> 
                <FormControl type="text" name="userName" id="userName" placeholder="Username" required/> </div>
            <div class="form-field d-flex align-items-center">
                 <span class="fas fa-key"></span> 
                 <FormControl type="password" name="password" id="pwd" placeholder="Password" required/> </div> <button class="btn mt-3">Login</button>
            
        </Form>
        <div class="text-center fs-6"> <a href="#">Forget password?</a> or <a href="#">Sign up</a> </div>
    </div>
  )
}

