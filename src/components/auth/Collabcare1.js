import React, { Component } from 'react';
import Tabs from './Tabs';
import authService from './AuthService';

export default class CollabCare1 extends Component
{
  componentWillMount()
  {
    const queryParams = new URLSearchParams(window.location.search);

    const name = queryParams.get('name');
    const u = queryParams.get('u');
    const checksk = queryParams.get('checksk');
    const a = queryParams.get('a');
    const presk = queryParams.get('presk');
    

    authService.setUserDashboardSession(name,u,checksk,presk,a);

    console.log(sessionStorage.getItem('name'));
    console.log(sessionStorage.getItem('u'));
    console.log(sessionStorage.getItem('checksk'));
    console.log(sessionStorage.getItem('presk'));
    console.log(sessionStorage.getItem('a'));
  }
  
render(){



  const divalign = {
    align:"center",
    border:"1px",
    height:"1000px"
 
  }


  return (
    <div>
        <div>
        
        </div>
                {!this.props.auth.isAuthenticated && (
                  this.props.history.push("/login")
                )}
                {this.props.auth.isAuthenticated && (
                   <div style={divalign}>
                     <Tabs/>
                   </div> 
                   
                )}
              </div>
  )
}
}
