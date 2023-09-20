import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCircleStop,
} from "@fortawesome/free-solid-svg-icons";

export const About = () => {
  return (
    <main>
      <span>소개 페이지</span>
      <div>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <FontAwesomeIcon icon={faCircleStop} />
        <div>조인우</div>
      </div>
      <div>생년월일</div>
      <div>학력</div>
      <div>Advantages</div>
      <div>stacks</div>
      <div>comments</div>
    </main>
  );
};
