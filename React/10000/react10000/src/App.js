import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal";
import { useState } from "react";

function App() {
    const [modalShow, setModalShow] = useState(false);
    return (
        <div id="app">
            <Header />
            <Main setModalShow={setModalShow} />
            <Footer />
            {modalShow && <Modal setModalShow={setModalShow} />}
        </div>
    );
}
export default App;
