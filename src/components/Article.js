import React from "react";
import Time from "./Time";

function Article({title, date="January 1, 1970", preview, time}){
    return(
        <article>
            <h3>{title}</h3>
            <small>
                {date}
                <Time time={time}/>
            </small>
            <p>{preview}</p>
        </article>
    )
}

export default Article;