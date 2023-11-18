import React from 'react';
import Lottie from 'lottie-react';
import aniDev from './dev.json';
import './Home.css';
import '../global.css';
import 'bulma/css/bulma.min.css';
import SocialLinks from '../../component/SocialLink/SocialLink';

const style = {
  height: '100%',
  width: '100%',
};

export default function Home() {
  return (
    <>
      <div className="main_layout">
        <div className="div-top" class="row">
          <div class="col">
            <section class="hero is-warning">
              <section class="section is-large">
                <h1 className="home_title_L">
                  안녕하세요 프로트엔드 개발자 김다예입니다.
                </h1>
                <h2 class="subtitle">
                  <strong>혁신적인 솔루션</strong>을 만들어내는{' '}
                  <strong>열정적인 개발자</strong>가 되기 위해 끊임없이
                  도전합니다.
                </h2>
              </section>
            </section>
          </div>
          <div class="col">
            <section class="hero is-success">
              <section class="section is-large">
                <h1 class="home_title_R">저의 여정을 소개합니다.</h1>
                <h2 class="subtitle">
                  앞으로도 지속될 이 여정은 저의 <strong>자부심</strong>과{' '}
                  <strong>용기</strong>가 될 것 입니다
                </h2>
                <div className="socialLink-div">
                  <SocialLinks />
                </div>
              </section>
            </section>
          </div>
          <div class="col">
            <Lottie
              animationData={aniDev}
              style={style}
              className="animation"
            />
          </div>
        </div>
        <div className="socialLink-div"></div>
      </div>
    </>
  );
}
