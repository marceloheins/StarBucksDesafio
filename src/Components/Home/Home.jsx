import { HeaderStyle, Button} from "./style";

export default function Home () {
    return (
        <HeaderStyle>
            
            <section>
                <h1>Mais que Café </h1>
                <p>Isso  é <a>Starbucks</a></p>

                <h2>A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o Latte Macchiato e o Espresso. Além disso, a Starbucks oferece bebidas quentes e frias, doces diferenciados e sanduíches.</h2>
            <Button onClick={() => setMensagem('Obrigado por querer saber mais!')}>SAIBA MAIS</Button>
            <img src="src/assets/laranja.png" alt="Copo laranja"/>
            <img src="src/assets/vermelho.png" alt="Copo vermelho"/>
            <img src="src/assets/amarelo.png" alt="Copo amarelo"/>
            <img src="src/assets/elipseVerde.png" alt= "elipse Verde"/>
            <div>
                <img src="src/assets/amarelo2x.png" alt= "Copão Amarelo"/>
            </div>
            </section>

        </HeaderStyle>

    )
}