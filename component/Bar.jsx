import React from 'react'
const Bar = (props) => {
    const {label,height,fill,fillOpacity} = props
    return(
        <div style={{display:'flex', flexDirection:"column", justifyContent:"flex-end", margin:"0 2px"}}>
               <svg width="55" height={height} viewBox={`0 0 55 ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="55" height={height} fill={fill} fillOpacity={fillOpacity}/>
</svg>

<p style={{textAlign:'center'}}>{label} </p>
        </div>
     

    )
}

Bar.defaultProps = {
    label:"label",
    height:200,
    fill:"#E989D9",
    fillOpacity:"0.9"
}

export default Bar