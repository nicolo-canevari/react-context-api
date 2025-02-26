import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Creo il contesto per i post
const PostContext = createContext();

// Provider che gestisce la lista dei post
export const PostProvider = ({ children }) => {

    const [posts, setPosts] = useState([]);

    // Funzione per recuperare i post
    const fetchPosts = async () => {

        try {

            const response = await axios.get('http://localhost:3000/posts');
            setPosts(response.data);

        } catch (error) {

            console.error("Errore durante il recupero dei post", error);

        }

    };

    // recupero i post all'inizializzazione dell'app
    useEffect(() => {
        fetchPosts();
    }, []);

    return (

        <PostContext.Provider value={{ posts, fetchPosts }}>
            {children}
        </PostContext.Provider>

    );

};

// esporto tutto per poterlo utilizzare negli altri componenti
export default PostContext;