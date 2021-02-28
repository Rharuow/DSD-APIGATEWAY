import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function App() {
  const gateWay = axios.create({
    baseURL: "http://localhost:9000",
    headers: { "Access-Control-Allow-Origin": "*" },
  });

  const getMovies = async () => {
    console.log("foi");
    await gateWay
      .get("movies")
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="d-flex">
          <button
            className="btn btn-success mr-2"
            onClick={async () => await getMovies()}
          >
            Filmes
          </button>
          <button className="btn btn-primary ml-2">Contatos</button>
        </div>
      </header>
    </div>
  );
}

export default App;
