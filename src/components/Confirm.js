import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';



export class Confirm extends Component {

  continue = e =>{
    e.preventDefault();
    //send the data to API or server
    this.props.nextStep();
  }

  back = e =>{
    e.preventDefault();
    this.props.previousStep();
  };

  render() {

    const {values : {name,age,gender,lifestyle} } = this.props;

    return (
     <MuiThemeProvider>
        
        <React.Fragment>
            <AppBar title='Confirm User Details' />
            <List>
                <ListItem
                    primaryText ='name'
                    secondaryText= {name}
                    />

            </List>
            <br/>
            <List>
                <ListItem
                    primaryText ='gender'
                    secondaryText= {gender}
                    />

            </List>

            <br/>
            <List>
                <ListItem
                    primaryText ='age'
                    secondaryText= {age}
                    />

            </List>
            <br/>
            <List>
                <ListItem
                    primaryText ='lifestyle'
                    secondaryText= {lifestyle}
                    />

            </List>
            <br/>

            <RaisedButton
              label= 'confirm & continue'
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




export default Confirm
