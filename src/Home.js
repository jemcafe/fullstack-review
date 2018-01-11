import React, { Component } from 'react';
import logo from './images/communityBank.svg';
import './Home.css';
import Auth0Lock from 'auth0-lock';
import axios from 'axios';
import { connect } from 'react-redux';
import { login } from './redux/ducks/reducer';

class Home extends Component {
   constructor () {
      super();
      this.state = {

      }
      this.lock = null;
      this.login = this.login.bind(this);
   }

   componentDidMount () {
      this.lock = new Auth0Lock( process.env.REACT_APP_AUTH0_CLIENT_ID, process.env.REACT_APP_AUTH0_DOMAIN );
      this.lock.on('authenticated', authResult => {
         this.lock.getUserInfo( authResult.accessToken, ( error, user ) => {
            console.log( 'user', user );
            // axios.post('/login', {userId: user.sub }).then( response => {   // Sends the user id to the server
                const response = {
                    user: {
                        name: 'ABA',
                        image: 'LAF'
                    }
                }
                this.props.login( response );
                // this.props.login( response.data.user );
                this.props.history.push('/private');
            // }).catch();
         });
      });
   }

   login () {
      this.lock.show();
   }

   render() {
      return (
         <div className="home">
            <img src={ logo } alt="bank-pic"/>
            <div className="actions">
               <button className="login-btn" onClick={ () => this.login() }>Login</button>
            </div>
         </div>
      );
   }
}
 
const mapDispatchToProps = {
    login: login
};

//  export default connect( mapStateToProps, { action creator } )( Home );
export default connect( null, mapDispatchToProps )( Home );