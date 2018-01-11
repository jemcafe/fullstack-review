import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class AccountInfo extends Component {
   render() {
      const { user } = this.props;
      return (
         <div className="user-account">
            <h1>ACCOUNT INFO</h1>
            <div>
            { user && <p>You are logged in as: <strong>{user.name}</strong></p> }
            { !user && <p>You must logged:<Link to="/">Login in</Link></p> }
            </div>
         </div>
      );
   }
}

const mapStateToProps = ( state ) => {
    return { user: state.user }
}

export default connect( mapStateToProps )( AccountInfo );