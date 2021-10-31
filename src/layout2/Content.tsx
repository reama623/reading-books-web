import classNames from "classnames";
import React from "react";
import { Switch, Route } from "react-router-dom";
import ImpressionContainer from "../views/impression";

function Content() {
  return (
    <div className={classNames("contents_wrap", "container-xxl")}>
      <aside className="sidebar">
        <nav>
          <ul>
            <li>
              <a href="#">Season1</a>
            </li>
            <li>
              <a href="#">Season2</a>
            </li>
            <li>
              <a href="#">Season3</a>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="main">
        <Switch>
          <Route exact path="/" component={ImpressionContainer} />
        </Switch>
      </main>
    </div>
  );
}

export default Content;
