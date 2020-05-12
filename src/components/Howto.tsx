import * as React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Table } from 'react-bootstrap';
import Const from '../common/const';

interface OwnProps {
  location?: Location;
}
interface Location {
  pathname: string;
}

export class Howto extends React.Component {
  constructor(props: any) {
    super(props);
    document.title = "サイト説明"
  }
  render() {
    return (
      <div className="padding10">
        <Jumbotron fluid>
          <Container>
            <h2>About This Site</h2>
            <br />
            <h4>Q.このサイトは？</h4>
            <p>→管理人がゲームのランキングを記録しているサイトです。人気ゲームを探す時に参考になれば幸いです。</p>
            <br />
            <h4>Q.2019年10月以前のデータがないけど？</h4>
            <p>→サイトを始めたのが2019年11月だからです…</p>
            <br />
            <h4>Q.このゲームサイトのゲームランキングがないけど？</h4>
            <p>→追加してほしいサイトが有れば、<a target="blank" href="https://fanzagames.slavesystems.com/?p=1813">管理人のブログ</a>のコメント欄からリクエストをください！！</p>  
          </Container>
        </Jumbotron>
      </div >
    );
  }
};
