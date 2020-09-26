import React, { useState, useRef, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Form, {
  Item,
  Label,
  ButtonItem,
  ButtonOptions,
  RequiredRule,
  EmailRule
} from 'devextreme-react/form';
import LoadIndicator from 'devextreme-react/load-indicator';
import notify from 'devextreme/ui/notify';
import { useAuth } from '../../Contexts/Auth';

import './LoginForm.scss';

export default function () {
  const history = useHistory();
  const { signIn } = useAuth();
  const [loading, setLoading] = useState(false);
  const formData = useRef({});

  const onSubmit = useCallback(async (e) => {
    e.preventDefault();
    const { userid, password } = formData.current;
    setLoading(true);

    const result = await signIn(userid, password);
    if (!result.isOk) {
      setLoading(false);
      // notify(result.message, 'error', 2000);
    }
  }, [signIn]);

  // const onCreateAccountClick = useCallback(() => {
  //   history.push('/create-account');
  // }, [history]);

  return (
    <form className={'login-form'} onSubmit={onSubmit}>
      <Form formData={formData.current} disabled={loading}>
        <Item
          dataField={'userid'}
          editorType={'dxTextBox'}
          editorOptions={useridEditorOptions}
        >
          <RequiredRule message="Userid is required" />
          <Label visible={false} />
        </Item>
        <Item
          dataField={'password'}
          editorType={'dxTextBox'}
          editorOptions={passwordEditorOptions}
        >
          <RequiredRule message="Password is required" />
          <Label visible={false} />
        </Item>
        <Item
          dataField={'rememberMe'}
          editorType={'dxCheckBox'}
          editorOptions={rememberMeEditorOptions}
        >
          <Label visible={false} />
        </Item>
        <ButtonItem>
          <ButtonOptions
            width={'100%'}
            type={'default'}
            stylingMode={"outlined"}
            useSubmitBehavior={true}
            
          >
            <span className="dx-button-text">
              {
                loading
                  ? <LoadIndicator width={'24px'} height={'24px'} visible={true} />
                  : 'Masuk'
              }
            </span>
          </ButtonOptions>
        </ButtonItem>
        <Item>
          <div className='link'>
            <Link to={'/reset-password'}>
              Lupa Password?
            </Link>
          </div>
        </Item>
        {/* <ButtonItem>
          <ButtonOptions
            text={'Buat akun baru'}
            width={'100%'}
            onClick={onCreateAccountClick}
          />
        </ButtonItem> */}
      </Form>
    </form>
  );
}

const useridEditorOptions = { stylingMode: 'filled', placeholder: 'Userid', mode: 'userid' };
const passwordEditorOptions = { stylingMode: 'filled', placeholder: 'Password', mode: 'password' };
const rememberMeEditorOptions = { text: 'Remember me', elementAttr: { class: 'form-text' } };
