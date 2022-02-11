import { useEffect, useState, useRef } from "react";
import CardSlide from "./components/CardSlide";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);
  const carrossel = useRef(null);

  useEffect(() => {
    fetch("/perfil.json")
      .then((response) => response.json())
      .then((result) =>
        result.map((item, index) => ({ ...item, active: index <= 0 }))
      )
      .then(setData);
  }, []);

  const handleNewRightClick = (position) => {
    const lastIndex = data.findIndex(({ active }) => active);
    const result = data.map((item, index) => {
      return {
        ...item,
        active: index === (position > 0 ? lastIndex + 1 : lastIndex - 1),
      };
    });

    setData(result);
  };

  if (!data) return null;

  const selectedIndex = data.findIndex(({ active }) => active);

  return (
    <div className="container">
      <div className="Logo">
        <img src="/static/images/logo.png" alt="Perfil Logo" className="img" />
      </div>

      <div className="carrossel" ref={carrossel}>
        {data.map((itemData, index) => (
          <CardSlide item={itemData} key={index} />
        ))}
      </div>

      <div className="buttons">
        <button
          disabled={selectedIndex <= 0}
          onClick={() => handleNewRightClick(-1)}
        >
          <img src="static/images/setas.png" alt="Left" className="botao"></img>
        </button>
        <button
          disabled={selectedIndex >= data.length - 1}
          onClick={() => handleNewRightClick(1)}
        >
          <img
            src="static/images/setas.png"
            alt="Right"
            className="botao"
          ></img>
        </button>
      </div>
    </div>
  );
};

export default App;
