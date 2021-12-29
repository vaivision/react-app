import React, { Component } from 'react';
import axios from 'axios'

export default class CallScriptDepre5 extends Component
{
  componentDidMount()
  {
    const u=sessionStorage.getItem('u');
    const a=sessionStorage.getItem('a');

    const url = 'https://kt1bojna1d.execute-api.us-west-2.amazonaws.com/dev/survey?u='+u+'&sk=call5&a='+a;

    const iframename = document.getElementById('Call5').contentDocument;
    
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
    <iframe src="" style={iframecss} name="Call5" id="Call5" title="test"></iframe>
             </div> 
  )
}
}


