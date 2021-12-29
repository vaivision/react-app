import axios from 'axios'
import { Auth } from "aws-amplify";
    
    export const doSomethingWithInput = (theInput) => {
       
    const url = theInput

    //const iframename = document.getElementById('bottom').contentDocument;
    
    Auth.currentSession().then(res=>{
      let accessToken;
      let jwt;
      accessToken = res.getIdToken()
      jwt = accessToken.getJwtToken()
      //You can print them to see the full objects
      console.log(`myAccessToken: ${JSON.stringify(accessToken)}`)
      console.log(`myJwt: ${jwt}`)
         return axios.get(url,{
            headers: {
              "Authorization": jwt
            }
          })
          .then((response) => {
           //iframename.write(response.data);
          // console.log(response.data);
           return response.data;
            //console.log(response.data);
            //document.getElementById('bottom').innerTest = "response.data";  
          })
          .catch((error) => {})
    })
  }
