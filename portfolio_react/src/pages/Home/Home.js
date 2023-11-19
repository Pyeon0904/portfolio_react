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
                <h1 className="home_title_L">안녕하세요</h1>
                <h1 className="home_title_L">프로트엔드 개발자</h1>
                <h1 className="home_title_L">
                  <strong>김다예</strong>입니다.
                </h1>
                <div className="term-contents1" />
                <h2 class="home_subTitle_L">
                  <strong>혁신적인 솔루션</strong>을 만들어내는
                </h2>
                <h2 class="home_subTitle_L">
                  <strong>열정적인 개발자</strong>가 되기 위해 끊임없이
                  도전합니다.
                </h2>
              </section>
            </section>
          </div>
          <div class="col">
            <section class="hero is-success">
              <section class="section is-large">
                <h1 class="home_title_R">저의 여정을</h1>
                <h1 class="home_title_R2">소개합니다.</h1>
                <div className="term-contents1" />
                <h2 class="home_subTitle_R">앞으로도 지속될</h2>
                <h2 class="home_subTitle_R">
                  여정은 제 <strong>자부심</strong>과{' '}
                </h2>
                <h2 class="home_subTitle_R">
                  <strong>용기</strong>가 될 것 입니다
                </h2>
                <div className="socialLink-div">
                  <div className="term-contents" />
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
