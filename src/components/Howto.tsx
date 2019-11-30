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
            <p>→追加してほしいサイトが有れば、<a target="blank" href="http://slavesystem.net/blog/2019/11/17/%e3%80%8crss%e3%82%ab%e3%82%b9%e3%82%bf%e3%83%9e%e3%82%a4%e3%82%ba%e3%82%b5%e3%83%bc%e3%83%93%e3%82%b9%e3%80%8d%e5%95%8f%e3%81%84%e5%90%88%e3%82%8f%e3%81%9b%e7%94%a8%e8%a8%98%e4%ba%8b/">管理人のブログ</a>のコメント欄からリクエストをください！！</p>  
          </Container>
        </Jumbotron>
      </div >
    );
  }
};
