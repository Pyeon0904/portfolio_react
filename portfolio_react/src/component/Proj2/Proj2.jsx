import React from 'react';
import './Proj2.css';
import proj2 from './proj2.png';

const Proj2 = () => {
  return (
    <div className="proj2">
      <img
        src={proj2} // 이미지 경로에 실제 이미지 경로를 넣어주세요
        alt="Healthcare Application"
        className="proj2-image"
      />
      <div className="proj2-content">
        <h2>쇼핑몰 웹 개발</h2>
        <p>
          <strong>진행 기간:</strong> 2023.12 ~ 2024.02
        </p>
        <p>
          <strong>사용한 기술 스택:</strong> HTML, CSS, JavaScript, React
        </p>
        <p>
          <strong>개요:</strong> 온라인 쇼핑몰 웹 개발 프로젝트는 온라인 상에서
          상품을 판매하고 구매하는 웹 플랫폼을 구축
        </p>
        <p>
          <strong>나의 역할:</strong> 웹 사이트의 디자인을 구상하고, 사용자
          인터페이스를 디자인하여 웹 페이지를 개발
        </p>
        <p>
          <strong>강조할 점:</strong> 웹 사이트의 사용자 경험을 최적화하고
          사용자 친화적으로 설계, 쉬운 탐색과 빠른 페이지 로딩, 직관적인 사용자
          인터페이스를 제공
        </p>
        <p>
          <strong>성과:</strong> 매출 증가, 고객 유입, 전자 상거래 거래의 증가
        </p>
      </div>
    </div>
  );
};

export default Proj2;
