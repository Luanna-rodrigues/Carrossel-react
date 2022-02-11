const CardSlide = ({ item }) => {
  const { id, nome, profissao, descricao, hobbies, image, active } = item;
  return (
    <div className={`item ${active ? 'active' : ''}`} key={id}>
      <div className="image">
        <img src={image} alt={nome} />
      </div>
      <div className="info">
        <span className="nome">{nome}</span>
        <span className="profissao">{profissao}</span>
        <span className="descricao">{descricao}</span>
        {hobbies && (
          <article>
            {hobbies.split(",").map((hobbie) => (
              <span key={hobbie} className="hobbies">
                {hobbie}
              </span>
            ))}
          </article>
        )}
      </div>
      
    </div>
  );
};

export default CardSlide;
