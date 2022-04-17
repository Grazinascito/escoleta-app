
import { ContainerRight } from "./styles";
import BackgroundCloud from "../../../assets/BackgroundCloud.svg";
import Pessoas from "../../../assets/Pessoas.svg";

export const RightMainSection = () => {
    return(
       <ContainerRight>
           <img src={Pessoas} alt="pessoas" />
           <img src={BackgroundCloud} alt="cloud" />
       </ContainerRight> 
    )
}