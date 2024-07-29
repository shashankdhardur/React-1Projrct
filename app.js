const heading = React.createElement("h1", { id: "heading" }, " hello world");

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "heading1"),
    React.createElement("h2", {}, "heading2"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "heading1"),
    React.createElement("h2", {}, "heading2"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "heading1"),
    React.createElement("h2", {}, "heading2"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
