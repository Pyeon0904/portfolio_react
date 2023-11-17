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
    awards: 'SW 융합 해커톤 대회 (우수상, 2024)',
    certifications: '정보처리 기사',
    certifications_Sec: '네트워크 관리사 2급',
    certifications_Third: 'OCP(Oracle Certified Professional)',
    certifications_Four: '인터넷 보안 전문가 2급',
    languageScores: 'TOEIC 990',
  },
];

export default function Profile() {
  const skills = [
    { skill: 'React', level: 80 }, // 예: 0부터 100까지의 레벨
    { skill: 'JavaScript', level: 90 },
  ];
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
        <div class="row">
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
          <div class="col">
            <div className="experience-container">
              <table className="experience-table">
                <thead>
                  <tr>
                    <th>분류</th>
                    <th>내용</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>입상경력</td>
                    <td>{Info[0].awards}</td>
                  </tr>
                  <tr>
                    <td>자격증</td>
                    <td>{Info[0].certifications}</td>
                  </tr>
                  <tr>
                    <td className="sr-only">자격증</td>
                    <td>{Info[0].certifications_Sec}</td>
                  </tr>
                  <tr>
                    <td className="sr-only">자격증</td>
                    <td>{Info[0].certifications_Third}</td>
                  </tr>
                  <tr>
                    <td className="sr-only">자격증</td>
                    <td>{Info[0].certifications_Four}</td>
                  </tr>
                  <tr>
                    <td>어학점수</td>
                    <td>{Info[0].languageScores}</td>
                  </tr>
                  <tr>
                    <td>기술스택</td>
                    <td>
                      {skills.map((skill, index) => (
                        <div key={index}>
                          {skill.skill}: {skill.level}%
                        </div>
                      ))}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="intro-bg">
        <div className="intro_title">
          Introduce
          <div className="Title_line" />
          <div class="row">
            <div class="col">
              <div className="intro-list">
                <article class="message is-warning">
                  <div class="message-header">
                    <p>성장 과정</p>
                    <button class="delete" aria-label="delete"></button>
                  </div>
                  <div class="message-body">
                    저는 어릴 때부터 호기심 가득한 성격으로 인해 항상 새로운
                    것을 배우고 탐구하는 것을 즐겼습니다. 성실히 학업에 임하고,
                    다양한 동아리 활동을 통해 리더십을 기르고 친구들과 협력하는
                    기회를 가졌습니다.
                  </div>
                </article>
                <article class="message is-warning">
                  <div class="message-header">
                    <p>입사 지원동기</p>
                    <button class="delete" aria-label="delete"></button>
                  </div>
                  <div class="message-body">
                    IT 기업에서의 입사에 대한 동기는 저의 열정과 관련이
                    깊습니다. 저는 현재의 기술적 흐름을 이해하고, 신기술을 통해
                    사회와 비즈니스에 기여하고 싶어 합니다. 귀사는 혁신적인
                    프로젝트와 글로벌 영향력을 가지고 있으며, 이를 통해 제
                    역량을 향상시키고 성장할 수 있는 최고의 장소라고 생각합니다.
                  </div>
                </article>
                <article class="message is-warning">
                  <div class="message-header">
                    <p>포부 및 장래 계획</p>
                    <button class="delete" aria-label="delete"></button>
                  </div>
                  <div class="message-body">
                    저의 포부는 끊임없이 성장하며 문제를 해결하고 혁신적인
                    솔루션을 개발하는 것입니다. 저의 기술 분야에서의 전문성을
                    더욱 강화하고, 혁신적인 프로젝트에 참여하며 꾸준히 성장 할
                    것이고, 사회와 비즈니스에 가치를 창출하는 일에 헌신하고자
                    합니다.
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
