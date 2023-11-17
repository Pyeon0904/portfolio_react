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
              <section class="section is-medium">
                <h1>About Me</h1>
                <div className="AboutMe-Line" />
                <h2 class="subtitle">
                  A simple container to divide your page into{' '}
                  <strong>sections</strong>, like the one you're currently
                  reading.
                </h2>
              </section>
            </section>
          </div>
          <div class="col">
            <section class="hero is-success">
              <section class="section is-medium">
                <h1 class="title">저의 발자취를 소개합니다.</h1>
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

// {/* <div class="row">
//   <div class="col">1 of 2</div>
//   <div class="col">2 of 2</div>
// </div>
// <div class="row">
//   <div class="col">1 of 3</div>
//   <div class="col">2 of 3</div>
//   <div class="col">3 of 3</div>
// </div> */}
