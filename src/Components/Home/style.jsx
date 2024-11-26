import styled, {keyframes} from "styled-components";




export const MainStyle = styled.main`

  *{
  margin:0;
  padding:0;
  box-sizing:border-box;
  }
  :root{
      @media (min-width:768px){
        font-size: 18px;
      }

      @media(min-widht: 1024px){
        font-size: 18px;
      }
    
    }

    display: flex;
    justify-content: space-between;
    align-items: center;
    heinght: 80vh;
    margin: 0 4vw;
    width: 100%;



   
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
    }`


    export const Section = styled.section`
    position: relative;  
    `

    export const TextoPrincipal = styled.p`
      widht: 737px;
      height: 148px;
      top: 451px;
      left: 116px;
      font-size: 24px;
      weight: 400;
      font-family: "Poppins", serif;
      line-height: 36px;
      
      color: #00000;  `

      
  

export const Copinhos = styled.div`
    display: flex;
    margin: 8% auto;
    gap: 2rem;
    width: 100%;
  
  
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
  
    top: 100%;
    right: -15%;
    width: 10%;
    height: 100%;



    img{
      position: absolute;
      width: 483px;
      right: 480px;
      top: 43px;
    }
      `;
   

export const Button= styled.a`
 background-color: #037143;
 text-decoration:none;
 color: white;
 border: none;
 padding: 20px 40px;
 font-weight: bold;
 border-radius: 30px;
 font-family: "Poppins", serif;

 cursor: pointer;
transition: background-color 0.3s ease;

 &:hover {
 background-color: #00874c;
 }
&:active {
  background-color: #004d30;
}
`;
