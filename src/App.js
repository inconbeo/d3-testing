import React, { Component } from 'react'
import './App.css'
import { select } from 'd3-selection'


class App extends Component {
  constructor(props){
    super(props)
  }

  // componentDidMount(){
  //   this.sayHelloWorld()
  // }

  // sayHelloWorld() {
  //   const hello = select(ref).text('hello world')
  //   return hello
  // }
  

   render() {
    // var dataset = ["Hello world!"];

    // // I will use the d3 object
    // select("body") // Selecting the body tag
    //   .selectAll("h1") // Selecting all h1 tags... but there aren't any! That's where .enter() comes in!
    //   .data(dataset) // Binding the dataset first so d3 knows how many h1's to create
    //   .enter() // Now it's going to "enter" whatever is chained after this command based on the length of dataset
    //   .append("h1") // I want to create an h1 for each datum of data
    //   .text(function(d) { return d; }); // And I want the text to be that datum of data

   return (
     <div>
     <h1>hello worldddd</h1>
      {/* <svg ref={data => this.hello = data}>hello world</svg> */}
      </div>
   )
   }
}
export default App