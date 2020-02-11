import React, { useState } from 'react';

const Solo = () => {
  const positionBox = ['탑/', '정글/', '미드/', '봇/', '서포터/ ', '상관없음/'];
  const champBox = ['아리/', '제드/', '탈론/'];
  const runeBox = ['치속/', '정복자/', '집중공격/'];
  const itemBox = ['공속/', '방관/', '치명타/'];
  const spellBox = ['점멸', '점화', '회복'];

  const [datas, setDatas] = useState([
    {
      champ: '',
      rune: '',
      item: '',
      spell: '',
      firstposition: '',
      secondposition: ''
    }
  ]);

  const changePosition = () => {
    const firstLineNumber = makeRandom(0, 5);
    let secondLineNumber;
    if (firstLineNumber !== 5) {
      secondLineNumber = makeRandom(0, 4);
      do {
        secondLineNumber = makeRandom(0, 4);
      } while (secondLineNumber === firstLineNumber);
    }

    // let secondLineNumber = makeRandom(0, 5);

    // do {
    //   secondLineNumber = makeRandom(0, 5);
    // } while (secondLineNumber === firstLineNumber);

    setDatas(prevdatas =>
      datas.map(data =>
        prevdatas.firstposition === datas.firstposition
          ? {
              ...data,
              firstposition: positionBox[firstLineNumber],
              secondposition: positionBox[secondLineNumber]
            }
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
    const firstLineNumber = makeRandom(0, 5);
    let secondLineNumber;
    if (firstLineNumber !== 5) {
      secondLineNumber = makeRandom(0, 4);
      do {
        secondLineNumber = makeRandom(0, 4);
      } while (secondLineNumber === firstLineNumber);
    }

    const champNumber = makeRandom(0, 2);
    const runeNumber = makeRandom(0, 2);
    const itemNumber = makeRandom(0, 2);
    const sepllNumber = makeRandom(0, 2);
    setDatas(prevdatas =>
      datas.map(data =>
        prevdatas === datas
          ? {
              ...data,
              firstposition: positionBox[firstLineNumber],
              secondposition: positionBox[secondLineNumber],
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
        플레이어<button onClick={all}>일괄랜덤</button>
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
    </>
  );
};

export default Solo;
