import React, { Component } from 'react';
import axios from 'axios'

export default class DepressionCall3 extends Component
{
  componentDidMount()
  {
    const url = 'https://kt1bojna1d.execute-api.us-west-2.amazonaws.com/dev/survey?u=1157&sk=call3'

    const iframename = document.getElementById('bottom').contentDocument;
    
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
    <div>
        <div></div>
                {!this.props.auth.isAuthenticated && (
                  this.props.history.push("/login")
                )}
                {this.props.auth.isAuthenticated && (
                   <div style={divalign}>
                     <center>
                     <a href={"/collabCare1?name="+name} className="button is-light"> <strong>Dashboard</strong>
                    </a>&emsp;
                    <a href={"/preAssesment?name="+name} className="button is-primary"> <strong>Pre-Assessment</strong>
                    </a>&emsp;
                    <a href={"/callscript?name="+name} className="button is-primary"> <strong> Call Scripts</strong>
                    </a>&emsp;
                    <a href={"/assesment?name="+name} className="button is-primary"> <strong>Assessments</strong>
                    </a>&emsp;
                    <a href={"/checkins?name="+name} className="button is-primary"> <strong>Check-ins</strong>
                    </a>&emsp;
                    <a href={"/pastDetails?name="+name} className="button is-primary"> <strong>History</strong>
                    </a>
                    </center>
                    <hr/>
		  <p><center><strong>{name} New Survey:</strong></center><p/>
      
      <center>
      <a href={"/WeeklyCheckin?name="+name}  className="button is-primary">Weekly Check-in</a>&emsp;
		  
      <a href={"/depressionCall1?name="+name} className="button is-primary">Depression Call 1</a>&emsp;
		  <a href={"/depressionCall2?name="+name}   className="button is-primary">Depression Call 2</a>&emsp;
      <a href={"/depressionCall3?name="+name}   className="button is-light">Depression Call 3</a>&emsp;
		  <a href={"/depressionCall4?name="+name}   className="button is-primary">Depression Call 4</a>&emsp;
      <a href={"/depressionCall5?name="+name}   className="button is-primary">Depression Call 5</a>&emsp;
      <a href={"/depressionCall6?name="+name}   className="button is-primary">Depression Call 6</a>&emsp;
      <a href={"/depressionCall7?name="+name}   className="button is-primary">Depression Call 7</a>
      </center>
		  </p>
          <iframe src="" style={iframecss} name="bottom" id="bottom" title="test"></iframe>
                   </div> 
                   
                )}
              </div>
  )
}
}


