import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { login } from './redux/ducks/reducer';

class AccountInfo extends Component {
   componentDidMount () {
       axios.get('/user-data').then( response => {
         if ( response.data.user ) {
            this.props.login(response.data.user);
         }
         this.props.login( response.data );
       });
   }

   render() {
      const { user } = this.props;
      return (
         <div className="user-account">
            <h1>ACCOUNT INFO</h1>
            <div>
            { user && <p>You are logged in as: <strong>{user.name}</strong></p> }
            { !user && <p>You must logged: <Link to="/">Login in</Link></p> }
            </div>
         </div>
      );
   }
}

const mapStateToProps = ( state ) => {
    return { user: state.user }
}

const mapDispatchToProps = {
    login: login
}

export default connect( mapStateToProps, mapDispatchToProps )( AccountInfo );