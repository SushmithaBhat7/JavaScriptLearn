
import { useState } from "react";

const FormComponent = () =>{
const [profile,setProfile] = useState({name:"",email:"",gender:""});
const onInputChange= (e)=>{
const {name,value} = e.target;
console.log({name,value});
setProfile({...profile,[name]:value})
//setter by functional
//setProfile((abTakKiState) => ({ ...abTakKiState, [name]: value }));
}
    return(
        <div>
            <div className="form-element">
                <p>Name : {profile.name}</p>
                <input type="name" name="name" placeholder="Enter email" value={profile.name} onChange={onInputChange}/>
            </div>
            <div className="form-element">
                <p>Name : {profile.email}</p>
                <input type="email" name="email" placeholder="Enter email" value={profile.email} onChange={onInputChange}/>
            </div>
        </div>
    );
}

export default FormComponent;