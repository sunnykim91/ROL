import React, { useState } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Menu mode='horizontal'>
      <Menu.Item key='oneToOne'>
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
