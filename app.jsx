import React from "react"
import Header from "./header"
import Main from "./main"
import data from "./data"

export default function App(){
    const dataVal = data.map((dataValue)=>{
        return <Main
            key={dataValue.id}
            {...dataValue}
        />     
    })
    return (
        <div>
            <Header/>
            {dataVal}
        </div>
    )
}