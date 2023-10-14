import { useState } from 'react';
import moon from '../images/moon-solid.png';
import sun from '../images/sun.png';
import './calculator.css'
function Calculator()
{
    const [input,setInput] = useState('')
    const [light,setLight] =useState(true)
    const [result,setResult] = useState('')
    const [flag,setFlag] = useState(0);
    function changeTheme(event)
    {
        if(light)
        {
            setLight(false)
            event.target.src=moon;

        }
        else
        {
            setLight(true)
            event.target.src=sun;
        }
    }
    function handleEndInput()
    {
        try
        {
            setResult(eval(input))
            setFlag(1)
        }
        catch(err)
        {
            setResult("SYNTAX ERROR")
            setInput('')
            setFlag(0)
        }
    
    }

    function handleOperandInput(event)
    {
        if(flag==1)
        {
            setInput(result + event.target.value)
            setResult('')
            setFlag(0)
        }
        else
            setInput(input + event.target.value)
    }

    function handleOperatorInput(event)
    {
        if(event.target.value==='-1')
            {
               if(input==='')
                {
                    setResult('')
                }
                else
                {
                    setInput(input.slice(0,input.length-1))
                    setResult('')
                }
                
            }
        else
        {
            if(flag==1)
            {
                setInput(result + event.target.value)
                setResult('')
                setFlag(0)
            }
            else
            {
                setInput(input + event.target.value)
            }
        }
        
    } 
    return(
        <div>
           <div className={light?'body-top body-top-light':'body-top body-top-dark'}>
                <img onClick={changeTheme} src={sun} alt="switch" id='lightswitch' width='20px' height="20px" style={{padding:"5px",position:"fixed"}}/>
                <div className='top-working-space'>
                    <p className={light?'input-light' :'input-dark'} >{input}</p>
                    <p className={light?'result-light' :'result-dark'}>{result}</p>
                </div>
                

           </div>
           <div className={light?'body-bottom body-bottom-light':'body-bottom body-bottom-dark'}>
            <div className='input-left'>
                <button className={(light)? "input-numbers-light":"input-numbers-dark"} onClick={handleOperandInput} value={'7'}>7</button>
                <button className={(light)? "input-numbers-light":"input-numbers-dark"} onClick={handleOperandInput} value={'8'}>8</button>
                <button className={(light)? "input-numbers-light":"input-numbers-dark"} onClick={handleOperandInput} value={'9'}>9</button>
                <button className={(light)? "input-numbers-light":"input-numbers-dark"} onClick={handleOperandInput} value={'4'}>4</button>
                <button className={(light)? "input-numbers-light":"input-numbers-dark"} onClick={handleOperandInput} value={'5'}>5</button>
                <button className={(light)? "input-numbers-light":"input-numbers-dark"} onClick={handleOperandInput} value={'6'}>6</button>
                <button className={(light)? "input-numbers-light":"input-numbers-dark"} onClick={handleOperandInput} value={'1'}>1</button>
                <button className={(light)? "input-numbers-light":"input-numbers-dark"} onClick={handleOperandInput} value={'2'}>2</button>
                <button className={(light)? "input-numbers-light":"input-numbers-dark"} onClick={handleOperandInput} value={'3'}>3</button>
                <button className={(light)? "input-numbers-light":"input-numbers-dark"} onClick={handleOperandInput} value={'0'}>0</button>
                <button className={(light)? "input-numbers-light":"input-numbers-dark"} onClick={handleOperandInput} value={'.'}>.</button>
                <button className={(light)? "input-operators-light":"input-operators-dark"} onClick={handleEndInput} value={'='}>=</button>
            </div>
            <div className='input-right'>
                <button className={(light)? "del input-operators-light":"del input-operators-dark"} onClick={handleOperatorInput} value={'-1'}>C</button>
                <button className={(light)? "input-operators-light":"input-operators-dark"}onClick={handleOperatorInput} value={"/"}>÷</button>
                <button className={(light)? "input-operators-light":"input-operators-dark"}onClick={handleOperatorInput} value={"*"}>x</button>
                <button className={(light)? "input-operators-light":"input-operators-dark"} onClick={handleOperatorInput} value={"-"}>-</button>
                <button className={(light)? "input-operators-light":"input-operators-dark"} onClick={handleOperatorInput} value={"+"}>+</button>
            </div>
                

           </div>
        </div>
    )
}

export default Calculator
