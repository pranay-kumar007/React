let head = React.createElement("h1",{
    id: "red"
},"hello React...");
console.log(head);
let root = ReactDOM.createRoot(document.querySelector("body")); 
root.render(head);
