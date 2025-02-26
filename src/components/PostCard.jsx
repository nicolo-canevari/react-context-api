import React from 'react';

// prendo solo la proprietà post
const PostCard = ({ post }) => {

    return (

        <div className="post-card">

            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p><strong>Categoria:</strong> {post.tags ? post.tags.join(', ') : 'Nessuna categoria'}</p>
            {/* Se disponibile, puoi anche mostrare un'immagine */}
            {post.image && <img src={post.image} alt={post.title} />}

        </div>

    );

};

export default PostCard;