import Button from 'devextreme-react/button';
import Drawer from 'devextreme-react/drawer';
import ScrollView from 'devextreme-react/scroll-view';
import Toolbar, { Item } from 'devextreme-react/toolbar';
import ContextMenu, { Position } from 'devextreme-react/context-menu';
import React, { useState, useCallback, useRef,useMemo } from 'react';
import { useHistory } from 'react-router';
import { Template } from 'devextreme-react/core/template';
import {
  AccountCircle as AccountCircleIcon
} from '@material-ui/icons';

import {
  AppBar,
  IconButton,
  Typography,
  Box,
  Grid,
  Hidden,
  TextField,
  CircularProgress,
  Table,
  TableCell,
  TableBody,
  TableRow,
  TableHead,
  TablePagination,
  Card,
  InputLabel,
  MenuItem,
  FormControl
} from '@material-ui/core';

import { Header, SideNavigationMenu, Footer } from '../../Components';
import './SideNavOuterToolbar.scss';
import { useScreenSize } from '../../Utils/MediaQuery';
import { useMenuPatch } from '../../Utils/Patches';

import { useAuth } from '../../Contexts/Auth';

export default function ({ title,logo, children,footerAccount }) {
  const scrollViewRef = useRef();
  const history = useHistory();
  const { isXSmall, isLarge } = useScreenSize();
  const [patchCssClass, onMenuReady] = useMenuPatch();
  const [menuStatus, setMenuStatus] = useState(
    isLarge ? MenuStatus.Opened : MenuStatus.Closed
  );

  const toggleMenu = useCallback(({ event }) => {
    setMenuStatus(
      prevMenuStatus => prevMenuStatus === MenuStatus.Closed
        ? MenuStatus.Opened
        : MenuStatus.Closed
    );
    event.stopPropagation();
  }, []);

  const temporaryOpenMenu = useCallback(() => {
    setMenuStatus(
      prevMenuStatus => prevMenuStatus === MenuStatus.Closed
        ? MenuStatus.TemporaryOpened
        : prevMenuStatus
    );
  }, []);

  const onOutsideClick = useCallback(() => {
    setMenuStatus(
      prevMenuStatus => prevMenuStatus !== MenuStatus.Closed && !isLarge
        ? MenuStatus.Closed
        : prevMenuStatus
    );
  }, [isLarge]);

  const onNavigationChanged = useCallback(({ itemData: { path }, event, node }) => {
    if (menuStatus === MenuStatus.Closed || !path || node.selected) {
      event.preventDefault();
      return;
    }

    history.push(path);
    scrollViewRef.current.instance.scrollTo(0);

    if (!isLarge || menuStatus === MenuStatus.TemporaryOpened) {
      setMenuStatus(MenuStatus.Closed);
      event.stopPropagation();
    }
  }, [history, menuStatus, isLarge]);

  const { user, signOut } = useAuth();

  // const menuItems = useMemo(() => ([
  //   {
  //     text: 'Profile',
  //     icon: 'user'
  //   },
  //   {
  //     text: 'Logout',
  //     icon: 'runner',
  //     onClick: signOut
  //   }
  // ]), [signOut]);

  return (
    <div className={'side-nav-inner-toolbar'}>
      <Drawer
        className={['drawer', patchCssClass].join(' ')}
        position={'before'}
        closeOnOutsideClick={onOutsideClick}
        openedStateMode={isLarge ? 'shrink' : 'overlap'}
        revealMode={isXSmall ? 'slide' : 'expand'}
        minSize={isXSmall ? 0 : 60}
        maxSize={250}
        shading={isLarge ? false : true}
        opened={menuStatus === MenuStatus.Closed ? false : true}
        template={'menu'}
      >
        <div className={'container'}>
          <ScrollView ref={scrollViewRef} className={'layout-body with-footer'}>
            <div className={'content'}>
              {React.Children.map(children, item => {
                return item.type !== Footer && item;
              })}
            </div>
            <div className={'content-block'}>
              {React.Children.map(children, item => {
                return item.type === Footer && item;
              })}
            </div>
          </ScrollView>
        </div>
        <Template name={'menu'}>
          <SideNavigationMenu
            compactMode={menuStatus === MenuStatus.Closed}
            selectedItemChanged={onNavigationChanged}
            openMenu={temporaryOpenMenu}
            onMenuReady={onMenuReady}
            footerAccount={
              <Grid container className={"footer-account"}>
                <Grid item md={12} className={"footer-account"}><AccountCircleIcon style={{color:"#fff",fontSize:40}}/></Grid>
                <Grid item md={12} className={"footer-account"}><Typography style={{fontSize:"2.2vh",color:"#fff"}}>{user.displayName}</Typography></Grid>
                <Grid item md={12} className={"footer-account"}><Typography style={{fontSize:"1.5vh",color:"#fff",top:-10}}>NIK : 3064</Typography></Grid>
                <Grid item md={12} className={"footer-account"}>
                {/* <ContextMenu
                  items={menuItems}
                  target={'.user-button'}
                  showEvent={'dxclick'}
                  width={210}
                  cssClass={'user-menu'}
                >
                  <Position my={'top center'} at={'bottom center'} />
                </ContextMenu> */}
                  <div onClick={signOut} style={{cursor:"pointer",backgroundColor:"#FF6A37",marginBottom:20,paddingLeft:25,paddingRight:25,paddingTop:15,color:"#fff",borderRadius:10}}>Keluar </div>
                </Grid>
              </Grid>
            }
          >
            <Toolbar id={'navigation-header'}>
              <Item
                  cssClass={'menu-logo'}
                >
                <center>
                <Button
                  stylingMode="text" 
                  width={120}
                  height={'100%'}
                  // onClick={toggleMenu}
                >
                  <img src={title} alt="img" style={{width:"100%",height:120,color:"#fff"}}/>
                  <div style={{fontSize:13,marginTop:5,textAlign:"center"}}>Food Team</div>
                </Button>
                </center>
              </Item>
            </Toolbar>
          </SideNavigationMenu>
        </Template>
      </Drawer>
    </div>
  );
}

const MenuStatus = {
  Closed: 1,
  Opened: 2,
  TemporaryOpened: 3
};
