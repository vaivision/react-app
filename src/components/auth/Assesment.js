import React, { Component } from 'react';

export default class Assesment extends Component
{
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
        
                {!this.props.auth.isAuthenticated && (
                  this.props.history.push("/login")
                )}
                {this.props.auth.isAuthenticated && (
                   <div style={divalign}>
		  <p><center><strong>New Survey:</strong></center><p/>
      
      <center><a href="https://brr6c7zj3m.execute-api.us-west-2.amazonaws.com/dev/survey?u=1157&sk=phq9" target="bottom"  className="button is-primary">Program Assessment</a></center></p>
		  <iframe src="https://brr6c7zj3m.execute-api.us-west-2.amazonaws.com/dev/survey?u=1157&sk=phq9&a=history" title="CollaborationCare" height="800" width="1000" name="bottom"  style={iframecss}></iframe>
        
                   </div> 
                   
                )}
              </div>
  )
}

}

