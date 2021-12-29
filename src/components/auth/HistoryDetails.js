import React, { Component } from 'react';
import axios from 'axios'

export default class HistoryDetails extends Component
{
  componentDidMount()
  {
    const queryParams = new URLSearchParams(window.location.search);

    //const name = queryParams.get('name');
    const u = queryParams.get('u');
    const sk = queryParams.get('sk');
    const ts = queryParams.get('ts');
    
    const url = 'https://kt1bojna1d.execute-api.us-west-2.amazonaws.com/dev/survey?u='+u+'&sk='+sk+'&ts='+ts

    const iframename = document.getElementById('bottom').contentDocument;
    
    console.log(sessionStorage.getItem('token'));

     
          axios.get(url, {
            headers: {
              "Authorization": sessionStorage.getItem('token'),
            }
          })
          .then((response) => {
           iframename.write(response.data);
            console.log(response.data);
            //document.getElementById('bottom').innerTest = "response.data";  
          })
          .catch((error) => {})
  }

render(){

  const divalign = {
    align:"center",
    border:"1px",
    height:"1000px"
 
  }

  const iframecss = {
    align:"center",
    border:"1px",
    height:"100%",
    width:"100%"
 
  }

  return (
    <div style={divalign}>
        
                {!this.props.auth.isAuthenticated && (
                  this.props.history.push("/login")
                )}
                {this.props.auth.isAuthenticated && (
                   <div style={divalign}>
                    
      <p/><center><strong>{this.props.auth.user.username} Details</strong></center><p/>
      
 <iframe src="" title="CollaborationCare" name="bottom"  id="bottom" style={iframecss}></iframe> 
                  
                   </div> 
                   
                )}
              </div>
  )
}

}

