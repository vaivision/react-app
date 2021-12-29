import React, { Component } from 'react';
import axios from 'axios';

export default class Checkins extends Component
{
  componentDidMount()
  {
    const u=sessionStorage.getItem('u');
    const checksk=sessionStorage.getItem('checksk');
    
    
    const url = 'https://kt1bojna1d.execute-api.us-west-2.amazonaws.com/dev/survey?u='+u+'&sk='+checksk+'&a=history';
    
    //const url = 'https://kt1bojna1d.execute-api.us-west-2.amazonaws.com/dev/survey?u=1157&sk=w001&a=history'

    const iframename = document.getElementById('bottom5').contentDocument;
    
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

  const queryParams = new URLSearchParams(window.location.search);

  const name = queryParams.get('name');
  
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
        
               
      
      <center><a href={"/newCheckins?name="+name}  className="button is-primary">Program Assessment</a></center>
		  <iframe src="" title="CollaborationCare" height="800" width="1000" name="bottom5" id="bottom5" style={iframecss}></iframe>
        
                   </div> 
                   
                
  )
}

}

