import React, { Component } from 'react';
import { connect } from 'react-redux';

class AccountInfo extends Component {
   render() {
      const { user } = this.props;
      return (
         <div className="user-account">
            <h1>ACCOUNT INFO</h1>
            <div>
                You are login as: <strong>{ user.name }</strong>
            </div>
         </div>
      );
   }
}

const mapStateToProps = ( state ) => {
    return { user: state.user }
}

export default connect( mapStateToProps )( AccountInfo );