import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import ContentTop from './pages/content-top';

Content.propTypes = {};

function Content(props) {
  return (
    <div className="container">
      <ContentTop />
      <div className="sticky"></div>

      <div className="container__left-sidebar"></div>
      <div className="container__content"></div>
    </div>
  );
}

export default Content;
