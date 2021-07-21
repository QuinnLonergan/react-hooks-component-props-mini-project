import React from "react";

function Time({ time }) {
    let emoji
    if (time < 30) {emoji = "☕️"}
    else {emoji = "🍱"}

    function math(time) {
        if (time < 30) {
            return (Math.ceil(time/5) *5)/5;
        } else {
            return (Math.ceil(time/10)*10)/10
        }
    }
    
    let emojiNumber = emoji.repeat(math(time))

    return (
            <div>
                Min Read: {emojiNumber}{time} 
            </div>
        )

}

export default Time