import React, { Component } from 'react';
import axios from 'axios';


export default class Callscript extends Component
{

  componentDidMount()
  {
    const url = 'https://kt1bojna1d.execute-api.us-west-2.amazonaws.com/dev/survey?u=1157&sk=call1&a=history'

    const iframename = document.getElementById('bottom3').contentDocument;
    
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
        
               
		  <iframe src="" title="CollaborationCare" height="800" width="1000" id="bottom3" name="bottom3"  style={iframecss}></iframe>
        
        
                   </div> 
                   
               
  )
}

}

