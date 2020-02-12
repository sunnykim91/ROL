import React, { useState, useCallback } from "react";
import Fiveitem from "./Fiveitem";

const Five = () => {
  const [players, setPlayers] = useState([
    {
      id: 1,
      text: "player1",
      position: "없음"
    },
    {
      id: 2,
      text: "player2",
      position: "없음"
    },
    {
      id: 3,
      text: "player3",
      position: "없음"
    },
    {
      id: 4,
      text: "player4",
      position: "없음"
    },
    {
      id: 5,
      text: "player5",
      position: "없음"
    }
  ]);

  const [value, setValue] = useState("");

  const onChange = useCallback(e => {
    setValue(e.target.value);
    // setPlayers(...players, value);
    e.preventDefault();
    console.log(e.target.value);
    setValue("");
  });

  // const onClick = text => {
  //   console.log(text);
  //   setPlayers(...players, text);
  // };

  // console.log(value);

  return (
    <div>
      <form>
        <input
          placeholder="플레이어 아이디 또는 이름 입력"
          value={value}
          onChange={onChange}
        ></input>
        <button type="submit">입력</button>
      </form>
      <div></div>
    </div>
  );
};

export default Five;
