import logo from "../../assets/Logo.svg";
import loginIcon from "../../assets/LoginIcon.svg";
import { Header } from "./styles";

export const HeaderApp = () => {
    return(
        <>
        <Header>
            <img src={logo} alt="logo" />
               <div>
                   <img src={loginIcon} alt="" />
                   <span>Cadastre um ponto de coleta</span>
               </div>
        </Header>
        </>
    )
}