import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './ChangeModuleDefaultStyles.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./AppRouter";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <AppRouter />
      </BrowserRouter>
  </React.StrictMode>
);
