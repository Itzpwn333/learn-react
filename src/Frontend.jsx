import React from "react"
import CardsData from "./CardsData"
import Cards from "./Cards"

const Frontend = () =>{
    return(
        <Cards key={CardsData[1].id}
        img={CardsData[1].img}
        title={CardsData[1].title}
        profile={CardsData[1].profile}
        work={CardsData[1].work} />
    );


}



export default Frontend;

