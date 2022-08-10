import "../src/css/style.css"

const Cards = (props) =>{

    return(
        <>

        <div className="card" >
        
        <img src={props.img}/> 
        <h2>{props.title}</h2>   
        <h4>{props.profile}</h4>
        <p>{props.work}</p>   
        </div>
        </>
    )
};

export default Cards;