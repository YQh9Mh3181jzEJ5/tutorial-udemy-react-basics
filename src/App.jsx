import { useState } from "react";
import { ColorfullMessage } from "./components/ColorfullMessage";

export const App = () => {
  console.log("App");
  const [num, setNum] = useState(0);
  const [isShowFace, setIsShowFace] = useState(true);

  const onClickCountUp = () => {
    setNum((prev) => prev + 1);
  };

  const onClickToggle = () => {
    setIsShowFace(!isShowFace);
  };

  return (
    <div>
      <h1>こんにちは</h1>
      <ColorfullMessage color="blue">お元気ですか？</ColorfullMessage>
      <ColorfullMessage color="green">今日の天気は晴れです。</ColorfullMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
      <button onClick={onClickToggle}>on/off</button>
      {isShowFace && <p>( . - . )</p>}
    </div>
  );
};
