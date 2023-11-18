import React from 'react';
import './Proj3.css';
import proj3 from './proj3.png';

const Proj3 = () => {
  return (
    <div className="proj3">
      <img
        src={proj3} // 이미지 경로에 실제 이미지 경로를 넣어주세요
        alt="Project 3"
        className="proj3-image"
      />
      <div className="proj3-content">
        <h2>학사정보 데이터베이스 개발</h2>
        <p>
          <strong>진행 기간:</strong> 2024.04 ~ 2024.08
        </p>
        <p>
          <strong>사용한 기술 스택:</strong> HTML, CSS, JavaScript, React
        </p>
        <p>
          <strong>개요:</strong> 학생, 교수, 강좌, 성적 및 등록 정보를 저장하고
          학사 업무를 자동화하는 데이터베이스 시스템을 개발
        </p>
        <p>
          <strong>나의 역할:</strong> 사용자 인터페이스를 개발하여 학생, 교수 및
          관리자가 시스템에 액세스하고 데이터를 입력, 수정 및 검색할 수 있도록
          함
        </p>
        <p>
          <strong>강조할 점:</strong> 성적 추이, 등록 패턴 및 학생 행동을
          분석하여 학사 전략 및 정책을 개선하는 데 도움
        </p>
        <p>
          <strong>성과:</strong> 학사 업무 효율성 향상 및 학생 서비스 향상을
          통해 매출 증가 또는 비용 절감을 실현
        </p>
      </div>
    </div>
  );
};

export default Proj3;
