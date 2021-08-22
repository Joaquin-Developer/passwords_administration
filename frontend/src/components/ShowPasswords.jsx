import React, { useState, useEffect }  /*, { Component }*/ from 'react'
import "./ShowPasswords.css";
import { getOnlyAllRegisters, getSpecificPassword } from "../utils/api";

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

const ShowPasswords = () => {
    
    const [list, setList] = useState([]);


    useEffect(() => {
        getOnlyAllRegisters()
        .then(resp => setList(resp.data))
        .catch(error => {
            console.error(error);
            alert("Error al obtener los datos del servidor");
        })
    }, [setList]);

    /**
     * @param {*} evt 
     * Este evento se puede mejorar!
     */
    const handleClick_showPassword = async (evt) => {
        evt.preventDefault();
        let idRegister = evt.target.parentNode.parentNode.id;
        try {
            const passw = await getSpecificPassword(parseInt(idRegister));
            alert(`La contraseña es: ${passw}`);

        } catch (error) {
            alert(error.message);
        }
        
    }

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
                    <tr class="table-active tr-registers" 
                    id={item.IdRegistration} key={item.IdRegistration} 
                    >
                        <td>{item.NameRegistration}</td>
                        <td>{item.domian}</td>
                        <td>
                            <button type="button" 
                            class="btn btn-sm btn-outline-dark"
                            onClick={ handleClick_showPassword }>
                                Ver
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default ShowPasswords;


