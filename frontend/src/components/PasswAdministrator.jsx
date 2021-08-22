import React, { useState, useEffect }  /*, { Component }*/ from 'react'
import "./PasswAdministrator.css";
import { getOnlyAllRegisters } from "../utils/api";

// export default class PasswAdministrator extends Component {

//     componentDidMount() {
//         getOnlyAllRegisters()
//         .then(resp => {
//             console.log(resp.data);
//         })
//         .catch(error => console.error(error))
//     }
//     render() {
//         return ()
//     }
// }

const PasswAdministrator = () => {
    
    const [list, setList] = useState([]);

    useEffect(() => {
        getOnlyAllRegisters()
        .then(resp => {
            console.log(resp.data);
            setList(resp.data);
        })
        .catch(error => console.log(error))
    }, [setList]);
    
    return (
        <div class="container main">
            <h2>Mis contraseñas</h2>

            {list.map(item => (
                <div key={item.IdRegistration}>
                    <p>{item.NameRegistration}</p>
                    <p>{item.domian}</p>
                </div>
            ))}
        </div>
    );
}

export default PasswAdministrator;


