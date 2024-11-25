import {MainStyle, Copo, Ellipse} from "./style";

export default function Home() {
    return (
      <MainStyle>
        <section>
          <h2>Mais que Café</h2>
          <h2>
            Isso é <span> Starbucks</span>
          </h2>
          <p>
            A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns
            dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o
            Latte Macchiato e o Espresso. Além disso, a Starbucks oferece
            bebidas quentes e frias, doces diferenciados e sanduíches.
          </p>
          <button>SAIBA MAIS</button>
          <div>
            <img
              src="src\assets\images\laranjaP(1).png"
              alt="copo laranja pequeno"
            />
            <img
              src="src\assets\images\vermelhoP.png"
              alt="copo vermelho pequeno"
            />
            <img
              src="src\assets\images\amareloP.png"
              alt="copo amarelo pequeno"
            />
          </div>
        </section>
        <section>
          <Copo
            src="src\assets\images\amarelo2x 1.png"
            alt=""
          />
          <img
            src="https://github.com/mariaccarolina/desafioSurpresa/blob/main/src/assets/images/Ellipse%201.png?raw=true"
            alt=""
          />
        </section>
      </MainStyle>
    );
}
