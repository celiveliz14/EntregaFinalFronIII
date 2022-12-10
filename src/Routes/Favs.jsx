import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";


const Favs = () => {

  const data = localStorage.getItem('favs');
  const dataParsed = JSON.parse(data);

  const {theme} = useContextGlobal()

  

  return (
    <article className={theme === 'dark' ? 'principal dark':'principal'}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {dataParsed.map((fav) => <Card card={fav}  key={fav.id}/>)}
      </div>
    </article>
  );
};

export default Favs;

