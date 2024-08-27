import { useState } from "react"

export default function KeyDemo() {

    const [users] = useState([{"UserName":"john"},{"UserName":"john12"},{"UserName":"smith"}]);

    const[userError,setUserError] = useState('');
    const[errorClass,setErrorClass] = useState('');
    const[passWarning,setPassWarning] = useState({"display":'none'});

    function VerifyUserName(e){
        for(var user of users){
            if(user.UserName==e.target.value){
                setUserError('User Name Taken - Take Another');
                setErrorClass("text-danger");
                break;
            }else{
                setUserError('User Name Available');
                setErrorClass("text-success");
            }

        }
    }
    function VerifyPassword(e){
        if(e.which>=65 && e.which<=90){
            setPassWarning({'display':'block'});
        }else{
            setPassWarning({'display':'none'});
        }

    }
  return (
    <div className="container-fluid">
      <h1>Register User</h1>
        <dl>
            <dt>User Name</dt>
            <dd> <input type = "text" onKeyUp = {VerifyUserName}/></dd>
            <dd className={errorClass}>{userError}</dd>
            <dt>Password</dt>
            <dd><input type ="password" onKeyPress={VerifyPassword}/></dd>
            <dd className="text-warning" style={passWarning}> <span className="bi bi-exclamation-triangle"></span>Warning: Caps ON</dd>
        </dl>
    </div>
  )
}
