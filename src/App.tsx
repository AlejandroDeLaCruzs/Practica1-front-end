import "./App.css";
import { BordeLateralDech, BordeLateralIzq, BotonLesson } from "./components";

function App() {
  return (
    <div className="app">
      <div className="main">
        <div className="main-container">
          {/* Header */}
          <div className="solar-opposites-header">
            <img
              src="/images/header-image.4a423608.png"
              alt="Header"
              className="header-image"
            />
          </div>

          {/* Contenido principal */}
          <div className="content-flex-container">
            {/* Rallitas / margen superior */}
            <div className="margin-bottom">
              <div className="rallitas"></div>
            </div>

            {/* Flex interno con los componentes */}
            <div className="content-inner-flex-container">
              <BordeLateralIzq />
              <BotonLesson />
              <BordeLateralDech />
            </div>

            {/* Pupa coin y emojis */}
            <div className="pupa-coin-container">
              <div className="bad-gateway">
                <img src="/images/bad-gateway.f924a563.png" alt="Bad Gateway" />
              </div>
              <div className="alert-emoji">
                <img src="/images/emoji.22bec09e.png" alt="Emoji" />
              </div>
              <div className="accepting-pupa-coin-desktop">
                <img
                  src="/images/pupa-coin-desktop.c108aeaf.gif"
                  alt="Pupa Coin"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="fire-container"/>
      </div>
    </div>
  );
}

export default App;





/*import "./App.css";
import { BordeLateralDech, BordeLateralIzq, BotonLesson } from "./components";

function App() {
  return (
    <>
      <div className="app">
        <div className="main">
          <div className="main-container">
            <div className="solar-opposites-header">
              <img src="../../public/images/header-image.4a423608.png" />
            </div>
            <div className="content-flex-container">
              <div className="margin-bottom">
                <div className="rallitas"></div>
              </div>
              <div className="content-inner-flex-container">
                <BordeLateralIzq />
                <BotonLesson />
                <BordeLateralDech />
              </div>
              <div className="pupa-coin-container">
                <div className="bad-gateway">
                  <img src="../../public/images/bad-gateway.f924a563.png" />
                </div>
                <div className="alert-emoji">
                    <img src="../../public/images/emoji.22bec09e.png"/>
                </div>
                <div className="accepting-pupa-coin-desktop">
                  <img src="../../public/images/pupa-coin-desktop.c108aeaf.gif"/>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
*/