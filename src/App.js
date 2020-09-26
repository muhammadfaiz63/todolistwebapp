import 'devextreme/dist/css/dx.common.css';
import './Themes/Generated/theme.base.scss';
import './Themes/Generated/theme.additional.scss';
import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";

import Themes from "./Themes/Mui";

import './Utils/dx-styles.scss';
import LoadPanel from 'devextreme-react/load-panel';
import { NavigationProvider } from './Contexts/Navigation';
import { AuthProvider, useAuth } from './Contexts/Auth';
import { useScreenSizeClass } from './Utils/MediaQuery';
import Content from './Content';
import NotAuthenticatedContent from './NotAuthenticatedContent';
import MultiProvider from "./Config/MultiProvider"


function App() {
  const { user, loading } = useAuth();

  if (loading) {
    return <LoadPanel visible={true} />;
  }

  if (user) {
    return <Content />;
  }

  return <NotAuthenticatedContent />;

}

export default function () {
  const screenSizeClass = useScreenSizeClass();

  return (
    <Router>
      <MultiProvider
        providers={[
          <NavigationProvider/>,
          <AuthProvider/>
        ]}>
        <div className={`app ${screenSizeClass}`}>
        <ThemeProvider theme={Themes.default}>
        <CssBaseline />
        <App />
        </ThemeProvider>
        </div>
      </MultiProvider>
    </Router>
  );
}
