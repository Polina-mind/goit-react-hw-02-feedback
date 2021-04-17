import React from 'react';
import PropTypes from 'prop-types';
import './Notification.css';

const Notification = ({ message }) => {
  return (
    <div className="Notification">
      <p>{message}</p>
    </div>
  );
};

Notification.protoTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
