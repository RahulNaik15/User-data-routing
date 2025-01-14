import React from 'react';
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserList></UserList>}></Route>
          <Route path="user/:id" element={<UserDetail></UserDetail>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
