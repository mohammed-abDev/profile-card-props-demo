import './App.css';
import chaltuImg from "./assets/img/chaltu.avif";
import haileImg from "./assets/img/haile.avif"
import julitImg from "./assets/img/julit.avif";
import Card from "./component/Card";

function App() {

  return (
    <div className="card-grid">
      <Card
        img={chaltuImg}
        name="Chaltu"
        age="25 years old"
        role="DevOps Engineer"
      />
      <Card
        img={haileImg}
        name="Hile"
        age="28 years old"
        role="MERN Developer"
      />
      <Card img={julitImg} name="julit" age="27 years old" role="QA / Tester" />
    </div>
  );
}

export default App
