function PokeCard({ mon }) {
  return (
    <div key={mon.id}>
      <img src={mon.img_url} alt={mon.korean_name} />
      <p>No. {mon.id}</p>
      <p>{mon.korean_name}</p>
    </div>
  );
}


export default PokeCard;
