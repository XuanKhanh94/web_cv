import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'


Header.propTypes = {

};

function Header(props) {
    return (
        <div className='header'>
            <div className='header__left'>
                <div className='header__left--content'>
                    <div className='header__left--logo'>
                        <i class="fa-brands fa-facebook"></i>
                    </div>

                    <div className='header__left--search'>
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
            </div>

            <div className='header__center'>
                <div>
                    <ul className='header__center--navbar'>
                        <li>
                            <i class="fa-solid fa-house"></i>
                        </li>
                        <li>
                            <i class="fa-brands fa-youtube"></i>
                        </li>
                        <li>
                            <i class="fa-solid fa-store"></i>
                        </li>
                        <li>
                            <i class="fa-solid fa-users-line"></i>
                        </li>
                        <li>
                            <i class="fa-solid fa-gamepad"></i>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='header__right'>
                <div className='header__right--info'>
                    <span><i class="fa-brands fa-facebook-messenger"></i></span>
                    <span><i class="fa-solid fa-bell"></i></span>
                    <span><i class="fa-solid fa-caret-down"></i></span>
                </div>
            </div>
        </div>
    );
}

export default Header;