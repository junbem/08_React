"use client";

import { useSelector, useDispatch } from "react-redux";

function Section01() {
  const state = useSelector((state) => state);
  // state에는 어떻게 값이 들어가있을까 ?
  // { count: 0, user: {name:'', age: 0}}가 정의된다.
  // 이것은 combineReducer로 생성한 rootReducer의 결과이다.
}

export default Section01;
