import React from 'react'
import { ContextProvider } from './components/ContextApi/Context';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import AddImage from './components/AddImage/AddImage';

const App = () => {
  return (
    <BrowserRouter>
    <ContextProvider>
      <header>
        <Header/>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Content/>} exact/>
          <Route path="/addImage" element={<AddImage/>} exact />
          <Route path='*' element={<h1 style={{color:'red',textAlign:"center"}} > PAGE NOT FOUND !!! </h1>} />
        </Routes>
      </main>
    </ContextProvider>
    </BrowserRouter>
  )
}

export default App;