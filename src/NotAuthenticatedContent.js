import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoadPanel from 'devextreme-react/load-panel';
import { SingleCard } from './Layouts';

import { LoginForm, ResetPasswordForm, ChangePasswordForm, CreateAccountForm } from './Components';

export default function () {
  return (
    !localStorage.token ?
    <Switch>
      <Route exact path='/login' >
        <SingleCard title="Masuk">
          <LoginForm />
        </SingleCard>
      </Route>
      <Route exact path='/create-account' >
        <SingleCard title="Daftar">
          <CreateAccountForm />
        </SingleCard>
      </Route>
      <Route exact path='/reset-password' >
        <SingleCard
          title="Reset Password"
          description="Please enter the email address that you used to register, and we will send you a link to reset your password via Email."
        >
          <ResetPasswordForm />
        </SingleCard>
      </Route>
      <Route exact path='/change-password/:recoveryCode' >
        <SingleCard title="Change Password">
          <ChangePasswordForm />
        </SingleCard>
      </Route>
      <Redirect to={'/login'} />
    </Switch> : <LoadPanel visible={true}/>
    
  );
}
