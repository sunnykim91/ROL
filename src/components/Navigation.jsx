import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Menu mode='horizontal'>
      <Link style={{ marginLeft: '40px' }} to='/'>
        Random Of Legends
      </Link>
      <Menu.Item style={{ marginLeft: '40px' }} key='oneToOne'>
        <Link to='/pvp'>1:1</Link>
      </Menu.Item>
      <Menu.Item key='soloRank'>
        <Link to='/solo'>솔랭</Link>
      </Menu.Item>
      <Menu.Item key='duo'>
        <Link to='/duo'>듀오</Link>
      </Menu.Item>
      <Menu.Item key='fiveQueue'>
        <Link to='/five'>5인</Link>
      </Menu.Item>
      <Menu.Item key='allRandom'>
        <Link to='/all'>올랜덤</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Navigation;
