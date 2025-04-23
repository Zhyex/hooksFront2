
import { useState,useEffect } from "react";
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
  //obtener datos de componentes hijos
  let [texto, setTextComment] = useState("")

  let getComment = (comment)=>{
    setTextComment(comment)
  }
  //Use Effects para los comentarios
  let listaComentarios = [
    {id:1, text:"Que rico se ve!"},
    {id:2, text:"pasa receta"}
  ]
  let [listData,setListData] = useState(listaComentarios)
  //useEffect evita que se envíen tantas actualizaciones en simultáneo 
  useEffect(()=>{
    if(texto){
      setListData([
        ...listData,
        { id : listData.length+1 , text : texto}
      ])
    }
  },[texto])


  console.log(listData)
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
            <span>{number}👍🏻❤️😂</span> <span>{listData.length}☁️</span> <span> 1k🔁</span> 
          </li>
          <li className="list-group-item d-flex justify-content-around">
            <button className="btn btn-light" onClick={addLike}>👍🏻Like</button>
            <button className="btn btn-light" onClick={toggleComments}>☁️</button>
            <button className="btn btn-light">🔁 Share</button>
          </li>
        </ul>
        <div className="card-footer">
          {/* if ternario para el uso del useState con booleano */}
          {/* se pasa en el props también como propiedad */}
          { btnToggle && <CommentForm  getComment={getComment} /> }
        </div>
        <ListComments arrayComentarios = {listData}/>
      </div>
  );
};

export default Post;