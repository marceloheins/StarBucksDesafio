import styled from "styled-components";

export const HeaderStyle = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    heinght: 15vh;
    margin: 0 4vw;
    width: 80%;
   
 p{
    font-size: 64px;
    weight: 400;
    font-family: "Poppins", serif;
    line-height: 96px;
    color: #00000;
  }
    a{
        font-size: 96px;
        weight: 700;
        font-family: "Poppins", serif;
        line-height: 144px;
        color: #037143;
    }

    h2{
        font-size: 24px;
        weight: 400;
        font-family: "Poppins", serif;
        line-height: 36px;
        color: #00000;  
    }
        div{
        width: 943px;
        height: 926px;
        top: 522px;
        left: 853px;
        gap: 0px;
        opacity: 0px;
         display: flex;
    justify-content: space-between;
    align-items: center;
    heinght: 15vh;
    margin: 0 4vw;
    width: 80%;

        }
    `;

export const Button= styled.button`
 background-color: #037143;
 color: white;
 border: none;
 padding: 10px 30px;
 font-weight: bold;
 border-radius: 30px;

 cursor: pointer;
transition: background-color 0.3s ease;

 &:hover {
 background-color: #00874c;
 }
&:active {
  background-color: #004d30;
}
`