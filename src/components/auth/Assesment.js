import React, { Component } from 'react';

export default class Assesment extends Component
{
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
        
                {!this.props.auth.isAuthenticated && (
                  this.props.history.push("/login")
                )}
                {this.props.auth.isAuthenticated && (
                   <div style={divalign}>
                     <center>
                      <a href={"/collabCare1?name="+name} className="button is-primary"> <strong>Dashboard</strong>
                    </a>&emsp;
                    <a href={"/preAssesment?name="+name} className="button is-primary"> <strong>Pre-Assessment</strong>
                    </a>&emsp;
                    <a href={"/callscript?name="+name} className="button is-primary"> <strong> Call Scripts</strong>
                    </a>&emsp;
                    <a href={"/assesment?name="+name} className="button is-light"> <strong>Assessments</strong>
                    </a>&emsp;
                    <a href={"/checkins?name="+name} className="button is-primary"> <strong>Check-ins</strong>
                    </a>&emsp;
                    <a href={"/pastDetails?name="+name} className="button is-primary"> <strong>History</strong>
                    </a></center>
                    <hr/>
		  <p><center><strong>{name} New Survey:</strong></center><p/>
      
      <center><a href="https://brr6c7zj3m.execute-api.us-west-2.amazonaws.com/dev/survey?u=1157&sk=phq9" target="bottom"  className="button is-primary">Program Assessment</a></center></p>
		  <iframe src="https://brr6c7zj3m.execute-api.us-west-2.amazonaws.com/dev/survey?u=1157&sk=phq9&a=history" title="CollaborationCare" height="800" width="1000" name="bottom"  style={iframecss}></iframe>
        
                   </div> 
                   
                )}
              </div>
  )
}

}

