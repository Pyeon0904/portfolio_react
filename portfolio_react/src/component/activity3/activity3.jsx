import React from 'react';
import './activity3.css';
import act3 from './act3.png';

const Activity3 = () => {
  return (
    <div className="activity3">
      <div className="row">
        <div className="col">
          <div className="activity3-image">
            <img
              src={act3} // 이미지 경로에 실제 이미지 경로를 넣어주세요
              alt="Activity 3"
              className="activity3-image"
            />
          </div>
        </div>
        <div className="col">
          <div className="activity3-content">
            <h2>SW 융합 해커톤 대회</h2>
            <p>
              <strong>진행 기간:</strong> 2024.08.25 ~ 08.27
            </p>
            <p>
              <strong>사용한 기술 스택:</strong> HTML, CSS, JavaScript, React
            </p>
            <p>
              <strong>개요:</strong> 무박 3일 동안 디지털 신기술 기반 SW융합
              제품 또는 서비스 개발, 사회문제 해결을 위한 SW융합 제품 서비스
              개발, 선박 운항 데이터를 활용한 신서비스 기획 및 서비스 개발
            </p>
            <p>
              <strong>나의 역할:</strong> UI/UX 디자인을 개선하여 서비스의
              친화성을 향상, 서비스의 품질을 보증하기 위해 테스트 전략을
              개발하고 실행
            </p>
            <p>
              <strong>강조할 점:</strong> 디지털 융합을 통해 지역 디지털
              생태계에 이바지
            </p>
            <p>
              <strong>성과:</strong>우수상 입상
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity3;
