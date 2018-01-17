import React from 'react';
import d3 from 'd3'
import { select } from 'd3-selection'


export default class Hello extends React.Component {

    componentDidMount(){
        this.sayHello()
    }

    sayHello() {
        select("#hi")
        .append()
        .text(function() {
            return 'hello world'
        })

    }

    render(){
        return (

            <div id="hi">
                {this.sayHello()}
            </div>
        )
    }
}