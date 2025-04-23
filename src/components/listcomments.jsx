let ListComments = ({arrayComentarios}) =>{
    return(
        <ul className="list-group list-group-flush">
            {
                arrayComentarios.map((arrayItem)=>(
                    <li key={arrayItem.id} className="list-group-item">{arrayItem.text}</li>
                ))
            }
        </ul>
    )
}

export default ListComments;