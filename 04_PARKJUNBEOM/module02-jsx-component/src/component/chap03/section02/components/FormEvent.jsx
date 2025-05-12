"use client";

export default function FormEvent() {
  const handleInputChange = (e) => {
    console.log("입력값 :", e.target.value);
  };

  // 폼 제출 이벤트 핸들러
  const handleSubmit = (e) => {
    e.preventDefault(); // 폼 제출 기본동작(페이지 새로고침) 방지
    alert("폼이 제출되었습니다.");
  };

  return (
    <>
    {/* 폼 이벤트 */}
    <dir style={{margin:'20px'}}>
      <h3>폼 이벤트(onChange, onSubmit)</h3>
      <form ><input type="text" onChange={handleInputChange} placeholder='텍스트를 입력'/></form>
      <button type='submit'>제출</button>
    </dir>
    </>
  )
}
