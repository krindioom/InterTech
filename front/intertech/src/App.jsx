import { RecoilRoot } from "recoil"
import './App.css'
import { Route, Routes } from "react-router-dom/dist"
import MainLayout from "./Components/Layouts/MainLayout"
import MainPage from "./Components/Main/MainPage"
import NoteCreation from "./Components/Main/NoteCreationPage/NoteCreation"
import NoteView from "./Components/Main/NoteViewPage/NoteView"


function App() {

    return (
        <RecoilRoot>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<MainPage />} />
                    <Route path="/create" element={<NoteCreation />} />
                    <Route path="/:id" element={<NoteView/>}/>
                </Route>
            </Routes>
        </RecoilRoot>
    )
}

export default App
