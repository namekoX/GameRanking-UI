import { Route, Switch } from "react-router-dom";
import { NotFound } from './components/NotFound';
import NaviContainer from './containers/NaviContainer';
import MenuContainer from './containers/MenuContainer';
import ReactGA from 'react-ga';
import Const from './common/const';
import React from "react";

interface OwnProps {
  location?: Location;
}
interface Location {
  pathname: string;
}

type AppProps = OwnProps;

export const App: React.FC<AppProps> = (props: AppProps) => {
  React.useEffect(() => {
    if(props.location != undefined){
      ReactGA.set({ page: Const.SITE_ROOT + props.location.pathname });
      ReactGA.pageview( Const.SITE_ROOT + props.location.pathname);
    }
  }, [])
  return (
    <div>
      <NaviContainer />
      <React.Fragment>
        <div className = "bkimg">
          <Switch>
            <Route exact path={Const.SITE_ROOT + '/'} component={MenuContainer} />
            <Route path={Const.SITE_ROOT + Const.MENU_URL}  component={MenuContainer} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </React.Fragment>
    </div>
  );
}
