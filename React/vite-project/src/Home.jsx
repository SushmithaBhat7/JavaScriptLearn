import { FooterComponent } from "./Footer"
import { HeaderComponent } from "./Header"
import Lifecycle from "./LifeCycle"


export const HomeComponent = ()=>{
    return (
        <div>
            <HeaderComponent />
            <p>Im a Home</p>
            <Lifecycle />
            <FooterComponent/>
        </div>
    )
}