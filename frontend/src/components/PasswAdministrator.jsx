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
            <hr />
            <table class="table table-hover">
                <thead>
                    <tr class="table-dark">
                        <th scope="col">Nombre</th>
                        <th scope="col">Dominio</th>
                        <th scope="col">Contraseña</th>
                    </tr>
                </thead>
                <tbody>
                {list.map(item => (
                    <tr class="table-active tr-registers" key={item.IdRegistration}>
                        <td>{item.NameRegistration}</td>
                        <td>{item.domian}</td>
                        <td>
                            <button type="button" class="btn btn-sm btn-outline-dark">Ver</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default PasswAdministrator;


