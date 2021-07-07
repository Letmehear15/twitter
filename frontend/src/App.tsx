import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, useHistory } from 'react-router';
import { authApi } from './api/authApi';
import Home from './pages/Home';
import SignIn from './pages/signIn/SignIn';
import { setUser } from './redux/ducks/user/actionCreators';
import { selectIsAuth } from './redux/ducks/user/selector';

const App: FC = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const history = useHistory();

  const checkIfAuth = async () => {
    try {
      const data = await authApi.getMe();
      history.replace('/home');
      dispatch(setUser(data))
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    checkIfAuth();
  }, [dispatch]);

  useEffect(() => {
    if (isAuth) {
      history.push('/home');
    } else {
      history.push('/signin');
    }
  }, [isAuth]);

  return (
    <div>
      <Route exact path="/signin">
        <SignIn />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
    </div>
  );
};

export default App;
