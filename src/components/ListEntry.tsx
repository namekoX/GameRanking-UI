import * as React from 'react';
import { Actions } from '../containers/ListEntryContainer';
import { Button, Row, Col, Alert, Table } from "react-bootstrap";
import { ListEntryState } from '../states/ListEntryReducer';
import { useEffect } from 'react';
import Const from '../common/const';
import GetListEntryResultItem from '../interface/GetListEntryResultItem';
import { Br } from '../common/Br';
import { dateNumToStr, isEnptystr } from '../common/utils';
import { SpinnerModal } from '../common/SpinnerModal';

interface OwnProps {
  location: Location;
  match: Match;
}
interface Location {
  pathname: string;
}

interface Match {
  params: Params;
}
interface Params {
  platform: string;
}

type ListEntryProps = OwnProps & ListEntryState & Actions;

function renderTable(entrys: GetListEntryResultItem[], month: Date) {
  if (entrys == undefined) {
    return;
  }

  const rows = entrys.map((entry, index) => {
    let tds = [];
    const date = new Date(month.getFullYear(), month.getMonth() + 1, 0);
    if (isEnptystr(entry.link)){
      tds.push(<td>{entry.game_name}</td>);
    } else {
      tds.push(<td><a href={entry.link} target={"_blank"}>{entry.game_name}</a></td>);
    }
    
    tds.push(<td>{entry.av}</td>);
    tds.push(<td>{entry.mn}</td>);
    tds.push(<td>{entry.mx}</td>);
    for (let i = 1; i < date.getDate() + 1; i++) {
      tds.push(<td>{entry[dateNumToStr(i)]}</td>);
    }
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        {tds}
      </tr>
    );
  });

  return rows;
}

function renderHeader(month: Date) {
  const date = new Date(month.getFullYear(), month.getMonth() + 1, 0);
  let ths = [];
  for (let i = 1; i < date.getDate() + 1; i++) {
    ths.push(<th style={{ width: '50px' }}>{month.getMonth() + 1 + "/" + i}</th>);
  }
  return ths;
}

function dispName(platform: string) {
  let ret;
  switch (platform) {
    case "NIJIYOME":
      ret = "にじよめ";
      break;
    case "YAHOO":
      ret = "Yahoo!ゲーム";
      break;
    case "DMM":
      ret = "DMM GAMES";
      break;
    case "DMMR18":
      ret = "DMM GAMES R18";
      break;
    case "GOOGLEPLAY":
        ret = "GooglePlay";
        break;
    default:
      ret = platform;
      break;
  }
  return ret;
}

export const ListEntry: React.FC<ListEntryProps> = (props: ListEntryProps) => {
  useEffect(() => {
    props.updateState(props.match.params.platform.toUpperCase(), "platform");
    props.updateStateMenu(Const.MENU_URL + "/" + props.match.params.platform + "/", "selectedKey")
    document.title = "ブラウザゲーム人気ランキング" + props.platform;
    props.onSearch(props.match.params.platform.toUpperCase(), props.month);
  }, [props.location.pathname])

  useEffect(() => {
    props.onSearch(props.match.params.platform.toUpperCase(), props.month);
  }, [props.yearMonth])

  return (
    <div>
      <Row >
        <Col sm={12}>
          <div className={"inline"}>
            <h2>{dispName(props.platform) + "　" + props.yearMonth}</h2>
            <Button
              variant="primary"
              onClick={(e: any) => props.onPrev()}
              className={"paddingleft5"}
              disabled={props.month < Const.BASE_DATE_START}
            >
              前月
          </Button>
            <Button
              variant="primary"
              onClick={(e: any) => props.onAfter()}
              className={"paddingleft5"}
              disabled={props.month > Const.BASE_DATE_END}
            >
              次月
          </Button>
          </div>
        </Col>
      </Row>
      {props.entry.valid &&
        <div>
          <Row>
            <Col sm={12}>
              <Alert
                variant={"danger"}
              >
                {props.entry.validMsg}
              </Alert>
            </Col>
          </Row>
        </div>
      }
      <Row>
        <Col sm={12}>
          <Table striped bordered hover responsive size="sm" className="Fixed">
            <thead>
              <tr>
                <th style={{ width: '40px' }}>#</th>
                <th>ゲーム名</th>
                <th style={{ width: '80px' }}>平均順位</th>
                <th style={{ width: '80px' }}>最高順位</th>
                <th style={{ width: '80px' }}>最低順位</th>
                {renderHeader(props.month)}
              </tr>
            </thead>
            <tbody>
              {renderTable(props.entry.results, props.month)}
            </tbody>
            <Br count={1} />
          </Table>
        </Col>
      </Row>
      <SpinnerModal
        show={props.loading}
      />
    </div>
  );
};