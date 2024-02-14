import { RecoilRoot } from "recoil"
import './App.css'
import { Route, Routes } from "react-router-dom/dist"
import MainLayout from "./Components/Layouts/MainLayout"
import MainPage from "./Components/Main/MainPage"
import NoteCreation from "./Components/Main/NoteCreationPage/NoteCreation"
import NoteView from "./Components/Main/NoteViewPage/NoteView"
import CreationLayout from "./Components/Layouts/CreationLayout"
import ContentReferenceCreation from "./Components/Main/NoteCreationPage/ContentReferenceCreation"


function App() {

    return (
        <RecoilRoot>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<MainPage />} />
                    <Route path="/create" element={<CreationLayout/>}>
                        <Route path="note" element={<NoteCreation />}/>
                        <Route path="aaa" element={<ContentReferenceCreation />}/>
                    </Route>
                    <Route path="/:id" element={<NoteView/>}/>
                </Route>
            </Routes>
        </RecoilRoot>
    )
}

export default App
