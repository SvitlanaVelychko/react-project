import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { GlobalStyle } from "./GlobalStyle";
import Layout from './Layout';
import Loader from './Loader';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { useAuth } from 'hooks';
import { fetchCurrentUser } from 'redux/auth/authOperations';

const MainPage = lazy(() => import("../pages/MainPage"));
const RegistrationPage = lazy(() => import("../pages/RegistrationPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const DiaryPage = lazy(() => import("../pages/DiaryPage"));
const CalculatorPage = lazy(() => import("../pages/CalculatorPage"));

export const App = () => { 
  const dispatch = useDispatch();
  const { isFetchingCurrentUser } = useAuth();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      {isFetchingCurrentUser ? <Loader /> : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={
              <PublicRoute>
                <MainPage />
              </PublicRoute>
            }
            />
            <Route path="/register" element={
              <PublicRoute restricted>
                <RegistrationPage />
              </PublicRoute>
            }
            />
            <Route path="/login" element={
              <PublicRoute redirectTo='/diary' restricted>
                <LoginPage />
              </PublicRoute>
            }
            />
            <Route path="/calculator" element={
              <PrivateRoute>
                <CalculatorPage />
              </PrivateRoute>
            }
            />
            <Route path="/diary" element={
              <PrivateRoute>
                <DiaryPage />
              </PrivateRoute>
            }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      )}
    </>
  );
};