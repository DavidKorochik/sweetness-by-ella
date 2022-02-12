import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box
}

html{
    @media (max-width: 1700px){
        font-size: 75%;
    }
    
}

body{
    /* background: #1b1b1b; */
    background: #fefff6;
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
}
button{
    font-weight: bold;
    font-size: 1.1.rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #42929d;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    font-family: 'Inter', sans-serif;
    color: #84c3c8;
    &:hover{
        background-color: #42929d;
        color: white;
    }
}
    h2{
        font-weight: lighter;
        font-size: 4rem;
        color: #42929d;
    }
    h3{
        color: white;
    }
    h4{
        font-weight: bold;
        font-size: 2rem;
       
    }
    a{
        font-size: 1.1rem;
    }
    span{
        font-weight: bold;
        color:#42929d;
    }
    p{
        padding: 3rem 0rem;
        /* color: #ccc; */
        color: #84c3c8;
        font-size: 1.4rem;
        line-height: 150%;
    }

`;

export default GlobalStyle;
