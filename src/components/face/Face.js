import React from 'react';
import PropTypes from 'prop-types';
import styles from './Face.css';

const Face = ({ emoji }) => <div className={styles.Face}>{emoji}</div>;

Face.propTypes = {
  emoji: PropTypes.string.isRequired
};

export default Face;
