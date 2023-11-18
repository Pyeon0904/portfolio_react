import React from 'react';
import Activity1 from '../../component/activity1/activity1';
import Activity2 from '../../component/activity2/activity2';
import Activity3 from '../../component/activity3/activity3';
import Proj1 from '../../component/Proj1/Proj1';
import Proj2 from '../../component/Proj2/Proj2';
import Proj3 from '../../component/Proj3/Proj3';
import '../global.css';
import './Project.css';

export default function Experience() {
  return (
    <>
      <div className="main_layout">
        <div className="page_title">
          Project
          <div className="Title_line" />
        </div>
        <div className="project_scope">
          <div className="row">
            <div className="col">
              <Proj1 />
            </div>
            <div className="col">
              <Proj2 />
            </div>
            <div className="col">
              <Proj3 />
            </div>
          </div>
        </div>
      </div>
      <div className="main_layout2">
        <div className="activity_title">
          Activity
          <div className="Title_line" />
        </div>
        <div className="activity_scope">
          <div className="col">
            <div className="row">
              <Activity1 />
            </div>
            <div className="row">
              <Activity2 />
            </div>
            <div className="row">
              <Activity3 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
