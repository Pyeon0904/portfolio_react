import React from 'react';
import '../global.css';
import './Profile.css';
import profileImage from './profileEdit.png';
import Lottie from 'lottie-react';
import arrowLtoR from './arrowLtoR.json';

const Info = [
  {
    name: '김다예',
    Email: 'dayeee5@naver.com',
    Phone: '010-2426-9940',
    birth: '2000.02.25',
    education: '불곡 고등학교 (2016.03 ~ 2019.01)',
    educationTwo: '가천대학교 컴퓨터공학사 (2022.03 ~ 2026.02)',
    intership: '당근마켓 2025 Summer Tech Intership',
    partTimeJob: '대형 영어학원 조교 (2022.10 ~ 2023.02)',
  },
];

export default function Profile() {
  return (
    <div className="main_layout">
      <div className="page_title">
        Resume
        <div className="Title_line" />
      </div>
      <div class="row">
        <Lottie animationData={arrowLtoR} className="arrowLtoR" />
        <div class="col">
          <div className="resume-container">
            {/* 연락처 테이블 */}
            <table className="resume-table">
              <thead>
                <tr>
                  <th>프로필</th>
                  <th> </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img
                      src={profileImage}
                      alt={`프로필 사진 - ${Info[0].name}`}
                      className="profile-image"
                    />
                  </td>
                  <td className="profile-info">
                    <div className="betweenLine">
                      <strong>이 름 | </strong> {Info[0].name}
                    </div>
                    <div className="betweenLine">
                      <strong>Email | </strong> {Info[0].Email}
                    </div>
                    <div className="betweenLine">
                      <strong>번 호 | </strong> {Info[0].Phone}
                    </div>
                    <div className="betweenLine">
                      <strong>생년월일 | </strong> {Info[0].birth}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col">
          <div className="resume-container">
            {/* 개인 정보 테이블 */}
            <table className="resume-table">
              <thead>
                <tr>
                  <th>항목</th>
                  <th>내용</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>학력</td>
                  <td>{Info[0].education}</td>
                </tr>
                <tr>
                  <td class="sr-only">학력2</td>
                  <td>{Info[0].educationTwo}</td>
                </tr>
                <tr>
                  <td>경력</td>
                  <td>{Info[0].intership}</td>
                </tr>
                <tr>
                  <td>아르바이트</td>
                  <td>{Info[0].partTimeJob}</td>
                </tr>
                <tr>
                  <td className="skills">기술 스킬</td>
                  <td>HTML, CSS, JavaScript, React, Node.js</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
