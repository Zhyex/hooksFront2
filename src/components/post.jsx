
import { useState } from "react";
import imgDessert from "./../assets/budino_cioccolato_cocco2.png";
import cancelIcon from "./../assets/xIco.svg";
import CommentForm from "./../components/commentform";
import ListComments from "./listcomments";



let Post = () => {

  // const [variable, funcion] = useState()

  //Estados para likes
  let [number,setLike] = useState(0);  
  let addLike = () =>{
    setLike(number+1);
  }
  //Estados para comments del post
  let [btnToggle, setBtnState] = useState(false)
  let toggleComments = () =>{
    setBtnState(!btnToggle)
  }
  //Use Effects para los comentarios
  let listaComentarios = [
    {id:1, text:"asdasdas"},
    {id:2, text:"pasa receta"}
  ]


  return(
      <div className="card" style={{"width": "18rem"}}>
        <div className="card-body">
          <div className="d-flex justify-content-around">
            <img src={imgDessert} className="card-img-top" alt="..." style={{"width":"40px", "borderRadius":"50%"}}/>
            <h5 className="card-title">Flan de chocolate</h5>
            <button style={{"border-style":"none","background-color":"white"}}><img src={cancelIcon} className="card-img-top" alt="..." /></button>
          </div>
          <p className="card-text">Descubrí una receta única, con un sabor delicioso!</p>
          <img src={imgDessert} className="card-img-top" alt="..."/>
        </div>
        <ul class="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-around">
            <span>👍🏻❤️😂{number}</span> <span>2k☁️</span> <span> 1k🔁</span> 
          </li>
          <li className="list-group-item d-flex justify-content-around">
            <button className="btn btn-light" onClick={addLike}>👍🏻Like</button>
            <button className="btn btn-light" onClick={toggleComments}>☁️</button>
            <button className="btn btn-light">🔁 Share</button>
          </li>
        </ul>
        <div className="card-footer">
          {/* if ternario para el uso del useState con booleano */}
          { btnToggle && <CommentForm/> }
        </div>
        <ListComments arrayComentarios = {listaComentarios}/>
      </div>
  );
};

export default Post;