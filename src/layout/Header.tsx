import classNames from "classnames";
import React from "react";

interface HeaderProps {}

function Header({}: HeaderProps) {
  return (
    <header className="header">
      <nav className={classNames("container-xxl", "flex-wrap")}>
        <div className="page_title">우리 동네 독서 모임</div>
        <div className="main_menu">
          <ul>
            <li>모임 수칙</li>
            <li>모임 장소 안내</li>
            <li>모임 링크</li>
            <li>모임 FAQ</li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
