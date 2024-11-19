import grao from "../../assets/grao.png"

import { Section, Div, Button} from "./style";

export default function Novidades() {
    return (

        <Section>
            <img src={grao} alt="Grão de Café" />

            <Div>

                <h3>PREPARAÇÃO</h3>
                <h2>Níveis de torra</h2>
                <p>Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou Torra Escura? Estas sãos as torras que fazem parte dos níveis de torra Starbucks®</p>

                <Button>SAIBA MAIS</Button>

            </Div>
        </Section>
    );
}