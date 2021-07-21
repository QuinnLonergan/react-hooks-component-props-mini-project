import React from "react";
import Article from "./Article"

function ArticleList({posts}){
    console.log(posts)
    const articles = posts.map((post) => {
        return (
        <Article 
            title = {post.title}
            date = {post.date}
            preview = {post.preview}
            time = {post.minutes}
            key = {post.id} 
        />
        )
    })
    return(
        <main>
            {articles}
        </main>
    )
}

export default ArticleList;