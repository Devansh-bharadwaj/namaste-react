const Parent = React.createElement("div", { id: "parent" }, [
  React.createElement("h1", {}, "I am h1"),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Parent);
