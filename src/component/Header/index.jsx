import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import { NavLink } from 'react-router-dom';
import { Input } from '@mui/material';


Header.propTypes = {

};

function Header(props) {
    return (
        <div className='header'>
            <div className='header__left'>
                <div className='header__left--content'>
                    <div className='header__left--logo'>
                        <i className="fa-brands fa-facebook"></i>
                    </div>

                    <div className='header__left--search'>
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input className='header__search-input' placeholder='Tìm kiếm vui vẻ' />
                    </div>
                </div>
            </div>

            <div className='header__center'>
                <div>
                    <ul className='header__center--navbar'>
                        <li>
                            <NavLink className="'header__center--link navbar-link" to="/todos"> <i className="fa-solid fa-house"></i></NavLink>
                        </li>
                        <li>
                            <NavLink className="'header__center--link navbar-link" to="/album"><i className="fa-brands fa-youtube "></i></NavLink>
                        </li>
                        <li>
                            <NavLink className="'header__center--link navbar-link" to="/todos"><i className="fa-solid fa-store"></i></NavLink>
                        </li>
                        <li>
                            <NavLink className="'header__center--link navbar-link" to="/todos"><i className="fa-solid fa-users-line"></i></NavLink>
                        </li>
                        <li>
                            <NavLink className="'header__center--link navbar-link" to="/todos"><i className="fa-solid fa-gamepad"></i></NavLink>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='header__right'>
                <div className='header__right--info'>
                    <NavLink className="header__right--link navbar-link" to="/todos"><i className="fa-solid fa-user"></i></NavLink>
                    <NavLink className="header__right--link navbar-link" to="/todos"><i className="fa-solid fa-bars"></i></NavLink>
                    <NavLink className="header__right--link navbar-link" to="/todos"><i className="fa-brands fa-facebook-messenger"></i></NavLink>
                    <NavLink className="header__right--link navbar-link" to="/todos"> <i className="fa-solid fa-bell"></i></NavLink>
                    <NavLink className="header__right--link navbar-link" to="/todos"><i className="fa-solid fa-caret-down"></i></NavLink>
                </div>
            </div>
        </div>
    );
}

export default Header;