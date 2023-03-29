import  styled  from "styled-components"

export const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

`

export const QrCodeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  padding: 18px;

  width: 320px;
  height: 500px;

  border-radius: 5%;

  background-color: ${props => props.theme['white']};


  img {

    width: 290px;
    height: 290px;
    border-radius: 5%;
  }

  div {
    display: flex;
    flex-direction: column;

    /* background-color: red; */

    padding: 0 16px;

    justify-content: space-between;    
    gap: 20px;

    h2 {
      text-align: center;
      font-weight: 700;
      color: ${props => props.theme['dark-blue']};
    }
  
    span {
      text-align: center;
    }

  }


`
