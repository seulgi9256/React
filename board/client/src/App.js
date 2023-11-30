import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import BoardUpdateContainer from './containers/BoardUpdateContainer';
import BoardReadContainer from './containers/BoardReadContainer';
import Home from './pages/Home';
import BoardListContainer from './containers/BoardListContainer';
import BoardInsertContainer from './containers/BoardInsertContainer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/boards" element={ <BoardListContainer/> } />
        {/* <Route path="/boards/:no" params={{no:10}} element={ <BoardReadContainer/> } /> */}
        <Route path="/boards/:no" element={ <BoardReadContainer/> } />
        <Route path="/boards/insert" element={ <BoardInsertContainer/> } />
        <Route path="/boards/update/:no" element={ <BoardUpdateContainer/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
