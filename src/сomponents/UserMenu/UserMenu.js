import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';
import Button from '@material-ui/core/Button';

export default function UserMenu() {
  const email = useSelector(authSelectors.getUserName);

  const dispatch = useDispatch();

  return (
    <div>
      <span>{email}</span>

      <Button
        variant="outlined"
        color="primary"
        href="#outlined-buttons"
        onClick={() => dispatch(authOperations.logout())}
      >
        Logout
      </Button>
    </div>
  );
}
