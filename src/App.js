import { useState } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  console.log("App");
  const [text, setText] = useState("");
  const onChangeText = (e) => setText(e.target.value);
  const onClickCountUp = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <input value={text} onChange={onChangText} />
      <br />
      <br />
      <button>表示</button>
      <ChildArea />
    </div>
  );
}
