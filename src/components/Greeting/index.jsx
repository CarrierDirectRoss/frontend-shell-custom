import React from 'react';
import PropTypes from 'prop-types';

import styles from './Greeting.scss';

export default function Greeting({ name }) {
  return <h1 className={styles.title}>Hello {name}!</h1>;
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
};
