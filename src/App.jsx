import Api from "./Components/Api";
import Comp2 from "./Components/Comp2";
import Hooks from "./Components/Hooks";
import JavascriptComp from "./Components/JavascriptComp";
import MyComp from "./Components/MyComp";

function App() {
  const num = 25;
  const fruit = "Apple";
  return (
    <>
      <h1>Hello World</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
        perspiciatis nostrum aut eos. Dolor, in et. Corporis iste suscipit quae
        voluptatum, animi tempore sunt totam recusandae perspiciatis adipisci.
        Veritatis, ipsa.
      </p>

      <img
        src="https://img.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_181624-60607.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1708560000&semt=sph"
        alt=""
      />

      <MyComp number={num} fruit={fruit} />
      <Comp2 number={num} fruit={fruit} />
      <br />
      <br />
      <br />
      <br />
      <JavascriptComp />
      <Hooks />
      <Api/>
    </>
  );
}

export default App;
