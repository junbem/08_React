/*

  [useLocalStorage]
  - 브라우저의 localStorage에 데이터를 저장하고, React 상태와 동기화하는 커스텀 hook이다

  기능
  - 초기값을 localStorage에서 불러옴
  - 상태변경시 localStorage에도 반영
  - 수동 초기화(삭제) 기능
*/

"use client";

import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    // 브라우저 환경이 아니면 초기값 반환
    // localStorage에서 값을 가져옴
    // 값이 있으면 JSON파싱하여 반환, 없으면 초기값 반환
  });
}

export default function UseLocalStorageExample() {
  return (
    <div>
      <h2>useLocalStorage Hook 예제</h2>
    </div>
  );
}
