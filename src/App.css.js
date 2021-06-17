import styled from '@emotion/styled'

export const NextQuestion = styled.button`
  margin: 10px 0;
  color: black;
  font-size: 1.2em;
  padding: 8px 10px;
  background: rgb(246,255,35);
  background: linear-gradient(97deg, rgba(246,255,35,0.8314087759815243) 0%, rgba(245,183,0,1) 100%);
  &:hover{
    color: white;
    background-color: #E6F7F7;
    cursor: pointer;
    background: rgb(193,144,1);
    background: linear-gradient(97deg, rgba(193,144,1,1) 1%, rgba(118,122,16,0.8314087759815243) 100%);
  }
  &:active{
    color: white;
    background: rgb(193,144,1);
    background: linear-gradient(97deg, rgba(193,144,1,1) 1%, rgba(118,122,16,0.8314087759815243) 100%);
  }
  &:disabled{
    cursor: not-allowed;
    background-color: #D5E6E6;
  }
`
export const H1 = styled.h1`
  font-size: 3em;
  letter-spacing: 0.1em;
  margin: 20px 0;
`

export const Score = styled.span`
  font-size: 2.4em;
  font-weight: 600;
`

export const Background = styled.div`
  background-color: white;
  border: 3px solid black;
  -moz-box-shadow: 3px 3px 3px black;
  -webkit-box-shadow: 3px 3px 3px black;
  box-shadow: 7px 7px 7px black;
  margin-top: 3em;
  border-radius: 20px;
  width: 90%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
export const Button = styled.button`
  font-size: 1.4em;
  padding: 0.3em 0.8em;
  width: 230px;
  color: black;
  background: rgb(255,175,189);
  background: radial-gradient(circle, rgba(255,175,189,1) 15%, rgba(255,195,160,1) 76%, rgba(255,231,0,1) 97%);
  margin-bottom: 1.5em;
  &:hover{
    color: white;
    border-color: white;
    background: rgb(253,187,45);
    background: radial-gradient(circle, rgba(253,187,45,1) 6%, rgba(240,214,214,1) 93%);
    cursor: pointer;
  }
`

export const H2 = styled.div`
  font-size: 3em;
  margin-bottom: 20px;
  letter-spacing: 0.1em;
`

export const StartButton = styled.button`
  font-size: 1.4em;
  padding: 0.3em 0.8em;
  width: 230px;
  margin-bottom: 1em;
  background: rgb(255,175,189);
  background: radial-gradient(circle, rgba(255,175,189,1) 15%, rgba(255,195,160,1) 76%, rgba(255,231,0,1) 97%);
  &:hover{
    color: white;
    border-color: white;
    background: rgb(253,187,45);
    background: radial-gradient(circle, rgba(253,187,45,1) 6%, rgba(240,214,214,1) 93%);
    cursor: pointer;
  }
`
export const Center = styled.div`
  display: flex;
  justify-content: center;
`