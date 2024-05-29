import { useEffect, useState } from "react";

import "./style.css";
import { fetchAPI } from "../../lib/fetchAPI";

function PokemonCard(props) {
  const { url, onSelectPokemon } = props;

  const [pokemon, setPokemon] = useState({
    name: "",
    types: [],
    image: "",
  });
  const { name, types, image } = pokemon;

  useEffect(() => {
    (async () => {
      const res = await fetchAPI({
        url,
      });
      const {
        name,
        types,
        sprites: { front_default },
      } = res;

      setPokemon({
        name,
        types,
        image: front_default,
      });
    })();
  }, [url]);

  return (
    <div
      className="pokemonCard"
      // onClick={() =>
      //   onSelectPokemon({
      //     name,
      //     image,
      //     types: types.map(({ type: { name } }) => name),
      //     url,
      //   })
      // }
    >
      <div className="imgCtn">
        <img src={image} alt="image" width={250} height={250} />
      </div>

      <div style={{ paddingLeft: 15 }}>
        {/* <p className="idText">{id}</p> */}

        <h2 className="name">{name}</h2>

        <div className="btnCtn">
          {types.map(({ type: { name } }, index) => (
            <div key={name + index} className={`type ${name}`}>
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
