import { useState } from "react";

let CommentForm = ({getComment}) =>{
    let [comment, setComment]= useState("")

    let getMessage = (e) =>{
        setComment(e.target.value);
    }

    return(
        <div className="comentarios">
            <textarea className="form-control"
                        placeholder="Comenta algo"
                        value={comment}
                        onChange={getMessage}
                        >

            </textarea>
            <br/>
            <button className="btn btn-primary" onClick={()=>getComment(comment)}>Comentar</button>
        </div>
    )
}

export default CommentForm;