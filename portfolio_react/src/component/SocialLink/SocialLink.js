import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBloggerB } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const SocialLinks = () => {
  return (
    <div className="lg:pl-20">
      <ul>
        <li className="mb-4">
          <NavLink
            className="text-black hover:underline"
            to="https://github.com/dayeee5"
            target="_blank" // 새 창이 띄워지도록
            rel="noopener noreferrer" // 보안 상의 이슈 방지
          >
            <FontAwesomeIcon icon={faGithub} /> Follow on Github
          </NavLink>
        </li>
        <li className="mb-4">
          <NavLink
            className="text-black hover:underline"
            to="https://m.blog.naver.com/dayeee5"
            target="_blank" // 새 창이 띄워지도록
            rel="noopener noreferrer" // 보안 상의 이슈 방지
          >
            <FontAwesomeIcon icon={faBloggerB} /> Follow on Blog
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
