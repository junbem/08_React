// 자식 컴포넌트이고 부모 컴포넌트로부터 props를 통해서 값을 전달받느낟.

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

export default function PropsComponent() {
  return (
    <div>
      <Welcome name="Alice" />
      <Welcome name="Bob" />
    </div>
  );
}
