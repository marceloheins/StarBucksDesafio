import styled from "styled-components";
import {Link} from "react-router-dom";

export const HeaderStyle = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    heinght: 15vh;
    margin: 0 4vw;
    width: 100%;


    
    `;

export const Img = styled.img`
    height: 9vh;
`
    
export const StyleLink = styled(Link)`
    text-decoration: none;
    color: #1e3932;
    font-size: 24px;
    font-family: "Poppins", serif;
    font-weight: 400;
    line-height: 36px;

    &hover{
        color: #037143;
    }

`;


export const Ul = styled.ul`
  display: flex;  
  width: 40vw;
  justify-content: space-around;
  list-style:none;
      

`

export const Li = styled.li`
  margin: 0;
  padding-right: 3vw;
    
    }
`