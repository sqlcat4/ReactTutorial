const reactContentRoot = document.getElementById("root")


const myFirstElemt = React.createElement('ul',null,
[
    React.createElement("li",null,"item1"),
    React.createElement("li",null,"item2")
]
    
)

ReactDOM.render(myFirstElemt,  reactContentRoot)