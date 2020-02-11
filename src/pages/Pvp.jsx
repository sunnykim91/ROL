import React, { useState } from 'react';
import { Button } from 'antd';
import './Pvp.css';
import vsImg from '../VS.png';

const Pvp = () => {
  const LineBox = ['탑', '미드', '봇'];
  const champBox = ['아리/', '제드/', '탈론/'];
  const runeBox = ['치속/', '정복자/', '집중공격/'];
  const itemBox = ['공속/', '방관/', '치명타/'];
  const spellBox = ['점멸', '점화', '회복'];

  const [datas, setDatas] = useState([
    {
      line: '',
      champ: '',
      rune: '',
      item: '',
      spell: ''
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
    const spellNumber = makeRandom(0, 2);

    setDatas(prevdatas =>
      datas.map(data =>
        prevdatas.spell === datas.spell
          ? { ...data, spell: spellBox[spellNumber] }
          : data
      )
    );
  };

  const all = () => {
    const lineNumber = makeRandom(0, 2);
    const champNumber = makeRandom(0, 2);
    const runeNumber = makeRandom(0, 2);
    const itemNumber = makeRandom(0, 2);
    const spellNumber = makeRandom(0, 2);
    setDatas(prevdatas =>
      datas.map(data =>
        prevdatas === datas
          ? {
              ...data,
              line: LineBox[lineNumber],
              champ: champBox[champNumber],
              rune: runeBox[runeNumber],
              item: itemBox[itemNumber],
              spell: spellBox[spellNumber]
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
    <div
      style={{
        padding: '50px',
        height: '95vh',
        background: '#232f46'
      }}
      className='mainContent'
    >
      <div className='playerOne'>
        <div className='playerOneHeader'>
          <div className='playerOneHeaderName'>플레이어1</div>
          <Button
            onClick={all}
            className='allRandom'
            style={{
              margin: '0px',
              width: '100px',
              height: '36px',
              fontSize: '25px',
              padding: '0px'
            }}
          >
            일괄랜덤
          </Button>
        </div>
        <ul className='playerOneRandomList'>
          <li>
            <Button
              onClick={changeLine}
              style={{
                margin: '0px',
                width: '100px',
                height: '36px',
                fontSize: '25px',
                padding: '0px'
              }}
            >
              라인
            </Button>{' '}
            {datas.map(data => data.line)}
          </li>
          <li>
            <Button
              onClick={changeChamp}
              style={{
                margin: '0px',
                width: '100px',
                height: '36px',
                fontSize: '25px',
                padding: '0px'
              }}
            >
              챔피언
            </Button>{' '}
            {datas.map(data => data.champ)}
          </li>
          <li>
            <Button
              onClick={changeRune}
              style={{
                margin: '0px',
                width: '100px',
                height: '36px',
                fontSize: '25px',
                padding: '0px'
              }}
            >
              룬
            </Button>{' '}
            {datas.map(data => data.rune)}
          </li>
          <li>
            <Button
              onClick={changeItem}
              style={{
                margin: '0px',
                width: '100px',
                height: '36px',
                fontSize: '25px',
                padding: '0px'
              }}
            >
              아이템
            </Button>{' '}
            {datas.map(data => data.item)}
          </li>
          <li>
            <Button
              onClick={changeSpell}
              style={{
                margin: '0px',
                width: '100px',
                height: '36px',
                fontSize: '25px',
                padding: '0px'
              }}
            >
              스펠
            </Button>
            {datas.map(data => data.spell)}
          </li>
        </ul>
      </div>
      <div className='vsImg'>
        <img src={vsImg} width='100px' height='100px'></img>
      </div>
      <div className='playerTwo'>
        <div className='playerTwoHeader'>
          <div className='playerTwoHeaderName'>플레이어2</div>
          <Button onClick={all} className='allRandom'>
            일괄랜덤
          </Button>
        </div>
        <ul className='playerTwoRandomList'>
          <li>
            <Button onClick={changeLine}>라인</Button>{' '}
            {datas.map(data => data.line)}
          </li>
          <li>
            <Button onClick={changeChamp}>챔피언</Button>{' '}
            {datas.map(data => data.champ)}
          </li>
          <li>
            <Button onClick={changeRune}>룬</Button>{' '}
            {datas.map(data => data.rune)}
          </li>
          <li>
            <Button onClick={changeItem}>아이템</Button>{' '}
            {datas.map(data => data.item)}
          </li>
          <li>
            <Button onClick={changeSpell}>스펠</Button>
            {datas.map(data => data.spell)}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pvp;
