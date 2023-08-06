import { useState } from "react";

export default function State() {
    let data1 = 'variable';
    let [data2, setData2] = useState('state');
    function updateData(){
        data1 = 'variable-changed';
        alert(data1);
    }
    function updateState(){
        setData2('state-changed');
        alert(data2);
    }
    return (
      <div>
        <h1>State in React!</h1>
        <h1>{data1}</h1>
        <h1>{data2}</h1>
        <button onClick={updateState}>Update State</button>
        <button onClick={updateData}>Update Variable</button>
      </div>
    );
}