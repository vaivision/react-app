import React, { Component } from 'react';
//import { Auth } from "aws-amplify";

export default class history extends Component
{
    componentDidMount() {
      const apiUrl = 'https://brr6c7zj3m.execute-api.us-west-2.amazonaws.com/dev/survey?u=1157&a=history';
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => console.log('This is your data', data));
    }
    render() {
      return <h1>my Component has Mounted, Check the browser 'console' </h1>;
    }
}
  