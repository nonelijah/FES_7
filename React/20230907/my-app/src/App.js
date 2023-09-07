import "./App.css";

function App() {
    const name = "라이켓";

    const time = new Date();
    const year = time.getFullYear();
    const month = time.getMonth() + 1;
    const date = time.getDate();
    const hours = time.getHours();
    const min = time.getMinutes();
    const sec = time.getSeconds();

    return (
        <div className="App">
            <p style={{ backgroundColor: "skyblue" }}>hello {name}!!</p>
            <p className="newClass">hello React!!</p>
            <input type="text" maxLength={10} disabled={true} />

            <br />

            <div style={{ backgroundColor: "black", color: "white" }}>
                <h1 style={{ color: "red" }}>년 : {year}</h1>
                <h2>
                    월/일 : {month}/{date}
                </h2>
                <h3>
                    시간 : {hours}시 {min}분 {sec}초
                </h3>
            </div>
        </div>
    );
}

export default App;
