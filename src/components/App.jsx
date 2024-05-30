import React, { useEffect} from "react";
import style from "./app.module.css";

import { useSelector, useDispatch } from 'react-redux';
import { getIsLogged} from '../redux/selectors'

import { refreshUser } from "../redux/operations";

import {Route, Routes, Navigate} from 'react-router-dom';
import Contacts from './pages/Contacts';
import Login from './pages/Login';
import Register from './pages/Register';

 


const App = () => {
	const dispatch=useDispatch();
  const isLogged=useSelector(getIsLogged);
  

  useEffect(() => {
   dispatch(refreshUser());
  }, [dispatch]);

    return (
      <div className={style.container}>
         <section>
          <Routes>
            <Route
              exact
              path="/"
              element={
                isLogged ? <Contacts /> : <Navigate replace to={'login'} />
              }
            />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Routes>
        </section>
       
      </div>
    );
  }


export default App;