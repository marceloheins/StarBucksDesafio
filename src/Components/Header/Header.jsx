import {Link} from "react-router-dom";
import logo from "../../assets/logo.png";
import { HeaderStyle, StyleLink, Ul, Li, Img} from "./style";

export default function Header(){
    return (
        <HeaderStyle>
                        
                    <Img src={logo} alt="logomarca" />
                    <nav>
                        <Ul>
                            <Li>
                                <StyleLink to="/">Home</StyleLink>
                            </Li>
                            <Li>
                                <StyleLink to="/novidades">Novidades</StyleLink>
                            </Li>
                            <Li>
                                <StyleLink to="/sobre">Sobre</StyleLink>
                            </Li>
                        </Ul>
                    </nav>
                                  
         </HeaderStyle>
    );
}