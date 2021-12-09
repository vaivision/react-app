import React, { Component } from 'react';

export default class Callscript extends Component
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
                    <a href={"/callscript?name="+name} className="button is-light"> <strong> Call Scripts</strong>
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
		  <a href="https://brr6c7zj3m.execute-api.us-west-2.amazonaws.com/dev/survey?u=1157&sk=call1" target="bottom" className="button is-primary">Depression Call 1</a>&emsp;
		  <a href="https://brr6c7zj3m.execute-api.us-west-2.amazonaws.com/dev/survey?u=1157&sk=call2" target="bottom" className="button is-primary">Depression Call 2</a>&emsp;
		  <a href="https://brr6c7zj3m.execute-api.us-west-2.amazonaws.com/dev/survey?u=1157&sk=call3" target="bottom" className="button is-primary">Depression Call 3</a>&emsp;
		  <a href="https://brr6c7zj3m.execute-api.us-west-2.amazonaws.com/dev/survey?u=1157&sk=call4" target="bottom" className="button is-primary">Depression Call 4</a>&emsp;
		  <a href="https://brr6c7zj3m.execute-api.us-west-2.amazonaws.com/dev/survey?u=1157&sk=call5" target="bottom" className="button is-primary">Depression Call 5</a>&emsp;
		  <a href="https://brr6c7zj3m.execute-api.us-west-2.amazonaws.com/dev/survey?u=1157&sk=call6" target="bottom" className="button is-primary">Depression Call 6</a>&emsp;
		  <a href="https://brr6c7zj3m.execute-api.us-west-2.amazonaws.com/dev/survey?u=1157&sk=call7" target="bottom" className="button is-primary">Depression Call 7</a></center>
		  </p>
		  <iframe src="https://brr6c7zj3m.execute-api.us-west-2.amazonaws.com/dev/survey?u=1157&sk=call1&a=history" title="CollaborationCare" height="800" width="1000"  name="bottom"  style={iframecss}></iframe>
        
        
                   </div> 
                   
                )}
              </div>
  )
}

}

