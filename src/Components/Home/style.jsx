import styled, {keyframes} from "styled-components";


export const Section = styled.section`
  position: relative;  
`

export const MainStyle = styled.main`
    display: flex;
    justify-content: space-between;
    align-items: center;
    heinght: 80vh;
    margin: 0 4vw;
    width: 80%;



   
 h1{
    font-size: 64px;
    weight: 400;
    font-family: "Poppins", serif;
    line-height: 96px;
    color: #00000;
  }
    span{
        font-size: 96px;
        weight: 700;
        font-family: "Poppins", serif;
        line-height: 144px;
        color: #037143;
    }

    h2{
        font-size: 64px;
        weight: 400;
        font-family: "Inter", serif;
        line-height: 77.45px;
        color: #00000;  
    }
    p{
        widht: 737px;
        height: 148px;
        top: 451px;
        left: 116px;
        font-size: 24px;
        weight: 400;
        font-family: "Poppins", serif;
        line-height: 36px;
        
        color: #00000;  
    }
      
    `;

export const Copinhos = styled.div`
    display: flex;
    margin: 8% auto;
    gap: 2rem;
    width: 30%;
  
  
    button {
      
      background-color: transparent;
      transition: 0.3s ease-in-out;
      cursor: pointer;
      border:none;
  
      &:hover {
        transform: scale(2) rotate(18deg);
      }
  
      img {
        width: 109px;
        transform: rotate(-10deg);
      }
    }
  `;
  
   

   export const Copao = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
  
    top: 40%;
    right: -15%;
    width: 50%;
    height: 100%;



    img{
      position: relative;
      width: 483px;
      right: 502px;
      top: 431px;
    }

    div {
      position: absolute;
      width: 483px;
      right: 50px;
      top: 43px;

      
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
`;
