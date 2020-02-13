import React, { useState } from "react";

const Duo = () => {
  const positionBox = ["탑/", "정글/", "미드/", "봇/", "서포터/ ", "상관없음/"];
  const champBox = ["아리/", "제드/", "탈론/"];
  const runeBox = ["치속/", "정복자/", "집중공격/"];
  const itemBox = ["공속/", "방관/", "치명타/"];
  const spellBox = ["점멸", "점화", "회복"];

  // const arr = useState(getRandomArray(0, 5, 6));
  // let arr1 = getRandomArray(0, 5, 6);

  const [datas, setDatas] = useState([
    {
      firstposition: "",
      secondposition: "",
      champ: "",
      rune: "",
      item: "",
      spell: "",
      duofirstposition: "",
      duosecondposition: "",
      duochamp: "",
      duorune: "",
      duoitem: "",
      duospell: ""
    }
  ]);

  const changePosition = () => {
    let Random = getRandomArray(0, 5, 4);
    const firstLineNumber = Random[0];
    let secondLineNumber;
    const duofirstLineNumber = Random[2];
    let duosecondLineNumber;

    firstLineNumber !== 5
      ? (secondLineNumber = Random[1])
      : (secondLineNumber = undefined);

    duofirstLineNumber !== 5
      ? (duosecondLineNumber = Random[3])
      : (duosecondLineNumber = undefined);

    setDatas(prevdatas =>
      datas.map(data =>
        prevdatas === datas
          ? {
              ...data,
              firstposition: positionBox[duofirstLineNumber],
              secondposition: positionBox[duosecondLineNumber],
              duofirstposition: positionBox[firstLineNumber],
              duosecondposition: positionBox[secondLineNumber]
            }
          : data
      )
    );
  };

  const changeChamp = () => {
    const champNumber = getRandomArray(0, 2, 2);

    setDatas(prevdatas =>
      datas.map(data =>
        prevdatas.champ === datas.champ
          ? {
              ...data,
              champ: champBox[champNumber[0]],
              duochamp: champBox[champNumber[1]]
            }
          : data
      )
    );
  };

  const changeRune = () => {
    const runeNumber = getRandomArray(0, 2, 1);
    const runeNumber2 = getRandomArray(0, 2, 1);

    setDatas(prevdatas =>
      datas.map(data =>
        prevdatas.rune === datas.rune
          ? {
              ...data,
              rune: runeBox[runeNumber[0]],
              duorune: runeBox[runeNumber2[0]]
            }
          : data
      )
    );
  };

  const changeItem = () => {
    const itemNumber = makeRandom(0, 2);
    const itemNumber2 = makeRandom(0, 2);

    setDatas(prevdatas =>
      datas.map(data =>
        prevdatas.item === datas.item
          ? {
              ...data,
              item: itemBox[itemNumber],
              duoitem: itemBox[itemNumber2]
            }
          : data
      )
    );
  };

  const changeSpell = () => {
    const sepllNumber = makeRandom(0, 2);
    const sepllNumber2 = makeRandom(0, 2);

    setDatas(prevdatas =>
      datas.map(data =>
        prevdatas.spell === datas.spell
          ? {
              ...data,
              spell: spellBox[sepllNumber],
              duospell: spellBox[sepllNumber2]
            }
          : data
      )
    );
  };

  const all = () => {
    let Random = getRandomArray(0, 5, 4);
    const firstLineNumber = Random[0];
    let secondLineNumber;
    const duofirstLineNumber = Random[2];
    let duosecondLineNumber;

    if (firstLineNumber !== 5) {
      secondLineNumber = Random[1];
    }

    if (duofirstLineNumber !== 5) {
      duosecondLineNumber = Random[3];
    }

    const champNumber = getRandomArray(0, 2, 2);
    const runeNumber = getRandomArray(0, 2, 2);
    const itemNumber = getRandomArray(0, 2, 2);
    const sepllNumber = getRandomArray(0, 2, 2);

    setDatas(prevdatas =>
      datas.map(data =>
        prevdatas === datas
          ? {
              ...data,
              firstposition: positionBox[duofirstLineNumber],
              secondposition: positionBox[duosecondLineNumber],
              champ: champBox[champNumber[0]],
              rune: runeBox[runeNumber[0]],
              item: itemBox[itemNumber[0]],
              spell: spellBox[sepllNumber[0]],
              duofirstposition: positionBox[firstLineNumber],
              duosecondposition: positionBox[secondLineNumber],
              duochamp: champBox[champNumber[1]],
              duorune: runeBox[runeNumber[1]],
              duoitem: itemBox[itemNumber[1]],
              duospell: spellBox[sepllNumber[1]]
            }
          : data
      )
    );
  };

  function makeRandom(min, max) {
    const RandVal = Math.floor(Math.random() * (max - min + 1)) + min;
    return RandVal;
  }

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

  return (
    <>
      <div>
        플레이어1<button onClick={all}>일괄랜덤</button>
      </div>
      <div>
        <button onClick={changePosition}>포지션</button>
        <button onClick={changeChamp}>챔피언</button>
        <button onClick={changeRune}>룬</button>
        <button onClick={changeItem}>아이템</button>
        <button onClick={changeSpell}>스펠</button>
      </div>
      <div>주 포지션: {datas.map(data => data.firstposition)}</div>
      <div>부 포지션: {datas.map(data => data.secondposition)}</div>
      <div>챔피언:{datas.map(data => data.champ)}</div>
      <div>룬:{datas.map(data => data.rune)}</div>
      <div>아이템:{datas.map(data => data.item)}</div>
      <div>스펠:{datas.map(data => data.spell)}</div>
      <div>
        {datas.map(data => data.firstposition)}
        {datas.map(data => data.secondposition)}
        {datas.map(data => data.champ)}
        {datas.map(data => data.rune)}
        {datas.map(data => data.item)}
        {datas.map(data => data.spell)}
      </div>
      <div>플레이어2</div>
      <div>
        {/* <button onClick={() => changePosition("bye")}>포지션</button> */}
        {/* <button onClick={changeChamp}>챔피언</button> */}
        {/* <button onClick={changeRune}>룬</button> */}
        {/* <button onClick={changeItem}>아이템</button> */}
        {/* <button onClick={changeSpell}>스펠</button> */}
      </div>
      <div>주 포지션: {datas.map(data => data.duofirstposition)}</div>
      <div>부 포지션: {datas.map(data => data.duosecondposition)}</div>
      <div>챔피언:{datas.map(data => data.duochamp)}</div>
      <div>룬:{datas.map(data => data.duorune)}</div>
      <div>아이템:{datas.map(data => data.duoitem)}</div>
      <div>스펠:{datas.map(data => data.duospell)}</div>
      <div>
        {datas.map(data => data.duofirstposition)}
        {datas.map(data => data.duosecondposition)}
        {datas.map(data => data.duochamp)}
        {datas.map(data => data.duorune)}
        {datas.map(data => data.duoitem)}
        {datas.map(data => data.duospell)}
      </div>
    </>
  );
};

export default Duo;
