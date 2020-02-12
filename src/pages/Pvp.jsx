import React, { useState, useCallback, useMemo } from 'react';
import { Button } from 'antd';
import './Pvp.css';
import vsImg from '../images/VS.png';
import Bottom from '../images/Bottom.png';
import Top from '../images/Top.png';
import Mid from '../images/Mid.png';
import Aatrox from '../images/champions/Aatrox.jpg';
import Akali from '../images/champions/Akali.jpg';
import Ahri from '../images/champions/Ahri.jpg';
import Alistar from '../images/champions/Alistar.jpg';
import Amumu from '../images/champions/Amumu.jpg';
import Anivia from '../images/champions/Anivia.jpg';
import Annie from '../images/champions/Annie.jpg';
import Aphelios from '../images/champions/Aphelios.jpg';
import Ashe from '../images/champions/Ashe.jpg';
import AurelionSol from '../images/champions/AurelionSol.jpg';
import Azir from '../images/champions/Azir.jpg';
import Bard from '../images/champions/Bard.jpg';
import Blitzcrank from '../images/champions/Blitzcrank.jpg';
import Brand from '../images/champions/Brand.jpg';
import question from '../images/champions/question.jpg';
import championDetail from '../datas/championDetail.json';

const getChampBox = () => {
  return championDetail.map(champ => champ.championName);
};

const Pvp = () => {
  const LineBox = ['탑', '미드', '바텀'];
  const [champBox, setChampBox] = useState(getChampBox());
  const runeBox = ['치속/', '정복자/', '집중공격/'];
  const itemBox = ['공속/', '방관/', '치명타/'];
  const spellBox = ['점멸', '점화', '회복'];
  const [onChampionButton, setOnChampionButton] = useState(false);
  let [championInterval, setChampionInterval] = useState(null);
  const [onLineButton, setOnLineButton] = useState(false);
  let [lineInterval, setLineInterval] = useState(null);

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
    if (!onLineButton) {
      // 라인 랜덤선택 버튼 눌렀을때
      setOnLineButton(true);
      lineImageLoater();
    } else {
      // STOP버튼을 눌렀을때
      setOnLineButton(false);
      clearInterval(lineInterval);
      const lineNumber = makeRandom(0, 2);

      setDatas(prevdatas =>
        datas.map(data =>
          prevdatas.line === datas.line
            ? { ...data, line: LineBox[lineNumber] }
            : data
        )
      );
    }
  };

  const changeChamp = () => {
    if (!onChampionButton) {
      // 챔피언 랜덤선택 버튼 눌렀을때
      setOnChampionButton(true);
      imageRotater();
    } else {
      // STOP버튼을 눌렀을때
      setOnChampionButton(false);
      clearInterval(championInterval);
      const champNumber = makeRandom(0, 13);
      setDatas(prevdatas =>
        datas.map(data =>
          prevdatas.champ === datas.champ
            ? { ...data, champ: champBox[champNumber] }
            : data
        )
      );
    }
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

  const championLoading = useCallback(() => {
    console.log(datas.map(data => data.champ));
    switch (datas.map(data => data.champ)[0]) {
      case '아트록스':
        return (
          <img src={Aatrox} width='100px' height='100px' alt='AatroxImg'></img>
        );
      case '아칼리':
        return (
          <img src={Akali} width='100px' height='100px' alt='AkaliImg'></img>
        );
      case '아리':
        return (
          <img src={Ahri} width='100px' height='100px' alt='AhriImg'></img>
        );
      case '알리스타':
        return (
          <img
            src={Alistar}
            width='100px'
            height='100px'
            alt='AlistarImg'
          ></img>
        );
      case '아무무':
        return (
          <img src={Amumu} width='100px' height='100px' alt='AmumuImg'></img>
        );
      case '애니비아':
        return (
          <img src={Anivia} width='100px' height='100px' alt='AniviaImg'></img>
        );
      case '애니':
        return (
          <img src={Annie} width='100px' height='100px' alt='AnnieImg'></img>
        );
      case '아펠리오스':
        return (
          <img
            src={Aphelios}
            width='100px'
            height='100px'
            alt='ApheliosImg'
          ></img>
        );
      case '애쉬':
        return (
          <img src={Ashe} width='100px' height='100px' alt='AsheImg'></img>
        );
      case '아우렐리온 솔':
        return (
          <img
            src={AurelionSol}
            width='100px'
            height='100px'
            alt='AurelionSolImg'
          ></img>
        );
      case '아지르':
        return (
          <img src={Azir} width='100px' height='100px' alt='AzirImg'></img>
        );
      case '바드':
        return (
          <img src={Bard} width='100px' height='100px' alt='BardImg'></img>
        );
      case '블리츠크랭크':
        return (
          <img
            src={Blitzcrank}
            width='100px'
            height='100px'
            alt='BlitzcrankImg'
          ></img>
        );
      case '브랜드':
        return (
          <img src={Brand} width='100px' height='100px' alt='BrandImg'></img>
        );
      default:
        return (
          <img
            src={question}
            width='100px'
            height='100px'
            alt='questionImg'
          ></img>
        );
    }
  }, [datas]);

  const imageRotater = () => {
    console.log('이미지 로테 가동중');
    console.log(champBox);
    let count = 0;

    setChampionInterval(
      setInterval(() => {
        if (count > 13) {
          count = 0;
        } else {
          setDatas(prevdatas =>
            datas.map(data =>
              prevdatas.champ === datas.champ
                ? { ...data, champ: champBox[count] }
                : data
            )
          );
          count++;
        }
      }, 100)
    );
  };

  const lineLoading = () => {
    switch (datas.map(data => data.line)[0]) {
      case '탑':
        return <img src={Top} width='100px' height='100px' alt='TopImg'></img>;
      case '미드':
        return <img src={Mid} width='100px' height='100px' alt='MidImg'></img>;
      case '바텀':
        return (
          <img src={Bottom} width='100px' height='100px' alt='BottomImg'></img>
        );
      default:
        return <span>미정</span>;
    }
  };

  const lineImageLoater = useCallback(() => {
    let count = 0;
    setLineInterval(
      setInterval(() => {
        if (count > 2) {
          count = 0;
        } else {
          setDatas(prevdatas =>
            datas.map(data =>
              prevdatas.line === datas.line
                ? { ...data, line: LineBox[count] }
                : data
            )
          );
          count++;
        }
      }, 100)
    );
  }, [LineBox, datas]);

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
              {onLineButton ? 'STOP' : '라인'}
            </Button>{' '}
            {lineLoading()}
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
              {onChampionButton ? 'STOP' : '챔피언'}
            </Button>{' '}
            {championLoading()}
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
        <img src={vsImg} width='100px' height='100px' alt='vsImg'></img>
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
