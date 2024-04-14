import React from 'react';
import UserInterface from './layouts/userInterface/Index';
import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from './layouts/admin/Index';



function App() {

  const location = useLocation()

  return (
    <>
    <switch>
      {
        location.pathname.includes("/admin") ? (
          <Layout/>
        ) : (
          <UserInterface/>
        )
      }
    </switch>
    </>
  );
}

export default App;
