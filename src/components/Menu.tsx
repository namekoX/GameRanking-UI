import * as React from 'react';
import { Row, Col, Card, Nav,Tab } from 'react-bootstrap';
import { MenuState } from '../states/MenuReducer'
import { Actions } from '../containers/NaviContainer';
import ListEntryContainer from '../containers/ListEntryContainer';
import { Switch, Route } from 'react-router-dom';
import Const from '../common/const';
import { Howto } from './Howto';

interface OwnProps {
  location: Location;
}
interface Location {
  pathname: string;
}

type Menuprops = OwnProps & MenuState & Actions;

export const Menu: React.FC<Menuprops> = (props: Menuprops) => {
  return (
    <div className="padding10">

      <Tab.Container id="left-tabs" activeKey={props.selectedKey}>
        <Row>
          <Col sm={3}>
            <Card border="dark" style={{ width: '90%' }}>
              <Card.Header className="cardHead">ブラウザゲーム</Card.Header>
              <Card.Body>
                <Nav variant="pills" className="flex-column Menu" onSelect={(selectedKey: string) => props.onSelect(`${selectedKey}`)} >
                  <Nav.Item>
                    <Nav.Link eventKey={Const.MENU_DMM_URL} className="MenuItem">DMM GAMES</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey={Const.MENU_DMMR18_URL} className="MenuItem">DMM GAMES R18</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey={Const.MENU_NIJIYOME_URL} className="MenuItem">にじよめ</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey={Const.MENU_YAHOO_URL} className="MenuItem">Yahoo!ゲーム</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Body>
            </Card>
            <Card border="dark" style={{ width: '90%' }}>
              <Card.Header className="cardHead">スマホゲーム</Card.Header>
              <Card.Body>
                <Nav variant="pills" className="flex-column Menu" onSelect={(selectedKey: string) => props.onSelect(`${selectedKey}`)} >
                  <Nav.Item>
                    <Nav.Link eventKey={Const.MENU_GOOGLE_PLAY_URL} className="MenuItem">GooglePlay</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={9} className={"longwidth"}>
            <Switch>
            <Route path={Const.MENU_URL}  component={ListEntryContainer} />
              <Route path={Const.SITE_ROOT + '/menu/:platform'}  component={ListEntryContainer} />
              <Route component={Howto} />
            </Switch>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};