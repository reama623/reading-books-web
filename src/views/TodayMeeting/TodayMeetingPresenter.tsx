import React from "react";
import classNames from "classnames";
// import UserIcon from "../../assets/icons/person-circle-outline.svg";

export default function TodayMeetingPresenter() {
  return (
    <div id="wrap">
      <header className={classNames("header")}>
        <div className="header_gnb">
          <h1 className="header_title">
            <a href="#" className="header_title_logo">
              i
            </a>
            <a href="#" className="header_title_name">
              <span className="blind">모임</span>
            </a>
          </h1>
          <div className="header_menus">
            <div className="header_menu">오늘의 모임</div>
            <div className="header_menu">공지사항</div>
            <div className="header_menu">우리의 도서관</div>
          </div>
          <div className="header_tool_area">
            {/* <img src={UserIcon} /> */}
            <button className="header_button_menu">hi</button>
          </div>
        </div>
      </header>
      <main id="content">
        <section className="page_title_box">
          <h2 className="week_title">11/3 모임</h2>
          <div className="week_subtitle">
            <p>오늘의 나를 있게 한 것은 우리 마을 도서관이었다.</p>
            <p>하버드 졸업장보다 소중한 것이 독서하는 습관이다. -빌 게이츠-</p>
          </div>
        </section>
        <section className="page_content">
          <div className="page_content_title">오늘, 우리의 이야기</div>
          <div className="page_content_subtitle">마음껏 이야기 해보아요!</div>
          <div className="page_content_books">
            <div className="user_book">
              <div className="book_img">
                <img
                  src="https://bookthumb-phinf.pstatic.net/cover/068/576/06857604.jpg?type=m1&udate=20200127"
                  alt="사람풍경"
                />
              </div>
              <div className="book_info">
                <div className="book_title">사람풍경</div>
                <div className="book_author">김형경</div>
                <div className="book_reader">가혜진</div>
              </div>
            </div>
            <div className="user_book">
              <div className="book_img">
                <img
                  src="https://bookthumb-phinf.pstatic.net/cover/071/024/07102432.jpg?type=m1&udate=20201008"
                  alt="데미안"
                  className="s"
                />
              </div>
              <div className="book_info">
                <div className="book_title">데미안</div>
                <div className="book_author">헤르만 헤세</div>
                <div className="book_reader">김지영</div>
              </div>
            </div>
            <div className="user_book">
              <div className="book_img"></div>
              <div className="book_info">
                <div className="book_title">제목</div>
                <div className="book_author">저자</div>
                <div className="book_reader">독자</div>
              </div>
            </div>
            <div className="user_book">
              <div className="book_img"></div>
              <div className="book_info">
                <div className="book_title">제목</div>
                <div className="book_author">저자</div>
                <div className="book_reader">독자</div>
              </div>
            </div>
            <div className="user_book">
              <div className="book_img"></div>
              <div className="book_info">
                <div className="book_title">제목</div>
                <div className="book_author">저자</div>
                <div className="book_reader">독자</div>
              </div>
            </div>
            <div className="user_book">
              <div className="book_img"></div>
              <div className="book_info">
                <div className="book_title">제목</div>
                <div className="book_author">저자</div>
                <div className="book_reader">독자</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
