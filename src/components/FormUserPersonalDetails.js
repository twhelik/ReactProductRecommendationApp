import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';



export class FormUserPersonalDetails extends Component {

  continue = e =>{
    e.preventDefault();
    this.props.nextStep();
  }
  render() {

    const {values, handleChange} = this.props;

    return (
     <MuiThemeProvider>
        
        <React.Fragment>
            <AppBar title='Enter User Details' />
            <TextField
            hintText = 'Enter Your Name'
            floatingLabelText = 'Name'
            onChange={handleChange('name')}
            defaultValue={values.name}
            />
            <br/>

            <TextField
            hintText = 'Enter Your Gender'
            floatingLabelText = 'Gender'
            onChange={handleChange('gender')}
            defaultValue={values.gender}
            />
            <br/>
            <TextField
            hintText = 'Enter Your Age'
            floatingLabelText = 'Age'
            onChange={handleChange('age')}
            defaultValue={values.age}
            />

            <br/>

            <RaisedButton
              label= 'continue'
              primary = {true}
              style ={styles.button}
              onClick={this.continue}
            
            
           />
            
            
            </React.Fragment>
        
        
        </MuiThemeProvider>
    )
  }
}

const styles = {
  button : {
    margin : 15
  }
}




export default FormUserPersonalDetails
