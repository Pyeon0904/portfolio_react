import React, { useEffect } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import Lottie from 'lottie-react';
import logo from './logo.json';

const style = {
  height: '3%',
  width: '3%',
};

const Navbar = () => {
  function animation() {
    var tabsNewAnim = $('#navbarSupportedContent');
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $('.hori-selector').css({
      top: itemPosNewAnimTop.top + 'px',
      left: itemPosNewAnimLeft.left + 'px',
      height: activeWidthNewAnimHeight + 'px',
      width: activeWidthNewAnimWidth + 'px',
    });
    $('#navbarSupportedContent').on('click', 'li', function (e) {
      $('#navbarSupportedContent ul li').removeClass('active');
      $(this).addClass('active');
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $('.hori-selector').css({
        top: itemPosNewAnimTop.top + 'px',
        left: itemPosNewAnimLeft.left + 'px',
        height: activeWidthNewAnimHeight + 'px',
        width: activeWidthNewAnimWidth + 'px',
      });
    });
  }

  useEffect(() => {
    animation();
    $(window).on('resize', function () {
      setTimeout(function () {
        animation();
      }, 500);
    });
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-mainbg">
      <Lottie animationData={logo} style={style} className="animation" />
      <NavLink className="navbar-brand navbar-logo" to="/" exact>
        다예's PORTFOLIO
      </NavLink>
      <Lottie animationData={logo} style={style} className="animation" />
      <button
        className="navbar-toggler"
        onClick={function () {
          setTimeout(function () {
            animation();
          });
        }}
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars text-white"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <div className="hori-selector">
            <div className="left"></div>
            <div className="right"></div>
          </div>
          <li className="nav-item active">
            <NavLink className="nav-link" to="/" exact>
              <FontAwesomeIcon icon={faHome} /> Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/profile" exact>
              <i className="far fa-address-book"></i> Profile
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Experience" exact>
              <i className="far fa-clone"></i> Experience
            </NavLink>
          </li>
          {/* <li className="nav-item">
            <NavLink className="nav-link" to="/activity" exact>
              <FontAwesomeIcon icon={faListCheck} /> Activity
            </NavLink>
          </li> */}
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="https://open.kakao.com/o/scenbLSf"
              target="_blank" // 새 창이 띄워지도록
              rel="noopener noreferrer" // 보안 상의 이슈 방지
              exact
            >
              <FontAwesomeIcon icon={faHandshake} /> Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
