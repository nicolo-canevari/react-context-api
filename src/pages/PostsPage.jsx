import React, { useContext } from 'react';
import PostContext from '../contexts/PostContext';

const PostsPage = () => {

    // accedo ai dati dei post
    const { posts } = useContext(PostContext);

    if (posts.length === 0) {

        return <div>Caricamento dei post...</div>;

    }

    return (

        <div>

            <h2>Lista degli Articoli</h2>

            <ul>

                {posts.map(post => (

                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                    </li>

                ))}

            </ul>

        </div>

    );

};

export default PostsPage;