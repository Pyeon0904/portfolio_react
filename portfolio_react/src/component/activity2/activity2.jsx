import React from 'react';
import './activity2.css';
import act2 from './act2.png';

const Activity2 = () => {
  return (
    <div className="activity2">
      <div className="row">
        <div className="col">
          <div className="activity2-image">
            <img
              src={act2} // 이미지 경로에 실제 이미지 경로를 넣어주세요
              alt="Activity 2"
              className="activity2-image"
            />
          </div>
        </div>
        <div className="col">
          <div className="activity2-content">
            <h2>구글코리아 머신러닝 부트램프</h2>
            <p>
              <strong>진행 기간:</strong>2025.6 ~ 2025.08
            </p>
            <p>
              <strong>개요:</strong> AI 분야 머신러닝 개발자 양성 프로그램,
              대학생과 현직 개발자에게 교육과 취업 기회를 제공
            </p>
            <p>
              <strong>프로그램 내용:</strong> 온라인 인공지능 경진 플랫폼 ‘캐글’
              참여, 현직 머신러닝 전문가 및 IT 기업과의 만남, 커리어 및 이력서
              작성 멘토링
            </p>
            <p>
              <strong>나의 활동:</strong> 이미지 분류 프로젝트에서 합성곱
              신경망(CNN)을 사용하여 이미지를 분류
            </p>
            <p>
              <strong>후기:</strong> 다양한 전문가 및 기업과 연결될 수 있는
              기회를 얻음으로써 네트워크를 확장하고 협력 가능성을 모색
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity2;
