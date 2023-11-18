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
            <h2>IoT 보안 솔루션 개발</h2>
            <p>
              <strong>진행 기간:</strong> 2024.10 ~ 2024.12
            </p>
            <p>
              <strong>사용한 기술 스택:</strong> Java, HTTP
            </p>
            <p>
              <strong>개요:</strong> IoT 디바이스의 증가로 인해 보안 위협도
              증가의 문제를 해결하고자 위협을 탐지하고 대응하는 방법 설계
            </p>
            <p>
              <strong>나의 역할:</strong> IoT 보안 솔루션의 프로토타입을
              개발하고 시연함으로써 제안한 보안 시나리오의 실용성을 입증
            </p>
            <p>
              <strong>강조할 점:</strong> 개발한 시나리오나 솔루션이 실제 보안
              위험을 탐지하고 예방, 테스트 결과나 예시를 통해 효과성을 입증
            </p>
            <p>
              <strong>성과:</strong> 다양한 전문가 및 기업과 연결될 수 있는
              기회를 얻음으로써 네트워크를 확장하고 협력 가능성을 모색
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity3;
