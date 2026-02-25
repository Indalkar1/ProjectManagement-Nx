import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';
import { ProjectContextProvider } from './app/context/ProjectContextProvider';
import "./app/app.css";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ProjectContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProjectContextProvider>
);
