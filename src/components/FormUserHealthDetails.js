import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';



export class FormUserHealthDetails extends Component {

  continue = e =>{
    e.preventDefault();
    this.props.nextStep();
  };
  back = e =>{
    e.preventDefault();
    this.props.previousStep();
  };

  render() {

    const {values, handleChange} = this.props;

    return (
     <MuiThemeProvider>
        
        <React.Fragment>
            <AppBar title='Enter User Health Details' />
            <TextField
            hintText = 'Enter Your LifeStyle'
            floatingLabelText = 'LifeStyle'
            onChange={handleChange('lifestyle')}
            defaultValue={values.lifestyle}
            />
            <br/>


            <br/>

            <RaisedButton
              label= 'Continue'
              primary = {true}
              style ={styles.button}
              onClick={this.continue}
           />

            <RaisedButton
              label= 'Back'
              primary = {false}
              style ={styles.button}
              onClick={this.back}
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




export default FormUserHealthDetails
