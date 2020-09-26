import React from 'react';
import Toolbar, { Item } from 'devextreme-react/toolbar';
import Button from 'devextreme-react/button';
import UserPanel from '../UserPanel/UserPanel';
import './Header.scss';
import { Template } from 'devextreme-react/core/template';
import useWindowDimensions from '../../Contexts/Window';

export default ({ menuToggleEnabled, title, toggleMenu, userMenuItems }) => {
  const { height, width } = useWindowDimensions();

  return(
    <header className={'header-component'}>
    <Toolbar className={'header-toolbar'}>
      <Item
        visible={menuToggleEnabled}
        location={'before'}
        widget={'dxButton'}
        cssClass={'menu-button'}
      >
        <Button icon="menu" stylingMode="text" onClick={toggleMenu} />
      </Item>
      <Item
        location={'before'}
        cssClass={'header-logo'}
        visible={!!title}
      >
        <Button
          stylingMode="text" 
          width={120}
          height={'100%'}
        >
          <img src={title} alt="img" style={{width:"100%",height:50}}/>
        </Button>
      </Item>
      <Item
        location={'after'}
        locateInMenu={'auto'}
        menuItemTemplate={'userPanelTemplate'}
      >
        <Button
          className={'user-button authorization'}
          width={210}
          height={'100%'}
          stylingMode={'text'}
        >
          <UserPanel menuMode={'context'} />
        </Button>
      </Item>
      <Template name={'userPanelTemplate'}>
        <UserPanel menuMode={'list'} />
      </Template>
    </Toolbar>
  </header>
  )
}


