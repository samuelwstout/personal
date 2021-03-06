import React from 'react';
import { render } from 'react-dom';
import { 
  BrowserRouter,
  Routes,
  Route,
 } from 'react-router-dom';
import './index.css';
import App from './App';
import Projects from './components/Projects.jsx';
import About from './components/About.jsx';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <Routes>
         <Route path='/' element={<App />} />
         <Route path='projects' element={<Projects />} />
         <Route path='about' element={<About />} />
         <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
    </Routes>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
