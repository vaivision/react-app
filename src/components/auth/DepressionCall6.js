import React, { Component } from 'react';
import axios from 'axios'

export default class DepressionCall6 extends Component
{
  componentDidMount()
  {
    const u=sessionStorage.getItem('u');
    
    const url = 'https://kt1bojna1d.execute-api.us-west-2.amazonaws.com/dev/survey?u='+u+'&sk=call6';
    
    const iframename = document.getElementById('dep6').contentDocument;
    
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


  const divalign = {
    align:"center",
    border:"1px",
    height:"28000px"
 
  }

  const iframecss = {
    align:"center",
    border:"1px",
    height:"28000px",
    width:"100%"
 
  }

  return (
    <div style={divalign}>
        
    <iframe src="" style={iframecss} name="dep6" id="dep6" title="test"></iframe>
             </div> 
  )
}
}


