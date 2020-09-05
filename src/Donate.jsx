
import React,{Component} from "react";
import {Pie} from "react-chartjs-2";


class Donate extends Component{
    
    constructor(props) {
        super(props)
        this.state ={
            labels : ['under 18', 'age 18-54','age 55+'],
            datasets: [{
                data : [2000,3000,4000],
                backgroundColor:['red,blue,green']
            }]
        }   
    }
    render(){
        return(
            <div>
        <h1> hbuhub</h1>
        <Pie
        data={{ 
            labels:this.state.labels,
            datasets:this.state.datasets
        }}
        />
        </div>

        )
    }
}

        export default  Donate;
        

