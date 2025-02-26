import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// importo il provider
import { PostProvider } from './contexts/PostContext';
// Componente che visualizzerà i post
import PostsPage from './pages/PostsPage';
//  pagina home
import Home from './pages/Home';
// css
import './App.css'

const App = () => {

  return (

    // wrappa l'intera applicazione
    <PostProvider>

      <Router>

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<PostsPage />} />

        </Routes>

      </Router>

    </PostProvider>

  );

};

export default App;



