import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import Privacy from './components/Privacy.tsx';
import Terms from './components/Terms.tsx';
import './index.css';

const path = window.location.pathname;

let Component = App;
if (path === '/privacy' || path === '/privacy/') {
  Component = Privacy;
} else if (path === '/terms' || path === '/terms/') {
  Component = Terms;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Component />
  </StrictMode>,
);
