import React from "react";
//import "./Box.css";



const Card = () =>{
  const cardsInfo =[
    {image:"",tittle:"", text:""},
    {image:"",tittle:"", text:""},
    {image:"",tittle:"", text:""},
  ];

  const renderCard = (card,index) =>{
  return(
      
       <div className="card">
        <Card style={{width: "18rem"}} key={index}>
          <Card.Img varient="top" src={card.image}/>
          <Card.Body>
        <Card.Title>{ card.tittle}</Card.Title>
          <Card.Text>
        { card.text}
        </Card.Text>
        </Card.Body>
        </Card>
        </div>
       
          );
};
return <div className="Card" >{cardsInfo.map(renderCard)}></div>;
};

export default Card;