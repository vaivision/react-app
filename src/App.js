import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import LogIn from './components/auth/LogIn';
import Register from './components/auth/Register';
import ForgotPassword from './components/auth/ForgotPassword';
import ForgotPasswordVerification from './components/auth/ForgotPasswordVerification';
import ChangePassword from './components/auth/ChangePassword';
import ChangePasswordConfirm from './components/auth/ChangePasswordConfirm';
import Welcome from './components/auth/Welcome';
import Patient from './components/auth/Patient';
import CollabCare1 from './components/auth/Collabcare1';
import PreAssesment from './components/auth/PreAssesment';
import Callscript from './components/auth/Callscript';
import Assesment from './components/auth/Assesment';
import Checkins from './components/auth/Checkins';
import PastDetails from './components/auth/PastDetails';
import DepressionCall1 from './components/auth/DepressionCall1';
import DepressionCall2 from './components/auth/DepressionCall2';
import DepressionCall3 from './components/auth/DepressionCall3';
import DepressionCall4 from './components/auth/DepressionCall4';
import DepressionCall5 from './components/auth/DepressionCall5';
import DepressionCall6 from './components/auth/DepressionCall6';
import DepressionCall7 from './components/auth/DepressionCall7';
import WeeklyCheckin from './components/auth/WeeklyCheckin';
import ProgramAssesment from './components/auth/ProgramAssesment';
import CallScriptDepre1 from './components/auth/CallScriptDepre1';
import CallScriptDepre2 from './components/auth/CallScriptDepre2';
import CallScriptDepre3 from './components/auth/CallScriptDepre3';
import CallScriptDepre4 from './components/auth/CallScriptDepre4';
import CallScriptDepre5 from './components/auth/CallScriptDepre5';
import CallScriptDepre6 from './components/auth/CallScriptDepre6';
import CallScriptDepre7 from './components/auth/CallScriptDepre7';
import NewAssesment from './components/auth/NewAssesment';
import NewCheckins from './components/auth/NewCheckins';
import HistoryDetails from './components/auth/HistoryDetails';
import Footer from './components/Footer';
import { Auth } from 'aws-amplify';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

library.add(faEdit);

class App extends Component {

  state = {
    isAuthenticated: false,
    isAuthenticating: true,
    user: null
  }

  setAuthStatus = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  setUser = user => {
    this.setState({ user: user });
  }

  async componentDidMount() {
    try {
      const session = await Auth.currentSession();
      this.setAuthStatus(true);
      console.log(session);
      const user = await Auth.currentAuthenticatedUser();
      this.setUser(user);
    } catch(error) {
      if (error !== 'No current user') {
        console.log(error);
      }
    }
  
    this.setState({ isAuthenticating: false });
  }

  render() {



    const authProps = {
      isAuthenticated: this.state.isAuthenticated,
      user: this.state.user,
      setAuthStatus: this.setAuthStatus,
      setUser: this.setUser
    }

    const divempty = {
      height:"30px",
    }
    return (
      !this.state.isAuthenticating &&
      <div className="App">
        <Router>
          <div>
            <Navbar auth={authProps} />
            <hr/>
            <Switch>
              <Route exact path="/" render={(props) => <Home {...props} auth={authProps} />} />
              <Route exact path="/login" render={(props) => <LogIn {...props} auth={authProps} />} />
              <Route exact path="/register" render={(props) => <Register {...props} auth={authProps} />} />
              <Route exact path="/forgotpassword" render={(props) => <ForgotPassword {...props} auth={authProps} />} />
              <Route exact path="/forgotpasswordverification" render={(props) => <ForgotPasswordVerification {...props} auth={authProps} />} />
              <Route exact path="/changepassword" render={(props) => <ChangePassword {...props} auth={authProps} />} />
              <Route exact path="/changepasswordconfirmation" render={(props) => <ChangePasswordConfirm {...props} auth={authProps} />} />
              <Route exact path="/welcome" render={(props) => <Welcome {...props} auth={authProps} />} />
              <Route exact path="/patient" render={(props) => <Patient {...props} auth={authProps} />} />
              <Route exact path="/collabCare1" render={(props) => <CollabCare1 {...props} auth={authProps} />} />
              <Route exact path="/preAssesment" render={(props) => <PreAssesment {...props} auth={authProps} />} />
              <Route exact path="/callscript" render={(props) => <Callscript {...props} auth={authProps} />} />
              <Route exact path="/assesment" render={(props) => <Assesment {...props} auth={authProps} />} />
              <Route exact path="/checkins" render={(props) => <Checkins {...props} auth={authProps} />} />
              <Route exact path="/pastDetails" render={(props) => <PastDetails {...props} auth={authProps} />} />
              <Route exact path="/depressionCall1" render={(props) => <DepressionCall1 {...props} auth={authProps} />} />
              <Route exact path="/depressionCall2" render={(props) => <DepressionCall2 {...props} auth={authProps} />} />
              <Route exact path="/depressionCall3" render={(props) => <DepressionCall3 {...props} auth={authProps} />} />
              <Route exact path="/depressionCall4" render={(props) => <DepressionCall4 {...props} auth={authProps} />} />
              <Route exact path="/depressionCall5" render={(props) => <DepressionCall5 {...props} auth={authProps} />} />
              <Route exact path="/depressionCall6" render={(props) => <DepressionCall6 {...props} auth={authProps} />} />
              <Route exact path="/depressionCall7" render={(props) => <DepressionCall7 {...props} auth={authProps} />} />
              <Route exact path="/weeklyCheckin" render={(props) => <WeeklyCheckin {...props} auth={authProps} />} />
              <Route exact path="/programAssesment" render={(props) => <ProgramAssesment {...props} auth={authProps} />} />
              <Route exact path="/callScriptDepre1" render={(props) => <CallScriptDepre1 {...props} auth={authProps} />} />
              <Route exact path="/callScriptDepre2" render={(props) => <CallScriptDepre2 {...props} auth={authProps} />} />
              <Route exact path="/callScriptDepre3" render={(props) => <CallScriptDepre3 {...props} auth={authProps} />} />
              <Route exact path="/callScriptDepre4" render={(props) => <CallScriptDepre4 {...props} auth={authProps} />} />
              <Route exact path="/callScriptDepre5" render={(props) => <CallScriptDepre5 {...props} auth={authProps} />} />
              <Route exact path="/callScriptDepre6" render={(props) => <CallScriptDepre6 {...props} auth={authProps} />} />
              <Route exact path="/callScriptDepre7" render={(props) => <CallScriptDepre7 {...props} auth={authProps} />} />
              <Route exact path="/newAssesment" render={(props) => <NewAssesment {...props} auth={authProps} />} />
              <Route exact path="/newCheckins" render={(props) => <NewCheckins {...props} auth={authProps} />} />
              <Route exact path="/historyDetails" render={(props) => <HistoryDetails {...props} auth={authProps} />} />
            </Switch>
            <div style={divempty}></div>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
