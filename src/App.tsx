import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import TodayMeetingContainer from "./views/TodayMeeting";

function App() {
  return (
    <Router>
      <TodayMeetingContainer />
    </Router>
  );
}

export default App;

/*********************
 * 회사일 / 내 일 구분하기
 *********************/
