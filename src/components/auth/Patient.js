import React, { Component } from 'react';
import axios from 'axios'

export default class Patient extends Component
{
  constructor(props)
    {
      super(props)

      this.state={
        patientList1:[]
      }
    }
  componentDidMount()
  {
    const url = 'https://9d7sfbij79.execute-api.us-west-2.amazonaws.com/default/getPatientList?coachId='+this.props.auth.user.username
    //collabcare1'

   
    
    console.log(sessionStorage.getItem('token'));

     
          axios.get(url, {
            headers: {
              "Authorization": sessionStorage.getItem('token'),
            }
          })
          .then((response) => {
            this.setState ({
              patientList1:response.data.patientList
            })
             //document.getElementById('bottom').innerTest = "response.data";  
          })
          .catch((error) => {})
  }

render(){
 

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

      const newpat =  this.state.patientList1;
     
      const headerdata = ['firstName','lastName','birthDate','city','stateCode','email','view'];
     
      const tablewidth={
        width:"80%"
       
      }
      
  return (

    <div style={divalign}>
        <div style={divempty}></div>
               

                {(!this.props.auth.isAuthenticated) && (
                  this.props.history.push("/login")
                )}
                 {this.props.auth.isAuthenticated && (
                   <div style={divalign}>
                     <p/><center><strong>{this.props.auth.user.username} Details</strong></center><p/>
                     <center>
                     <table className="app-container" style={tablewidth}>
                        <thead>
                        <tr>
                        {headerdata.map((hd)=>(
                              <th>{hd}</th>
                            ))}
                              </tr>
                        </thead>
                        <tbody>
                            {newpat.map((num)=>(
                              <tr>
                              <td>{num.firstName}</td>
                              <td>{num.lastName}</td>
                              <td>{num.birthDate}</td>
                              <td>{num.city}</td>
                              <td>{num.stateCode}</td>
                              <td>{num.email}</td>
                              <td>
                      
                    
                    <a href={'/collabCare1?name='+num.firstName+'&u=1157&checksk=w001&presk=pre01&a=history'} className="button is-primary"> <strong>DashBoard</strong></a>
                    </td>
                              </tr>
        
                            ))}
                        </tbody>
                      </table>
                      </center>
                  
                  
                      <iframe src="" style={iframecss} name="bottom" title="test"></iframe>
                              
                              </div> 
                              
                            )}
                          </div>
              )
            }
                

}

