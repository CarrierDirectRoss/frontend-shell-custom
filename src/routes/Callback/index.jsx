import React from 'react';
import PropTypes from 'prop-types';

import { handleAuthentication } from '../../services/auth';
import paths from '../paths';

export default class Callback extends React.Component {
  static propTypes = {
    history: PropTypes.shape({
      replace: PropTypes.func.isRequired,
    }).isRequired,
  };

  async componentDidMount() {
    await handleAuthentication();
    this.props.history.replace(paths.root);
  }

  render() {
    return 'Setting up session...';
  }
}
