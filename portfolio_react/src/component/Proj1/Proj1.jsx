import React from 'react';
import './Proj1.css';
import proj1 from './proj1.png';

const Proj1 = () => {
  return (
    <div className="proj1">
      <img
        src={proj1} // 이미지 경로에 실제 이미지 경로를 넣어주세요
        alt="Healthcare Application"
        className="proj1-image"
      />
      <div className="proj1-content">
        <h2>헬스케어 어플리케이션</h2>
        <p>
          <strong>진행 기간:</strong> 2024.12 ~ 2025.04
        </p>
        <p>
          <strong>사용한 기술 스택:</strong> HTML, CSS, JavaScript, React
        </p>
        <p>
          <strong>개요:</strong> 개인의 건강과 의료에 관한 정보, 의료 기기,
          시스템 및 플랫폼을 다루는 IT 의료 서비스로서 집에서 쉽게 건강을 관리할
          수 있도록 운동 프로그램과 식단표, 통증 처치 및 약물 복용 시간 등을
          알림과 함께 제공
        </p>
        <p>
          <strong>나의 역할:</strong> 블루투스 통신에 관한 프로토콜 정의문서를
          숙지하여 BLE 프로토콜, GATT 프로토콜을 따름
        </p>
        <p>
          <strong>강조할 점:</strong> 상급 종합병원과 함께 수행한 임상시험을
          바탕으로 정보를 제공하여 신뢰성을 높이고, 고령자의 스마트폰 활용
          능력과 시력도 고려해 폰트 크기와 디자인도 고려
        </p>
        <p>
          <strong>성과:</strong> 헬스케어 어플리케이션을 사용하여 사용자들이 더
          건강한 라이프스타일을 채택하여 건강 향상에 도움을 줌
        </p>
      </div>
    </div>
  );
};

export default Proj1;
