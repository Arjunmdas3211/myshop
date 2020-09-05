import React from 'react';

import './sign-in.styles.scss';
import FormInput from './../form-input/form-input.component';
import CustomButton from './../custom-button/custom-button.component';



class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }

}
handleSubmit=  event =>{
    event.preventDefault();

    this.state({email:'', password:''});
};
handleChange = event =>{
    const  {name , value} = event.target;
    this.setState({[name]: value});
};

render(){
    return(
    <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
            <FormInput type="email" name='email' label='Email' value={this.state.email} handleChange={this.handleChange} required/>
            
            <FormInput type="password" name='email' label='Password' value={this.state.password} handleChange={this.handleChange} required/>
            

            <CustomButton type='submit'>Sign In</CustomButton>
        </form>
    </div>
    ); 
}
}
export default SignIn;
