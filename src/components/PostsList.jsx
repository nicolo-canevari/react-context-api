import React from 'react';
import React, { useState, useEffect } from 'react';
import PostCard from './PostCard';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PostsList = () => {

    const [posts, setPosts] = useState([]);

    // Funzione per caricare i post dal server
    useEffect(() => {

        axios.get('http://localhost:3000/posts')
            .then((response) => {

                console.log(response.data);

                // Imposta i post nello stato
                setPosts(response.data);
            })
            .catch((error) => {
                console.error('Errore nel caricamento dei post:', error);

            });

    }, []);

    // Funzione per gestire l'eliminazione di un post
    const handleDelete = (id) => {

        if (!Array.isArray(posts)) {

            return <p>Caricamento articoli...</p>;

        }

        axios.delete(`http://localhost:3000/posts/${id}`)

            .then(() => {

                // Rimuovo il post dalla lista
                const updatedPosts = posts.filter(post => post.id !== id);
                // Aggiorno lo stato con la lista aggiornata
                setPosts(updatedPosts);

            })

            .catch((error) => {
                console.error('Errore durante l\'eliminazione del post:', error);

            });

    };

    return (

        <ul className='post_list'>

            {/* Verifico se l'array dei post è valido */}
            {Array.isArray(posts) && posts.length > 0 ? (

                posts.map(post => (

                    <PostCard
                        key={post.id}
                        // Passo il post come prop
                        post={post}
                        handleDelete={handleDelete}
                    />

                ))

            ) : (

                <p>Non ci sono post disponibili.</p>

            )}

        </ul>

    );

};

export default PostsList;
