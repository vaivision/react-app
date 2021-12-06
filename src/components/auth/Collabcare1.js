import React, { Component } from 'react';
import { Auth } from 'aws-amplify';

var perf =require('./Collabcare1.html');

export default class CollabCare1 extends Component
{
render(){
  return (
    <div>
        <div></div>
                {!this.props.auth.isAuthenticated && (
                  this.props.history.push("/login")
                )}
                {this.props.auth.isAuthenticated && (
                   <div dangerouslySetInnerHTML={ {__html: perf} } />
                )}

              </div>

  )
}

}

