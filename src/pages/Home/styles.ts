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
  align-items: flex-start;
  justify-content: flex-start;
  
  padding: 18px;

  width: 320px;
  height: 32rem;

  border-radius: 5%;

  background-color: ${props => props.theme['white']};


  img {
    display: block;
    width: 100%;
    height: 18rem;
    border-radius: 5%;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 10px 16px;

    gap: 20px;

    h2 {
      font-size: 22px;
      text-align: center;
      font-weight: 700;
      color: ${props => props.theme['dark-blue']};
    }
  
    span {
      text-align: center;
    }

  }


`
