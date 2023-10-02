import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import EditPost from './EditPost';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import {Route, Routes } from 'react-router-dom';
import { DataProvider } from './Context/DataContext';


function App() {
  return (
    <div className="App">
      
        <Header title =  "React-Js Blog" />
        <DataProvider>
          <Nav />
          <Routes>
            <Route path ="/" element={<Home />} />
            <Route path ="/post" element={<NewPost/>} />
            <Route path ="/post/:id" element={<PostPage />} /> 
            <Route path ="/about" element={<About />} />
            <Route path ="*" element={<Missing />} />
            <Route path = '/edit/:id' element ={<EditPost/>} />
          </Routes>
        </DataProvider>
        <Footer /> 
      
    </div>
  );
}

export default App;
