import React from 'react'
import Bar from './Bar'
const BarGraph = (props) => {
    const {data} = props
    let barArray = []
    Object.keys(data).forEach((key)=>{
        barArray.push(
            <Bar fill='yellow' label={key} height={`${data[key]/sum(Object.values(data))*100}vw`}/>
        )
    })
    return (
        <div style={{display:"flex", flexDirection:"row",width:"fit-content"}}>{barArray}</div>
        
      )
    }
    function sum(data){
        return data.reduce((a,b) => parseInt(a) + parseInt(b))
    }


BarGraph.defaultProps ={
    data:{
        2000:200000,
        2001:100000,
        2002:150000,
        2003:120000,
        2004:145000,
    }
}
export default BarGraph