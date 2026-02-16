import { useState } from "react";
import axios from "axios";
import "./index.css";

export const BotonLesson = () => {
  const [leccion, setLeccion] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [numero, setNumero] = useState<number>();

  const fetchData = async () => {
    if (loading) return;

    try {
      setLoading(true);
      const res = await axios.get("https://lessons-api.vercel.app/");
      setNumero(res.data.wisdom.split(".")[0]);
      setLeccion(res.data.wisdom.split(".")[1]);
    } catch (error) {
      console.error(error);
      setLeccion("Error al cargar la lección");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="button-flex-container">
      <button onClick={fetchData} disabled={loading} className="boton-overlay">
        <img
          src="/images/button-desktop.6ff93e26.png"
          alt="Botón"
          className="boton-imagen"
        />

        <div className="contenido-texto">
          <div className="lesson-number">
            {numero ? `Lección #${numero}` : ""}
          </div>

          <div className="lesson-text">
            {loading ? "Cargando..." : leccion || <Titulo />}
          </div>
        </div>
      </button>
      {leccion && !loading && (
        <div className="socials-container">
          <img src="/images/share-with-friends.161d506d.png" />
          <img src="/images/fb-logo.96f2b976.png" />
          <img src="/images/twitter-logo.ebe3c4fc.png" />
          <div className="share-with-friends-2">
            <img src="/images/share-with-friends.161d506d.png" />
          </div>
        </div>
      )}
    </div>
  );
};

export const Titulo = () => {
  return (
    <div>
      <h1>Click Here</h1>
      <h2>To learn your lessons</h2>
    </div>
  );
};
export const BordeLateralIzq = () => {
  return (
    <div className="korvo-ad-flex-container">
      <div className="car-flash-desktop">
        <img src={"/images/korvo-ad-car-flash-desktop.68ee3696.png"} />
      </div>

      <div className="arrow-1">
        <img src={"/images/rainbow-arrow.01646803.gif"} />
      </div>
      <div className="auction-listing-desktop">
        <img src={"/images/car-sold-desktop.77eb8a85.png"} />
      </div>
    </div>
  );
};

export const BordeLateralDech = () => {
  return (
    <div className="web-design-expert-container">
      <div className="fam-headshot">
        <img src={"/images/fam-photo.e34b51ca.png"} />
      </div>
      <div className="web-design-credits">
        <p> *THIS SITE DESIGNED BY THE SOLAR OPPOSITES</p>
      </div>
    </div>
  );
};
