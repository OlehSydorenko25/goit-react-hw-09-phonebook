import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../../redux/contacts/contacts-actions';
import selectors from '../../../redux/contacts/contacts-selectors';
import styles from './Filter.module.css';

export default function Filter() {
  const value = useSelector(selectors.getFilter);

  const dispatch = useDispatch();

  const onChange = e => {
    e.preventDefault();
    dispatch(actions.filterContact(e.target.value));
  };

  return (
    <label className={styles.filter}>
      Filter
      <input type="text" value={value} onChange={onChange}></input>
    </label>
  );
}
