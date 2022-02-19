const Card= ({judul, isi}) => {
    return (
       <div className="mt-5 bg-primary text-white fs-100">
         <h5 className="text-center">{judul}</h5>
         <p className="p-3">{isi}</p>
       </div>
    )
}

export default Card;