
import React from 'react';

const Five = () => {
  return <div style={{ padding: '50px' }}>Five 입니당</div>;

import React, { useState } from "react";

const Five = () => {
  const [players, setPlayers] = useState([
    {
      id: 0,
      text: "아이디를 입력하세요",
      position: "없음",
      champ: "챔피언없음/",
      rune: "룬없음",
      item: "아이템없음",
      spell: "스펠없음"
    },
    {
      id: 1,
      text: "아이디를 입력하세요",
      position: "없음",
      champ: "챔피언없음/",
      rune: "룬없음",
      item: "아이템없음",
      spell: "스펠없음"
    },
    {
      id: 2,
      text: "아이디를 입력하세요",
      position: "없음",
      champ: "챔피언없음/",
      rune: "룬없음",
      item: "아이템없음",
      spell: "스펠없음"
    },
    {
      id: 3,
      text: "아이디를 입력하세요",
      position: "없음",
      champ: "챔피언없음/",
      rune: "룬없음",
      item: "아이템없음",
      spell: "스펠없음"
    },
    {
      id: 4,
      text: "아이디를 입력하세요",
      position: "없음",
      champ: "챔피언없음/",
      rune: "룬없음",
      item: "아이템없음",
      spell: "스펠없음"
    }
  ]);
  const [value, setValue] = useState("");
  const [number, setNumber] = useState(0);
  const positionBox = ["탑/", "정글/", "미드/", "봇/", "서포터/ ", "상관없음/"];
  const champBox = ["아리/", "제드/", "탈론/", "가렌/", "아트록스/"];
  const runeBox = ["치속/", "정복자/", "집중공격/", "감전", "포식자"];
  const itemBox = ["공속/", "방관/", "치명타/", "물방", "마방"];
  const spellBox = ["점멸", "점화", "회복", "총명", "탈진"];

  const buttonClick = (id, e) => {
    e.preventDefault();
    setPlayers(
      players.map(player =>
        player.id === id ? { ...player, text: value } : player
      )
    );
    setValue("");
  };

  const onChange = e => {
    setValue(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();

    if (players[number].text === "아이디를 입력하세요") {
      setPlayers(
        players.map(player =>
          player.id === number ? { ...player, text: value } : player
        )
      );
      number < 4 ? setNumber(number + 1) : setNumber(0);
    } else {
      setPlayers(
        players.map(player =>
          player.id === number ? { ...player, text: value } : player
        )
      );
      number < 4 ? setNumber(number + 1) : setNumber(0);
    }
    setValue("");
  };

  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // 랜덤하게 추출 (array Ver)
  function getRandomArray(min, max, count) {
    // 종료
    if (max - min + 1 < count) return;

    // 배열 생성
    let rst = [];

    while (1) {
      let index = getRandom(min, max);

      // 중복 여부를 체크
      if (rst.indexOf(index) > -1) {
        continue;
      }

      rst.push(index);

      // 원하는 배열 갯수가 되면 종료
      if (rst.length === count) {
        break;
      }
    }
    // console.log(rst);
    return rst;
  }

  const all = () => {
    const Random = getRandomArray(0, 5, 5);
    const p1 = Random[0];
    const p2 = Random[1];
    const p3 = Random[2];
    const p4 = Random[3];
    const p5 = Random[4];

    const p6 = getRandom(0, 4);
    const p7 = getRandom(0, 4);
    const p8 = getRandom(0, 4);
    const p9 = getRandom(0, 4);
    const p10 = getRandom(0, 4);

    setPlayers(
      players.map(player =>
        player.id === 0
          ? {
              ...player,
              position: positionBox[p1],
              champ: champBox[p1],
              rune: runeBox[p6],
              item: itemBox[p6],
              spell: spellBox[p6]
            }
          : player.id === 1
          ? {
              ...player,
              position: positionBox[p2],
              champ: champBox[p2],
              rune: runeBox[p7],
              item: itemBox[p7],
              spell: spellBox[p7]
            }
          : player.id === 2
          ? {
              ...player,
              position: positionBox[p3],
              champ: champBox[p3],
              rune: runeBox[p8],
              item: itemBox[p8],
              spell: spellBox[p8]
            }
          : player.id === 3
          ? {
              ...player,
              position: positionBox[p4],
              champ: champBox[p4],
              rune: runeBox[p9],
              item: itemBox[p9],
              spell: spellBox[p9]
            }
          : player.id === 4
          ? {
              ...player,
              position: positionBox[p5],
              champ: champBox[p5],
              rune: runeBox[p10],
              item: itemBox[p10],
              spell: spellBox[p10]
            }
          : player
      )
    );
  };

  const changePosition = () => {
    const Random = getRandomArray(0, 5, 5);
    const p1 = Random[0];
    const p2 = Random[1];
    const p3 = Random[2];
    const p4 = Random[3];
    const p5 = Random[4];

    setPlayers(
      players.map(player =>
        player.id === 0
          ? { ...player, position: positionBox[p1] }
          : player.id === 1
          ? { ...player, position: positionBox[p2] }
          : player.id === 2
          ? { ...player, position: positionBox[p3] }
          : player.id === 3
          ? { ...player, position: positionBox[p4] }
          : player.id === 4
          ? { ...player, position: positionBox[p5] }
          : player
      )
    );
  };

  const changeChamp = e => {
    const Random = getRandomArray(0, 4, 5);
    const p1 = Random[0];
    const p2 = Random[1];
    const p3 = Random[2];
    const p4 = Random[3];
    const p5 = Random[4];

    setPlayers(
      players.map(player =>
        player.id === 0
          ? { ...player, champ: champBox[p1] }
          : player.id === 1
          ? { ...player, champ: champBox[p2] }
          : player.id === 2
          ? { ...player, champ: champBox[p3] }
          : player.id === 3
          ? { ...player, champ: champBox[p4] }
          : player.id === 4
          ? { ...player, champ: champBox[p5] }
          : player
      )
    );
  };

  const changeRune = () => {
    const p1 = getRandom(0, 4);
    const p2 = getRandom(0, 4);
    const p3 = getRandom(0, 4);
    const p4 = getRandom(0, 4);
    const p5 = getRandom(0, 4);

    setPlayers(
      players.map(player =>
        player.id === 0
          ? { ...player, rune: runeBox[p1] }
          : player.id === 1
          ? { ...player, rune: runeBox[p2] }
          : player.id === 2
          ? { ...player, rune: runeBox[p3] }
          : player.id === 3
          ? { ...player, rune: runeBox[p4] }
          : player.id === 4
          ? { ...player, rune: runeBox[p5] }
          : player
      )
    );
  };

  const changeItem = () => {
    const p1 = getRandom(0, 4);
    const p2 = getRandom(0, 4);
    const p3 = getRandom(0, 4);
    const p4 = getRandom(0, 4);
    const p5 = getRandom(0, 4);

    setPlayers(
      players.map(player =>
        player.id === 0
          ? { ...player, item: itemBox[p1] }
          : player.id === 1
          ? { ...player, item: itemBox[p2] }
          : player.id === 2
          ? { ...player, item: itemBox[p3] }
          : player.id === 3
          ? { ...player, item: itemBox[p4] }
          : player.id === 4
          ? { ...player, item: itemBox[p5] }
          : player
      )
    );
  };

  const changeSpell = () => {
    const p1 = getRandom(0, 4);
    const p2 = getRandom(0, 4);
    const p3 = getRandom(0, 4);
    const p4 = getRandom(0, 4);
    const p5 = getRandom(0, 4);

    setPlayers(
      players.map(player =>
        player.id === 0
          ? { ...player, spell: spellBox[p1] }
          : player.id === 1
          ? { ...player, spell: spellBox[p2] }
          : player.id === 2
          ? { ...player, spell: spellBox[p3] }
          : player.id === 3
          ? { ...player, spell: spellBox[p4] }
          : player.id === 4
          ? { ...player, spell: spellBox[p5] }
          : player
      )
    );
  };

  return (
    <div>
      <form onSubmit={e => onSubmit(e)}>
        <input
          placeholder="플레이어 아이디 또는 이름 입력"
          value={value}
          onChange={e => onChange(e)}
        ></input>
        <button type="submit">입력</button>
        <div>
          {players.map(player => (
            <div key={player.id}>
              {player.text}/{player.position}/{player.champ}/{player.rune}/
              {player.item}/{player.spell}
              <button onClick={e => buttonClick(player.id, e)}>
                아이디 수정
              </button>
            </div>
          ))}
        </div>
      </form>
      <button onClick={all}>일괄랜덤</button>
      <button onClick={changePosition}>포지션만변경</button>
      <button onClick={changeChamp}>챔피언만변경</button>
      <button onClick={changeRune}>룬만변경</button>
      <button onClick={changeItem}>아이템만변경</button>
      <button onClick={changeSpell}>스펠만변경</button>
    </div>
  );
};

export default Five;
