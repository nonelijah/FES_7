import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Index from "./components/Index";
import Author from "./components/Author";
import Library, {
    IceForest,
    RustyMoon,
    StrangeMansion,
    SandBlood,
} from "./components/Library";
function App() {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/author" element={<Author />} />
                    <Route path="/library/*" element={<Library />}>
                        <Route path="iceforest" element={<IceForest />} />
                        <Route path="sandblood" element={<SandBlood />} />
                        <Route
                            path="strangemansion"
                            element={<StrangeMansion />}
                        />
                        <Route path="rustymoon" element={<RustyMoon />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}
export default App;
