import styled from "styled-components";

export const Section = styled.section`
display: flex;
align-items: center;
justify-content: space-around;
height: 80vh;
color:  #fff;
padding: 0 5%;
background-color: #1E3932;
`

export const Div = styled.div`
width: 30vw;
width: 40%;

h2{
    font-size: 64px;
    margin-bottom: 15px;
}

h3 {
    font-size: 24px;
    weight: 700;
    font-family: "Inter", serif;
    color: #3057501;
  }

  p{
    font-size: 24px;
    weight: 400;
    font-family: "Poppins", serif;
    line-height: 36px;
  }


`;

export const Image = styled.div`
width: 40%;
display: flex;
justify-content: center;
align-items: center;


img{
    max-width: 100%;
    height: auto;
    object-fit: cover;
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