function Cakes(props){
    console.log(props.data.name)
    return(
        <div class="card">
            <img class="card-img-top" src={props.data.imgSrc} alt="Card image cap" style={{height:"250px",objectFit: "cover"}} />
            <div class="card-body">
                <h5>{props.data.name}</h5>
                <p>{props.data.price}</p>
            </div>
        </div>
    )
}

export default Cakes