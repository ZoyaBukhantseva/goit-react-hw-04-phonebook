import React from 'react';
import styles from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ filter, inputHandler }) => {
  return (
    <>
      <p  className={styles.item}>Find contacts by name</p>
      <label className={styles.FilterLable}>
        <input
        className={styles.input}
          onChange={inputHandler}
          type="text"
          name="filter"
          placeholder="Enter name..."
          value={filter}
        />
      </label>
    </>
  );
};
export default Filter;
Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  inputHandler: PropTypes.func.isRequired,
};

