import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import contactsOperations from '../../../redux/contacts/contacts-operations';
// import selectors from '../../../redux/contacts/contacts-selectors';
import { v4 as uuidv4 } from 'uuid';
// import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import styles from './ContactForm.module.css';
const nameInputId = uuidv4();
const numberInputId = uuidv4();

export default function ContactForm() {
  // const allContacts = useSelector(selectors.getAllContacts);

  const [name, setName] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  }

  const onSubmit = e => {
    e.preventDefault();
    const objContact = { name, number };

    // allContacts.find(
    //         ({ name, number }) =>
    //           name.toLowerCase() === name.toLowerCase() ||
    //           number === number,
    //       )
    //         ? alert('This contact is already in contacts')
    //   : dispatch(contactsOperations.addContact(objContact));

    dispatch(contactsOperations.addContact(objContact));

    setName('');
    setNumber('');
  };

  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <label htmlFor={nameInputId} className={StyleSheet.label}>
        Name
        <input
          type="text"
          name="name"
          className={styles.input}
          value={name}
          onChange={handleChange}
          id={nameInputId}
        />
      </label>

      <label htmlFor={numberInputId} className={StyleSheet.label}>
        Number
        <input
          type="text"
          name="number"
          className={styles.input}
          value={number}
          onChange={handleChange}
          id={numberInputId}
        />
      </label>

      <Button type="submit" variant="outlined" color="primary">
        Add contacts
      </Button>
    </form>
  );
}
