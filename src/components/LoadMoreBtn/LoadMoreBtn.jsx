import css from "../LoadMoreBtn/LoadMoreBtn.module.css";
//npm install clsx
import clsx from "clsx";
export const LoadMoreBtn = ({ onClick, onElements }) => {
  let isElement = true;
  if (onElements.length === 0) {
    isElement = false;
  } else if (onElements.length < 10) {
    isElement = false;
  }
  // console.log(onElements);
  // console.log(isElement);
  return (
    <button
      onClick={onClick}
      className={clsx({
        [css.nonButton]: !isElement,
        [css.isButton]: isElement,
      })}
    >
      Loade More
    </button>
  );
};