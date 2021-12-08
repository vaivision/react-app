import React, { Component } from 'react';


export default class CollabCareinner extends Component
{
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
  const queryParams = new URLSearchParams(window.location.search);

const name = queryParams.get('name');

  return (
    <div>
        <div></div>
                {!this.props.auth.isAuthenticated && (
                  this.props.history.push("/login")
                )}
                {this.props.auth.isAuthenticated && (
                   <div style={divalign}>
      
		  <p><center><strong>{name} New Survey:</strong></center><p/>
      
      <center>
      <a href="https://brr6c7zj3m.execute-api.us-west-2.amazonaws.com/dev/survey?u=1157&sk=w001" target="bottom" className="button is-primary">Weekly Check-in</a>&emsp;
		  <a href="https://brr6c7zj3m.execute-api.us-west-2.amazonaws.com/dev/survey?u=1157&sk=call1" target="bottom"  className="button is-primary">Depression Call 1</a>&emsp;
		  <a href="https://brr6c7zj3m.execute-api.us-west-2.amazonaws.com/dev/survey?u=1157&sk=call2" target="bottom"  className="button is-primary">Depression Call 2</a>&emsp;
		  <a href="https://brr6c7zj3m.execute-api.us-west-2.amazonaws.com/dev/survey?u=1157&sk=call3" target="bottom"  className="button is-primary">Depression Call 3</a>&emsp;
		  <a href="https://brr6c7zj3m.execute-api.us-west-2.amazonaws.com/dev/survey?u=1157&sk=call4" target="bottom"  className="button is-primary">Depression Call 4</a>&emsp;
		  <a href="https://brr6c7zj3m.execute-api.us-west-2.amazonaws.com/dev/survey?u=1157&sk=call5" target="bottom"  className="button is-primary">Depression Call 5</a>&emsp;
		  <a href="https://brr6c7zj3m.execute-api.us-west-2.amazonaws.com/dev/survey?u=1157&sk=call6" target="bottom"  className="button is-primary">Depression Call 6</a>&emsp;
		  <a href="https://brr6c7zj3m.execute-api.us-west-2.amazonaws.com/dev/survey?u=1157&sk=call7" target="bottom"  className="button is-primary">Depression Call 7</a>
      </center>
		  </p>
          <iframe src="https://collabcare.s3.us-west-2.amazonaws.com/a/dashboard-60.jpg" style={iframecss} name="bottom" title="test"></iframe>
                   </div> 
                   
                )}
              </div>
  )
}

}

