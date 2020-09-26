import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import appInfo from './AppInfo';
import routes from './AppRoutes';
import { SideNavOuterToolbar as SideNavBarLayout } from './Layouts';
import { Footer } from './Components';
import Images from "./Themes/Images"

export default function() {
  return (
    <SideNavBarLayout title={Images.logo}>
      <Switch>
        {routes.map(({ path, component }) => (
          <Route
            exact
            key={path}
            path={path}
            component={component}
          />
        ))}
        <Redirect to={'/home'} />
      </Switch>
      <Footer>
        <div style={{paddingLeft:40,paddingRight:40,paddingBottom:40}}>
          Copyright {appInfo.title} © {new Date().getFullYear()} Inc.
        </div>
      </Footer>
    </SideNavBarLayout>
  );
}
