import "./Card.css";

function PokemonCard(props) {
  const { pokemon, onSelectPokemon } = props;
  const { id, image, name, types } = pokemon;

  return (
    <>
      <div className="pokemonCard" onClick={onSelectPokemon}>
        <div className="imgCtn">
          <img src={image} alt="image" width={250} height={250} />
        </div>

        <div style={{ paddingLeft: 15 }}>
          <p className="idText">{id}</p>

          <h2 className="name">{name}</h2>

          <div className="btnCtn">
            {types.map((type, index) => (
              <div key={type + index} className={`type ${type}`}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default PokemonCard;
