import { RecoilRoot } from "recoil"
import './App.css'
import { Route, Routes } from "react-router-dom/dist"
import MainLayout from "./Components/Layouts/MainLayout"
import MainPage from "./Components/Main/MainPage"


function App() {

    return (
        <RecoilRoot>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<MainPage/>}/>
                </Route>
            </Routes>
        </RecoilRoot>
    )
}

export default App
