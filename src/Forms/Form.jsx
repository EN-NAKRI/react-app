import {React, useState }from "react";



export default function Form(){

   /* const[inputName, setInputName]=useState()
    const[inputAge, setInputAge]=useState()
    const[inputCity, setInputCity]=useState()
    const[inputAccept, setInputAccept]=useState(false)*/



     /* const inputNameChange = ()=>{

        setInputName(document.querySelector('#name').value)
    }

    const inputAgeChange = ()=>{
        setInputAge(document.querySelector('#age').value)

    }

    const inputCityChange = ()=>{
        setInputCity(document.querySelector('#city').value)

    }*/

    /*const inputAcceptChange = ()=>{
        setInputAccept(document.querySelector('#accept').checked)
    }*/


//----------------------------------------------------------------------------------------------
    const[formValues, setFormValues]=useState({
        name:' ',
        city:' ',
        age:undefined,
        country:'MA',
        accept:false
    })
    
   //const getInitialState = () =>{}//


    const handleChange = (e) => {
        e.preventDefault()
        const currentTarget = e.currentTarget
        const id = currentTarget.id
       let value=currentTarget.value

       if(currentTarget.type === 'checkbox'){
        value=currentTarget.checked
       }

       /* switch(currentTarget.type){
            case  'text':
            value=currentTarget.value
               break
            case 'checkbox':
                value=currentTarget.checked
                break
        default: 
            console.error('invalid type')
        }
*/
        setFormValues(
            prevState=>{
                console.log(prevState)
                return {...prevState, ...{[id]:value}}
            }
        )

        console.log(formValues)

    }

    
  

    return(
        <div className="container my-4">
        <form>
        
        <div className="form-group">
        <label>name</label>
        <input type="text" id="name" className="form-control" onChange={handleChange}/>
        </div>
        
        <div className="form-group">
        <label>age</label>
        <input type="text" id="age" className="form-control" onChange={handleChange}/>
        </div>

        <div className="form-group">
        <label>city</label>
        <input type="text" id="city" className="form-control" onChange={handleChange}/>
        </div>

        <div className="form-group">
        <label>country</label>
        <label htmlFor="country"></label>
        <select className="form-control" id="country" onChange={handleChange}>
            <option value='MA'>MAROC</option>
            <option value='DZ'>ALGERIE</option>
            <option value='TN'>TUNISIE</option>
            <option value='OTHER'>other</option>
        </select>

        </div>
        
        <div className="form-check">
        <input type="checkbox" id="accept" className="form-check-input" onChange={handleChange}/>
        <label htmlFor='accept' className="form-check-label">accept our rules</label>
        </div>

        <div className="form-group">
            <button type="submit" className="btn btn-primary" onClick={handleChange}> save</button>
        </div>
        
        </form>
        </div>
    )
}