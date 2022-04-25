import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

Content.propTypes = {};

function Content(props) {
  return (
    <div className="container">
      <div className="container__top"></div>
      <div className="container__sticky"></div>
      <div className="container__content">
        <div className="container__left-sidebar"></div>
        <div className="container__content-main"></div>
      </div>
    </div>
  );
}

export default Content;
