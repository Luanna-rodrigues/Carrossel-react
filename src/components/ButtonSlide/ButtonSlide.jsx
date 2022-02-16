import "./ButtonSlide.css"

const ButtonSlide = ({disabled, onClick, alt}) => {
    return (
      <button
        disabled={disabled}
        onClick={onClick}
        className="button"
      >
        <img src="static/images/setas.png" alt={alt}  className="botao"></img>
      </button>
    );
  };
  
  export default ButtonSlide;