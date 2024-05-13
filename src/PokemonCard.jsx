/* eslint-disable react/prop-types */
import "./Card.css";

function PokemonCard(props) {
  return (
    <div className="card" onClick={() => alert(props.name + "xin chao!")}>
      <div className="imgCtn">
        <img src={props.image} alt="image" width={150} height={150} />
      </div>

      <div style={{ paddingLeft: 15 }}>
        <p className="idText">{props.id}</p>

        <h2 className="name">{props.name}</h2>

        <div className="btnCtn">
          {props.types.map((type, index) => (
            <div key={type + index} className={`type ${type.toLowerCase()}`}>
              {type}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
