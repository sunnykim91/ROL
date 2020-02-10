import React, { useState } from "react";

const Pvp = () => {
  const LineBox = ["탑/", "미드/", "봇/"];
  const champBox = ["아리/", "제드/", "탈론/"];
  const runeBox = ["치속/", "정복자/", "집중공격/"];
  const itemBox = ["공속/", "방관/", "치명타/"];
  const spellBox = ["점멸", "점화", "회복"];

  const [datas, setDatas] = useState([
    {
      line: "",
      champ: "",
      rune: "",
      item: "",
      spell: ""
    }
  ]);

  const changeLine = () => {
    const lineNumber = makeRandom(0, 2);

    setDatas(prevdatas =>
      datas.map(data =>
        prevdatas.line === datas.line
          ? { ...data, line: LineBox[lineNumber] }
          : data
      )
    );
  };

  const changeChamp = () => {
    const champNumber = makeRandom(0, 2);

    setDatas(prevdatas =>
      datas.map(data =>
        prevdatas.champ === datas.champ
          ? { ...data, champ: champBox[champNumber] }
          : data
      )
    );
  };

  const changeRune = () => {
    const runeNumber = makeRandom(0, 2);

    setDatas(prevdatas =>
      datas.map(data =>
        prevdatas.rune === datas.rune
          ? { ...data, rune: runeBox[runeNumber] }
          : data
      )
    );
  };

  const changeItem = () => {
    const itemNumber = makeRandom(0, 2);

    setDatas(prevdatas =>
      datas.map(data =>
        prevdatas.item === datas.item
          ? { ...data, item: itemBox[itemNumber] }
          : data
      )
    );
  };

  const changeSpell = () => {
    const sepllNumber = makeRandom(0, 2);

    setDatas(prevdatas =>
      datas.map(data =>
        prevdatas.spell === datas.spell
          ? { ...data, spell: spellBox[sepllNumber] }
          : data
      )
    );
  };

  const all = () => {
    const lineNumber = makeRandom(0, 2);
    const champNumber = makeRandom(0, 2);
    const runeNumber = makeRandom(0, 2);
    const itemNumber = makeRandom(0, 2);
    const sepllNumber = makeRandom(0, 2);
    setDatas(prevdatas =>
      datas.map(data =>
        prevdatas === datas
          ? {
              ...data,
              line: LineBox[lineNumber],
              champ: champBox[champNumber],
              rune: runeBox[runeNumber],
              item: itemBox[itemNumber],
              spell: spellBox[sepllNumber]
            }
          : data
      )
    );
  };

  function makeRandom(min, max) {
    const RandVal = Math.floor(Math.random() * (max - min + 1)) + min;
    return RandVal;
  }

  return (
    <>
      <div>
        플레이어 1<button onClick={all}>일괄랜덤</button>
      </div>
      <div>
        <button onClick={changeLine}>라인</button>
        <button onClick={changeChamp}>챔피언</button>
        <button onClick={changeRune}>룬</button>
        <button onClick={changeItem}>아이템</button>
        <button onClick={changeSpell}>스펠</button>
      </div>
      <div>
        {datas.map(data => data.line)}
        {datas.map(data => data.champ)}
        {datas.map(data => data.rune)}
        {datas.map(data => data.item)}
        {datas.map(data => data.spell)}
      </div>
      <div>
        플레이어 2<button onClick={all}>일괄랜덤</button>
      </div>
      <div>
        <button onClick={changeLine}>라인</button>
        <button onClick={changeChamp}>챔피언</button>
        <button onClick={changeRune}>룬</button>
        <button onClick={changeItem}>아이템</button>
        <button onClick={changeSpell}>스펠</button>
      </div>
      <div>
        {datas.map(data => data.line)}
        {datas.map(data => data.champ)}
        {datas.map(data => data.rune)}
        {datas.map(data => data.item)}
        {datas.map(data => data.spell)}
      </div>
    </>
  );
};
