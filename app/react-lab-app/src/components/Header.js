import { HeaderContainer } from "../styles/HeaderContainer";
import { MainMenu } from "./MainMenu"

export const Header = () => {
    return (
        <HeaderContainer>
            <h1>LabFlix</h1>
            <MainMenu/>
        </HeaderContainer>
    )
}

export default Header;