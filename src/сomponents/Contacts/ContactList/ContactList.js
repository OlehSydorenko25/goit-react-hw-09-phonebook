import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import contactsOperations from '../../../redux/contacts/contacts-operations';
import selectors from '../../../redux/contacts/contacts-selectors';
import styles from './ContactList.module.css';
import Button from '@material-ui/core/Button';

export default function ContactList() {
  const contactList = useSelector(selectors.getVisibleContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <ul className={styles.contactList}>
      {contactList.map(({ id, name, number }) => {
        return (
          <li key={id} className={styles.contact}>
            <span>{name}: </span>
            <span>{number}</span>

            <Button
              type="button"
              variant="contained"
              color="secondary"
              onClick={() => dispatch(contactsOperations.deleteContact(id))}
            >
              Delete
            </Button>
          </li>
        );
      })}
    </ul>
  );
}
