import React, { useState } from "react";
import { MainStyle, Section, Button, Copinhos, Copao,} from "./style";

import copo1 from "../../assets/laranja2x.png";
import copo2 from "../../assets/vermelho2x.png";
import copo3 from "../../assets/amarelo2x.png";
import copoPequeno1 from "../../assets/laranja.png";
import copoPequeno2 from "../../assets/vermelho.png";
import copoPequeno3 from "../../assets/amarelo.png";
import elipse1 from "../../assets/elipseAmarela.png";
import elipse2 from "../../assets/elipseVerde.png";
import elipse3 from "../../assets/elipseVermelha.png";


export default function Home () {
    const [copoSelecionado, setCopoSelecionado] = useState(copo1);

    const [elipseSelecionada, setElipseSelecionada] = useState(elipse2);

    const selecionarCopo1 = () =>{
        setCopoSelecionado(copo1);
        setElipseSelecionada(elipse1);

    };
    const selecionarCopo2 = () =>{
        setCopoSelecionado(copo2);
        setElipseSelecionada(elipse3);

    };
    const selecionarCopo3 = () =>{
        setCopoSelecionado(copo3);
        setElipseSelecionada(elipse2);

    }
    return (
      <>
    
        
        <MainStyle>
            
            <Section>
                <h2>Mais que Café</h2>
                <h1>Isso é <span>Starbucks</span></h1>

                <p>A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o Latte Macchiato e o Espresso. Além disso, a Starbucks oferece bebidas quentes e frias, doces diferenciados e sanduíches.</p>
                <Button href="https://www.starbucksathome.com/br/blog.html" onClick={() => setMensagem('Obrigado por querer saber mais!')}>SAIBA MAIS</Button>

              <Copinhos>

                <button onClick={selecionarCopo1}>
                    <img src={copoPequeno1} alt="Copo Pequeno Laranja" />
                    
                </button>

                 <button onClick={selecionarCopo2}>
                     <img src={copoPequeno2} alt="Copo Pequeno Vermelho" />
                     
                </button>

                <button onClick={selecionarCopo3}>
                    <img src={copoPequeno3} alt="Copo Pequeno Amarelo" />
                    
                    
                </button>
              </Copinhos>
            </Section>

            <Copao >
                  <img src={elipseSelecionada} alt ="elipse "/> 
                  <div>   
                    <img src={copoSelecionado} alt="Copo Selecionado" />
                  </div>
                  
            </Copao>
            

        </MainStyle>
     </>   
    )
}