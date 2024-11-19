import styled from "styled-components";

export const Section = styled.section`
display: flex;
align-items: center;
justify-content: space-around;
height: 80vh;
width: 80vw;
color: #1e3932;
`

export const Div = styled.div`
width: 30vw;

h2{
    font-family: "Inter", serif;
    font-size: 24px;
    margin-bottom: 15px;
    line-height: 29.05px;
}

h3{
    font-size: 20px;
    font-family: "Poppins", serif;
    
    
}

p{
    font-size: 24px;
    font-family: "Poppins", serif;
    weight 400;
    line-height: 36px;
    color: #3057501;
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