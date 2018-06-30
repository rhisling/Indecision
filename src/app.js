console.log("app.js is running");

var app = {
  title: "Indecision app",
  subtitle: "Put your life in the hands of a computer",
  options: ["one", "two"]
};

var template = (
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

ReactDOM.render(template, document.getElementById("app"));
