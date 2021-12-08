import React, { Component } from 'react';

export default class PastDetails extends Component
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
		 
      
      <p/><center><strong>{name} History</strong></center><p/>
 <iframe src="https://brr6c7zj3m.execute-api.us-west-2.amazonaws.com/dev/survey?u=1157&a=history" title="CollaborationCare" name="bottom"  style={iframecss}></iframe>  
                   </div> 
                   
                )}
              </div>
  )
}

}

