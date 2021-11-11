import React from "react";
import classNames from "classnames";
// import UserIcon from "../../assets/icons/person-circle-outline.svg";

export default function TodayMeetingPresenter() {
  return (
    <div id="wrap">
      <header className={classNames("header")}>
        <div className="header_gnb">
          <h1 className="header_title">
            {/* <a href="#" className="header_title_logo">
              
            </a> */}
            <a href="#" className="header_title_name">
              <span className="blind">독서 모임</span>
            </a>
          </h1>
          <div className="header_menus">
            <div className="header_menu">
              <a href="/">오늘의 모임</a>
            </div>
            <div className="header_menu">
              <a href="#" onClick={() => alert("준비중이에요 !")}>
                공지사항
              </a>
            </div>
            <div className="header_menu">
              <a href="#" onClick={() => alert("준비중이에요 !")}>
                우리의 도서관
              </a>
            </div>
            <div className="header_menu">
              <a
                href="https://massive-touch-df4.notion.site/Season1-38551245660f43cdbb1520da6c15f835"
                target="_blank"
              >
                Season1 안내
              </a>
            </div>
          </div>
          {/* <div className="header_tool_area">
            <button className="header_button_menu">hi</button>
          </div> */}
        </div>
      </header>
      <main id="content">
        <section className="page_title_box">
          <h2 className="week_title">11/10 모임</h2>
          <div className="week_subtitle">
            {/* <p>오늘의 나를 있게 한 것은 우리 마을 도서관이었다.</p>
            <p>하버드 졸업장보다 소중한 것이 독서하는 습관이다. -빌 게이츠-</p> */}
            {/* <p>그저 생각하고, 생활을 위해 독서하라. -베이컨-</p> */}
            <p>좋은 책은 좋은 친구와 같다. -생피에르-</p>
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
                  alt="사람풍경 책 이미지"
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
                  src="https://bookthumb-phinf.pstatic.net/cover/137/463/13746314.jpg?type=m1&udate=20201019"
                  alt="참을 수 없는 존재의 가벼움 책 이미지"
                  className="s"
                />
              </div>
              <div className="book_info">
                <div className="book_title">참을 수 없는 존재의 가벼움</div>
                <div className="book_author">밀란 쿤데라</div>
                <div className="book_reader">김지영</div>
              </div>
            </div>
            <div className="user_book">
              <div className="book_img">
                <img
                  src="https://bookthumb-phinf.pstatic.net/cover/207/385/20738594.jpg?type=m1&udate=20210715"
                  alt="아주 보통의 행복 책 이미지"
                />
              </div>
              <div className="book_info">
                <div className="book_title">아주 보통의 행복</div>
                <div className="book_author">최인철</div>
                <div className="book_reader">이예진</div>
              </div>
            </div>
            <div className="user_book">
              <div className="book_img">
                <img
                  src="https://bookthumb-phinf.pstatic.net/cover/001/510/00151055.jpg?type=m1&udate=20130129"
                  alt="잡 노마드 사회 책 이미지"
                />
              </div>
              <div className="book_info">
                <div className="book_title">인간실격</div>
                <div className="book_author">다자이 오사무</div>
                <div className="book_reader">김다솜</div>
              </div>
            </div>
            <div className="user_book">
              <div className="book_img">
                <img
                  src="https://bookthumb-phinf.pstatic.net/cover/147/897/14789727.jpg?type=m1&udate=20210915"
                  alt="시작의 기술 책 이미지"
                />
              </div>
              <div className="book_info">
                <div className="book_title">시작의 기술</div>
                <div className="book_author">개리 비숍</div>
                <div className="book_reader">강유진</div>
              </div>
            </div>
            <div className="user_book">
              <div className="book_img">
                <img
                  src="https://bookthumb-phinf.pstatic.net/cover/001/108/00110830.jpg?type=m1&udate=20141121"
                  alt="틱닛한의 평화로움 책 이미지"
                />
              </div>
              <div className="book_info">
                <div className="book_title">틱낫한의 평화로움</div>
                <div className="book_author">틱낫한</div>
                <div className="book_reader">김민강</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
