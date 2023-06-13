import React, { Component } from 'react';
import FormUserPersonalDetails from './FormUserPersonalDetails';
import FormUserHealthDetails from './FormUserHealthDetails';
import Confirm from './Confirm';
import RecommendationProductDetails from './RecommendationProductDetails';

export class UserForm extends Component {

  state={
    step: 1,
    name : '',
    gender : '',
    age : '',
    lifestyle : '',

  }   
  
  //Procedd Next Step
  nextStep =()=>{
    const {step} = this.state;
    this.setState({
        step : step +1 
    });
  }

  //Proceed Previos Step
  previousStep =()=>{
    const {step} = this.state;
    this.setState({
        step : step -1 
    });
  }
  resetStep =()=>{
    const {step} = this.state;
    this.setState({
        step : step -3,
        name : '',
    gender : '',
    age : '',
    lifestyle : '', 

    });
  }

  //Hanadle fields change
  handleChange = input => e =>{
    this.setState({[input]: e.target.value});
  }

  render() {
    const {step} = this.state;
    const {name , gender , age , lifestyle} = this.state;
    const values = {name, gender , age, lifestyle}


   switch(step){
    case 1 :
        return(
            <FormUserPersonalDetails
                nextStep ={this.nextStep}
                handleChange ={this.handleChange}
                values = {values}
             
             />
        )

    case 2 :
        return( 
            <FormUserHealthDetails
                nextStep={this.nextStep}
                previousStep ={this.previousStep}
                handleChange={this.handleChange}
                values={values}
            
        />
        )
    case 3 :
        return ( 
            <Confirm
                nextStep={this.nextStep}
                previousStep ={this.previousStep}
                values={values}
            
        />
        )

    case 4 :
        return ( 
            <RecommendationProductDetails
                nextStep={this.nextStep}
                previousStep ={this.previousStep}
                resetStep={this.resetStep}
                values={values}
            
        />
        )
   }
   
   
  }
}

export default UserForm
