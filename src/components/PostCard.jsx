import React from 'react';
import { Link } from 'react-router-dom';

// prendo solo la proprietà post e handleDelete
const PostCard = ({ post, handleDelete }) => {

    console.log(post);

    return (

        <li key={post.id}>

            <h3>{post.title}</h3>
            <p>{post.content}</p>

            {/* Verifico che l'immagine esista prima di renderizzarla */}
            {post.image && <img src={post.image} alt={post.title} />}
            <p>{post.tags ? post.tags.join(', ') : 'Nessun tag disponibile'}</p>
            <button onClick={() => handleDelete(post.id)}>Elimina</button>

            {/* Aggiungi il link ai dettagli del post */}
            <Link to={`/posts/${post.id}`}>Dettagli</Link>

        </li>

    );

};

export default PostCard;