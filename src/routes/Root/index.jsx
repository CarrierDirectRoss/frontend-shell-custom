import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { userActions } from 'Src/redux/user';
import Greeting from 'Components/Greeting';
import { login, isAuthenticated } from '../../services/auth';

class Root extends React.Component {
  static propTypes = {
    user: PropTypes.shape({
      name: PropTypes.string,
    }),
    fetchUser: PropTypes.func.isRequired,
  };

  static defaultProps = {
    user: null,
  };

  componentDidMount() {
    if (isAuthenticated()) {
      this.props.fetchUser();
    }
  }

  render() {
    const { user } = this.props;

    if (!isAuthenticated()) {
      return <button onClick={login}>Login</button>;
    }

    return user ? <Greeting name={user.name} /> : 'Loading...';
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.data,
  };
}

export default connect(mapStateToProps, {
  fetchUser: userActions.fetchUser,
})(Root);
