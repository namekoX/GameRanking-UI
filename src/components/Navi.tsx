import * as React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Actions } from '../containers/NaviContainer';
import favicon from '../img/favicon.png';
import Const from '../common/const';

type Naviprops =  Actions;

export const Navi: React.FC<Naviprops> = (props: Naviprops) => {
  return (
    <div>
      <Navbar bg="light" expand="lg" className="HeadNavi">
        <Navbar.Brand href={Const.SITE_ROOT + "/"}><h1><img src={favicon} style={{ width: '30px', border: "0px" }} /> ブラウザゲーム人気ランキング</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" onSelect={(selectedKey: string) => props.onSelect(`${selectedKey}`)} >
            <Nav.Link eventKey= "/" >トップ</Nav.Link>
            <Nav.Link target="blank" href="https://fanzagames.slavesystems.com/?p=1813">問い合わせ</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};