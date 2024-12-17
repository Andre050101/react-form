import React from "react";

const ArticleList = ({ articles, onRemoveArticle }) => {
    if (articles.length === 0) {
        return <p>No articles yet</p>;
    }

    return (
        <ul>
            {articles.map((article) => (
                <li key={article.id}>
                    <div>
                        <h3>{article.title}</h3>
                        <p>Author: {article.author}</p>
                        <p>Status: {article.status}</p>
                    </div>
                    <button onClick={() => onRemoveArticle(article.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default ArticleList;