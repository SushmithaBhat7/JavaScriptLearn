import { FooterComponent } from "./Footer"
import { HeaderComponent } from "./Header"


export const HomeComponent = ()=>{
    return (
        <div>
            <HeaderComponent />
            <p>Im a Home</p>
            <FooterComponent/>
        </div>
    )
}