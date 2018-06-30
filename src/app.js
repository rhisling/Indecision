console.log("app.js is running");

const app = {
  title: "Indecision app",
  subtitle: "Put your life in the hands of a computer",
  options: ["one", "two"]
};

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? "Here are your options" : "no"}</p>
    <ol>
      <li>Item one</li>
      <li>Item Two</li>
    </ol>
  </div>
);

let count = 0;
const addOne = () => {
  console.log("addNone");
};
const minusOne = () => {
  console.log("minusOne");
};

const reset = () => {
  console.log("reset");
};
const templateTwo = (
  <div>
    <h1>count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>reset</button>
  </div>
);

ReactDOM.render(templateTwo, document.getElementById("app"));
