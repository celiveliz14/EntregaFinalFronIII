import React from "react";
import { useEffect } from "react";
import {Link} from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";



const Card = ({ card }) => {

  
  const {theme,fav,setFav} = useContextGlobal()

  useEffect(()=>{
    localStorage.setItem("favs", JSON.stringify(fav));
  },[fav])

  const addFav = (info)=>{
    if(fav.some(favId => favId.id === info.id)){
      alert("El profesional ya se encuentra dentro de los favoritos");
    }
    else{
      setFav([...fav,info])
      alert("Se agrego el profesional a favorito correctamente");
    }
  }

  return (
    <div className={theme === 'dark' ? 'card dark':'card'}>
      <Link to={`/dentist/${card.id}`}>
        <img src='/images/doctor.jpg' alt="Doctor" style={{width: 200}}></img>
        <p>{card.name}</p>
        <p>{card.username}</p>
      </Link>
        <button onClick={()=>addFav(card)} className="favButton">⭐</button>
    </div>
  );
};

export default Card;
