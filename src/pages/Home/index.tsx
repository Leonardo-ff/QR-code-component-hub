import { HomeContainer, QrCodeBox } from "./styles";
import qrCode from "../../assets/image-qr-code.png";

export function Home () {
  return (
    <HomeContainer> 
      <QrCodeBox>
        <img src={ qrCode } alt="qr code" />

        <div>
          <h2>Improve your front-end skills py building projects</h2>
          <span>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</span>
        </div>
      </QrCodeBox>
      
    </HomeContainer>
  )
}