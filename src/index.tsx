import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { registerLicense } from '@syncfusion/ej2-base';

//import "/node_modules/@syncfusion/ej2/tailwind-dark.css";

//registerLicense('Ngo9BigBOggjHTQxAR8/V1NAaF5cWWJCfEx3QXxbf1x0ZFRGal9STnVXUiweQnxTdEFjWH5bcXRWRWNVUEZzVw==');

registerLicense('ORg4AjUWIQA/Gnt2UVhhQlVFfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hTX5Sd0NiWntZcXBUQWZf');

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
