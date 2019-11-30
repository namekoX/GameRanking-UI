import { connect } from 'react-redux';
import { AppState } from '../store';
import { push } from 'connected-react-router';
import { Navi } from '../components/Navi'
import Const from '../common/const'

export interface Actions {
  onSelect: (url: string) => void,
}

function mapDispatchToProps(dispatch: any) {
  return {
    onSelect: (url: string) => {
      if (url.indexOf("http") == -1){
        dispatch(push(Const.SITE_ROOT + url));
      }
    }
  };
}

function mapStateToProps(appState: AppState) {
  return Object.assign({}, appState.MenuState);
}

export default connect(mapStateToProps, mapDispatchToProps)(Navi);