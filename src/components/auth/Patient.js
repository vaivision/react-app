import React, { Component } from 'react';


export default class Patient extends Component
{


render(){
    const mytable = {
        color: "Black",
        //backgroundColor: "DodgerBlue",
        padding: "30px",
        fontfamily: "Arial, Helvetica, sans-serif",
        bordercollapse: "collapse",
        width: "80%",
        margin:"auto"
      };
      
      const divalign = {
        align:"center",
        border:"1px",
        height:"1000px",
        width:"100%"
     
      }

      const iframecss = {
        align:"center",
        border:"1px",
        height:"100%",
        width:"100%"
     
      }

      const divempty = {
        height:"5px",
      }

      const myth = {
        border: "1px solid #ddd",
        padding: "10px",
        paddingtop: "12px",
        paddingbottom: "12px",
        textalign: "left",
        backgroundColor: "#04AA6D",
        color: "white"
      }
      
     
      
  return (

    <div style={divalign}>
        <div style={divempty}></div>
               

                {(!this.props.auth.isAuthenticated) && (
                  this.props.history.push("/login")
                )}
                {this.props.auth.isAuthenticated && (
                  <table align="center" style={mytable}>
                  <tbody>
                    <tr style={myth}>
                      <th style={myth}>First Name</th>
                      <th style={myth}>Last Name</th>
                      <th style={myth}>Age</th>
                      <th style={myth}>City</th>
                      <th style={myth}>State</th>
                      <th style={myth}>Email</th>
                      <th style={myth}>View</th>
                    </tr>
                    <tr>
                      <td height="50">Donna</td>
                      <td>Peters</td>
                      <td>44</td>
                      <td>Denver</td>
                      <td>CO</td>
                      <td>dpeters121@gmail.com</td>
                      <td>
                      <a href="/collabCare1?name=Donna&u=1157&checksk=w001&presk=pre01&a=history" className="button is-primary"> <strong>DashBoard</strong>
                    </a> 
                    </td>
                    </tr>
                    <tr>
                      <td height="50">Chrissy</td>
                      <td>Bright</td>
                      <td>49</td>
                      <td>Monument</td>
                      <td>CO</td>
                      <td>chrissybright@gmail.com</td>
                      <td>
                      <a href="/collabCare1?name=Chrissy" className="button is-primary"> <strong>DashBoard</strong>
                    </a>
                        </td>
                    </tr>
                    <tr>
                      <td>Rebecca</td>
                      <td>Halling</td>
                      <td>50</td>
                      <td>Boulder</td>
                      <td>CO</td>
                      <td>rebhalling@gmail.com</td>
                      <td><a href={`https://collabcare.s3.us-west-2.amazonaws.com/test/CollabCare1.html?eid=${this.props.auth.user.username}`} target='bottom'>View</a></td>
                    </tr>
                  </tbody>
                </table>
                )}
                <div style={divempty}></div>
                <iframe src="" style={iframecss} name="bottom" title="test"></iframe>
              </div>

  )
}

}

