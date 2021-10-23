import classNames from "classnames";
import React from "react";

function ImpressionPresenter() {
  return (
    <div className="container">
      <div className="container_section">
        <div className="metting_info">
          <ul>
            <li>일시 : 2021.10.13</li>
            <li>
              장소 : 구글 meet(<a href="#">링크</a>)
            </li>
            <li>a</li>
            <li>b</li>
          </ul>
        </div>
      </div>
      <div className={classNames("container_section", "metting_attendants")}>
        <div className="attendant">a</div>
        <div className="attendant">b</div>
        <div className="attendant">c</div>
        <div className="attendant">d</div>
        <div className="attendant">e</div>
        <div className="attendant">f</div>
        <div className="attendant">g</div>
        <div className="attendant">e</div>
        <div className="attendant">f</div>
        <div className="attendant">g</div>
      </div>
      <div className={classNames("container_section", "user_item")}>
        <div className="user_book_info">
          <dl>
            <dt>책 이름</dt>
            <dd>공간의 미래</dd>
            <dt>저자</dt>
            <dd>유현준</dd>
            <dt>출판사</dt>
            <dd>유현문화사</dd>
          </dl>
        </div>
        <div className="user_feeling">
          <div className="feeling_info">
            <div className="feeling_type">
              <div className="type_shell">종류</div>
              <span className="type_content">
                후기
              </span>
            </div>
            <div className="feeling_title">
              <div className="title_shell">제목</div>
              <span className="title_content">
                여러분은 어떤 공간들을 가지고 있나요?
              </span>
            </div>
          </div>
          <div className="feeling_main">
            '공간'은 단순히 우리가 있는 장소를 이야기하는 것이 아닌걸 깨닫게
            되네요. 지금 우리가 사는 이 세상은 셀수없는 수많은 공간으로 이루어져
            있으면서, 하나의 공간으로도 볼 수도 있을 것 같아요. 저자는 마지막에
            독자들에게 미래를 창조하라고 제시합니다. 전 처음에 '공간의 미래'라
            해서 제가 살고 있는 공간, 실체를 대상으로 이야기를 하는 것으로
            생각했지만, 생각 이상으로 저에게 다양한 생각할거리를 던져주었습니다.
            이 책을 읽고나서 저자가 제시하는 다양한 아이디어들은 비현실적이기도
            하고 결실을 맺기위해서는 상당한 시간이 필요한 것들이었지만, 그
            아이디어들을 가능하게 해주는 것은 다름아닌 도전하는 사람들, 희망을
            가진 사람들, 더 나은 미래를 위해 노력하는 꿈이 있는 사람들, 황당한
            이야기를 황당하다고 생각하지 않는 사람들이라는 것을 생각하게
            되었습니다. 우리는 꿈이 있어야 합니다. 우리는 현재의 선택으로 미래를
            만들어 나갑니다. 그 미래는 지금보다 더 나아야 하며 더 나은 미래를
            만들 수 있는 키는 우리가 가지고 있어요. 서구의 것을 따라하는 것에서
            그치지 않고 우리식으로 새롭게 만들어낼 수 있어야 하며, 극심한
            거부반응이 있어도 도전해야하며, 일어날 수 있어야 합니다. 단, 그에
            걸맞는 지식, 능력을 최대한 갖춰서요. 제 삶의 공간에 대해서 생각하니
            앞으로에 대해서 생각을 안할수가 없었습니다. 고마운 책이에요.
            여러분들도 나중에 읽으신다면 저와 비슷한 생각을 하실것같아요 :) 잘
            읽었습니다!"
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImpressionPresenter;

// "주제 : 도심에 공원을 더 만들기 위해선 어떻게 해야할까요? 코로나로
//           인해 더 심해진 비대면 접촉들, 지금은 어쩔 수 없지만 이후에 우리는
//           어떻게 해결해야 할까요? 책에서는 도심에 공원을 더 만들어야 한다고
//           합니다, 그리고 도로에 차를 줄이기 위해 물류이동은 지하 물류터널로
//           만들어 도심에서 사람들이 사용할 수 있도록 해야 한다고 합니다. 과연
//           이게 좋은 방법일까요? 단시간에 될 일은 아니며.. 해당 지역의 지하에는
//           많은 수도관, 어떤곳은 지하철이 있으며 변수가 너무 많을 것 같습니다. 또
//           지반이 약해질 가능성도 있고요. 그래서 전 너무 꿈같은 이야기라고
//           생각합니다 후반부로 갈수록 저자의 다양한 생각들이 보입니다. 예를 들면
//           DMZ(비무장지대)에 도시를 건설하여 남북한의 교류를 한다든지, 지하물류
//           터널을 만들자든지 등등, 읽으면 읽을수록 고개를 끄덕이는 말들을 합니다.
//           그래서 드는 생각이 이런 더 나은 미래를 위해 생각하는 행동과 비전
//           제시를 하는 행동은 굉장히 진취적이고 새로운 생각을 하게 합니다.
//           그러다보니 책의 저자인 유현준 교수와도 직접 이야기를 할 기회가 있으면
//           너무 좋을 것 같다는 생각도 했어요. 이 책을 쓰기위해서 그 동안 수많은
//           노력을 했을 것이라고 생각합니다. 살짝 책의 주제와 엇나가는듯하지만
//           저자는 우리에게 공간에 대한 지식을 전달하면서 마치 미래를 꿈꾸고
//           준비하라는 생각을 하게 하고싶은것 같아요. 그러기 위해서는 생각만
//           해서는 안되고 본인이 책에 제시한 것처럼, 논리가 있고 제대로 정리를
//           해서 미래를 제시해보라는 것 같습니다. 필사 한 부분이 있어 적어봐요 :)
//           - 누군가는 황당한 이야기라고 비웃겠지만, 미래는 꿈꾸는 자들이 만든다.
//           (p.214) (남북한 융합을 위한 DMZ 평화 엣지시티 중에서-) 누군가 저한테
//           제가 꿈꾸는 세상이 황당한 이야기라고 한다면.. 지금 이세상은 어떻게
//           만들어졌는지 생각해보라고 반문해보고싶네요. 하하"
