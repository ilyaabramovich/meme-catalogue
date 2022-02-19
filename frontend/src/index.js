import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Memes from "./routes/memes";
import Meme from "./routes/meme";
import NewMeme from './routes/new-meme';
import NewMemeTemplate from './routes/new-meme-template';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route path='memes' element={<Memes/>}/>
          <Route path='memes/:memeId' element={<Meme/>}/>
          <Route path='memes/new' element={<NewMeme/>}/>
          <Route path='templates/new' element={<NewMemeTemplate/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
