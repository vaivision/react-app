import React, { Component } from 'react';
import axios from 'axios'

export default class WeeklyCheckin extends Component
{
  componentDidMount()
  {
    const url = 'https://kt1bojna1d.execute-api.us-west-2.amazonaws.com/dev/survey?u=1157&sk=w001'

    const iframename = document.getElementById('welcome').contentDocument;
    
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
    height:"1000px",
    width:"100%"
 
  }

  return (
    <div  style={divalign}>
        
          <iframe src="" style={iframecss} name="welcome" id="welcome" title="test"></iframe>
                   </div> 
              
  )
}
}


