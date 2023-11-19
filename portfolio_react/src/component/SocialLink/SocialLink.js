import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBloggerB } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './SocialLink.css';

const SocialLinks = () => {
  return (
    <div className="lg:pl-20">
      <ul className="SocialLink_text">
        <li className="mb-4 SocialLink_text">
          <NavLink
            className="text-black hover:underline"
            to="https://mail.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} /> dayeee5@naver.com
          </NavLink>
        </li>
        <li className="mb-4">
          <NavLink
            className="text-black hover:underline"
            to="https://github.com/dayeee5"
            target="_blank" // 클릭시 새 탭(창)이 띄워지도록
            rel="noopener noreferrer" // 보안 상의 이슈 방지
          >
            <FontAwesomeIcon icon={faGithub} /> Follow on{' '}
            <strong>Github</strong>
          </NavLink>
        </li>
        <li className="mb-4">
          <NavLink
            className="text-black hover:underline"
            to="https://m.blog.naver.com/dayeee5"
            target="_blank" // 새 창이 띄워지도록
            rel="noopener noreferrer" // 보안 상의 이슈 방지
          >
            <FontAwesomeIcon icon={faBloggerB} /> Follow on{' '}
            <strong>Blog</strong>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
