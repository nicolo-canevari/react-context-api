import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// importo il provider
import { PostProvider } from './contexts/PostContext';
// Componente che visualizzerà i post
import PostsPage from './pages/PostsPage';
//  Pagina "Home"
import Home from './pages/Home';
// Pagina "About"
import About from './pages/About';
// Pagina "Contacts"
import Contacts from './pages/Contacts';
// css
import './App.css'

const App = () => {

  return (

    // wrappa l'intera applicazione
    <PostProvider>

      <Router>

        {/* Navbar con i link di navigazione
         */}
        <nav>

          <ul>

            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/posts">Posts</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/contacts">Contacts</Link>
            </li>

          </ul>

        </nav>

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<PostsPage />} />

        </Routes>

      </Router>

    </PostProvider>

  );

};

export default App;



