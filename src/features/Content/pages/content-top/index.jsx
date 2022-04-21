import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import imga from './img/banner.jpg';

ContentTop.propTypes = {};
function ContentTop(props) {
  console.log(imga);

  return (
    <div>
      <div className="content__top">
        <img src="./img/banner.jpg" alt="" />
      </div>
    </div>
  );
}

export default ContentTop;
