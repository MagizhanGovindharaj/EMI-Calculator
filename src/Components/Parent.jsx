import React, { useRef, useState } from "react"
import "./Parent.css"

function Parent(){
    let [state,setstate]=useState(100000)
    let increase_value=({target:{value}})=>{
        setstate(value)
    }
    let [state2,setstate2]=useState(1)
    let interest_state=({target:{value}})=>{
        setstate2(value)
    }
    let [state3,setstate3]=useState(30)
    let interest_Tenure=({target:{value}})=>{
        setstate3(value)
    }    
    return(
        <section className="parent">
            <header>Calculate Home Loan EMI</header>
            <div className="main_child">
                <section className="childLeft">
                    <div id="div1">
                        <h5>Loan Amount</h5>
                        <input type="tel" id="input_one" value={`₹${state}`} readOnly/>
                        <input type="range" className="scroll" name="loan" onChange={increase_value} min={100000} max={300000000} step={100000} />
                        <aside id="scroll_value">
                            <h5>₹1L</h5>
                            <h5 className="end">₹30Cr</h5>
                        </aside>
                    </div>
                    <div id="div2">
                        <h5>Illustrative Interest Rate p.a</h5>
                        <input type="text" id="input_two" value={`${state2}%`} readOnly/>
                        <input type="range" className="scroll" name="interest" onChange={interest_state} min={1} max={20} step={0.25} />
                        <aside id="scroll_value">
                            <h5>1%</h5>
                            <h5 className="end">20%</h5>
                        </aside>
                    </div>
                    <div id="div3">
                        <h5>Tenure</h5>
                        <input type="text" id="input_three" value={`${state3}`} readOnly/>
                        <input type="range" className="scroll" onChange={interest_Tenure} min={30} max={360} step={30}/>
                        <aside id="scroll_value">
                            <h5>30 months</h5>
                            <h5 className="end">360 months</h5>
                        </aside>
                    </div>
                </section>
                <section className="childRight">
                    <div id="dc1">
                        <h5>Principle amount</h5>
                        <h2>₹{state}</h2>
                    </div>
                    <div id="dc2">
                        <h5>Interest amount</h5>
                        <h2>₹{Math.trunc(state*state3*state2/2313)}</h2>
                    </div>
                    <div id="dc3">
                        <h5>Total Amount Payable</h5>
                        <h2>₹{parseInt(state)+parseInt(state*state3*state2/2313)}</h2>
                    </div>
                    <aside id="emi">
                        Your Monthly EMI is <b>₹{parseInt((parseInt(state)+parseInt(state*state3*state2/2313))/state3)}</b>
                    </aside>
                    <button>APPLY FOR HOME LOAN</button>
                </section>
            </div>
        </section>
    )
}


export default Parent