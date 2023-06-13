import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import imagefemalevitamin from '../images/female.jpg'



export class RecommendationProductDetails extends Component {

  continue = e =>{
    e.preventDefault();
    this.props.nextStep();
  };
  back = e =>{
    e.preventDefault();

    this.props.resetStep();
  };

  render() {

    const {values, handleChange} = this.props;

    return (
     <MuiThemeProvider>
        
        <React.Fragment>
            <AppBar title='Recommended Products For You' />
            
            <br/>
            <img src={imagefemalevitamin}  width={1000}  alt="" />

            <br/>

            <RaisedButton
              label= 'Finished'
              primary = {true}
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




export default RecommendationProductDetails
