import { Route, Routes } from "react-router-dom"
import Conta from "./pages/Conta"
import ContaInfo from "./pages/ContaInfo"
import Home from "./pages/Home"
import { UserInfo } from "./pages/UserInfo"

const MainRoutes = () => {
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/conta/:id' element={<Conta />} />
            <Route path='/infoconta' element={<ContaInfo />} />
            <Route path='/user/info' element={<UserInfo />} />
        </Routes>
    )
}

export default MainRoutes
