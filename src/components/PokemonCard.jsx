function PokeCard(props) {
  return (

    <div key={props.mon.id}>
      <img src={props.mon.img_url} alt="" />
      <p>No. {props.mon.id}</p>
      <p>{props.mon.korean_name}</p>
      <button onClick={AddPokemon}>내 꼬</button>
    </div>
  );
}

const PokemonCard = () => {
  return (
    <>
      <p></p>
    </>
  );
};

export default PokeCard;
