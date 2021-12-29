import React, { Component } from 'react';
import axios from 'axios'


export default class DepressionCall1 extends Component
{
    
  componentDidMount()
  {
    const u=sessionStorage.getItem('u');
    
    const url = 'https://kt1bojna1d.execute-api.us-west-2.amazonaws.com/dev/survey?u='+u+'&sk=call1';
    
    const iframename = document.getElementById('dep1').contentDocument;
    
    console.log(sessionStorage.getItem('token'));
     
          axios.get(url,{
            headers: {
              "Authorization": sessionStorage.getItem('token'),
            }
          })
          .then((response) => {
           iframename.write(response.data);
            //console.log(response.data);
            //document.getElementById('bottom').innerTest = "response.data";  
          })
          .catch((error) => {})
   
  }

render(){

  const iframecss = {
    align:"center",
    border:"1px",
    height:"100%",
    width:"100%"
 
  }
  const divalign = {
    align:"center",
    border:"1px",
    height:"1000px"
 
  }
  return (
    <div style={divalign}>
     
		  
          <iframe src="" style={iframecss} name="dep1" id="dep1" title="test"></iframe>
                   </div> 
               
  )
}
}


