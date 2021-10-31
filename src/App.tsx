import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import Layout from "./layout/layout";
import "@toast-ui/editor/dist/toastui-editor.css";

import { Viewer } from "@toast-ui/react-editor";
import classnames from "classnames";

function App() {
  return (
    <Router>
      <header>
        <div className="page_title">독서모임</div>
        <div className="page_info">
          <div className="info_progress">5번째 모임</div>
          <div className="info_date">2021-10-27</div>
        </div>
      </header>
      <main className={classnames("container")}>
        <section className={classnames("meeting_info")}>
          <div className="meeting_info_subtitle">참석자</div>
          <div className="meeting_info_attendants">
            <div className={classnames("meeting_attendant")}>
              <span>김지영</span>
            </div>
            <div className={classnames("meeting_attendant")}>
              <span>김지영</span>
            </div>
            <div className={classnames("meeting_attendant")}>
              <span>김지영</span>
            </div>
            <div className={classnames("meeting_attendant")}>
              <span>김지영</span>
            </div>
            <div className={classnames("meeting_attendant")}>
              <span>김지영</span>
            </div>
          </div>
          <div className="meeting_info_details">
            <div className="meeting_info_subtitle">detail</div>
          </div>
        </section>
        <section>
          <article className={classnames("meeting_content")}>
            <Viewer
              initialValue={`![image](https://uicdn.toast.com/toastui/img/tui-editor-bi.png)
              # Awesome Editor!    
              It has been *released as opensource in 2018* and has ~~continually~~ evolved to **receive 10k GitHub ⭐️ Stars**.
              ## Create Instance![image](https://uicdn.toast.com/toastui/img/tui-editor-bi.png)
              # Awesome Editor!
              It has been *released as opensource in 2018* and has ~~continually~~ evolved to **receive 10k GitHub ⭐️ Stars**.              
              ## Create Instance![image](https://uicdn.toast.com/toastui/img/tui-editor-bi.png)
              # Awesome Editor!
              It has been *released as opensource in 2018* and has ~~continually~~ evolved to **receive 10k GitHub ⭐️ Stars**.
              ## Create Instance![image](https://uicdn.toast.com/toastui/img/tui-editor-bi.png)
              # Awesome Editor!
              It has been *released as opensource in 2018* and has ~~continually~~ evolved to **receive 10k GitHub ⭐️ Stars**.
              ## Create Instance![image](https://uicdn.toast.com/toastui/img/tui-editor-bi.png)
              # Awesome Editor!
              It has been *released as opensource in 2018* and has ~~continually~~ evolved to **receive 10k GitHub ⭐️ Stars**.
              ## Create Instance
              https://docs.google.com/spreadsheets/d/1kdtEljtFld_B8PvN2NImzFQ4hUmaDaa_J7XQvFDF_-0/edit#gid=640554045&range=D7
              `}
            />
          </article>
        </section>
      </main>
    </Router>
  );
}

export default App;

/*********************
 * 회사일 / 내 일 구분하기
 *********************/
