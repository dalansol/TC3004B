import React from 'react'
import {bancos} from './assets/bancos'

function Primer() {

    const element = '<h1>Hello</h1>';
    const nombre = 'Daniela';
    const apellido = 'Landin';
    const nombrecompleto = `${nombre} ${apellido}`; /* mejor c/ backtick por - vulnerabilidades. template string */
    const elemento = `<h1>Nombre: ${nombre}</h1>`;
    
    console.log(element);
    console.log(nombre + ' ' + apellido);
    console.log(nombrecompleto);
    console.log(elemento);

    let valor = 5;
    valor = 7;
    console.log(valor);

    if(true){
        let valor = 6;
        console.log(valor);
    }

    function getSaludo(nombre:string){
        return 'Hola ' + nombre;
    }

    console.log(getSaludo('Vale'));

    const estudiante = {
        matricula: 'A000001',
        nombre: 'Jorge',
        edad: 20,
        direccion: {
            ciudad: 'Mty',
            zip: 64800
        }
    };

    console.log(estudiante);
    console.table(estudiante);

    const estudiante2 = {...estudiante} /* spread. esparce el contenido */
    estudiante2.nombre = 'Ramon';
    console.log(estudiante2);

    const arreglo = [1,2,3,4,5];
    console.log(arreglo);
    
    arreglo.pop();
    console.log(arreglo);

    arreglo.push(9);
    console.log(arreglo);

    let arreglo2 = [...arreglo];   
    console.log(arreglo2);

    const saludar = function (nombre:string){
        return nombre;
    }

    const saludar2 = (nombre:string)=>{
        return nombre;
    }

    const saludar3 = (nombre:string)=> 'Hola ' + nombre;

    console.log(saludar('Jorge'));
    console.log(saludar2('Ramon'));
    console.log(saludar3('Velez'));

    let a, b, rest;
    [a, b] = [10, 20];
    console.log(a);
    // Expected output: 10
    console.log(b);
    // Expected output: 20
    [a, b, ...rest] = [10, 20, 30, 40, 50];
    console.log(rest);
    // Expected output: Array [30, 40, 50]

    const getBancobyId = (id) => bancos.find( (banco) => banco.id === id);
    console.log(getBancobyId(1));

    const getBancobyName = (name) => bancos.find( (banco) => banco.name === name);
    console.log(getBancobyName('Nu Bank'));

    /* promesas
        then ---
        catch ---
        finally ---

        para apis pq a veces no resuelven
    */
    
    const promesa = new Promise( (resolve, reject) => {
        setTimeout( () => {

        },3000)
    });

    const apiKey = 'MbgG8rnxiVBuuiVtj3WJyeUQhDOxsz6J';
    const peticion = fetch('https://api.giphy.com/v1/gifs/trending?api_key=' + apiKey);
    peticion
        .then( resp => resp.json() )
        .then( data =>{ console.log(data.data[0].url)})
        .catch( console.warn);

    return (
        <> {/* fragment */}
           <div>
            <h3>Lista de Bancos</h3>
                <ul>
                    {bancos.map((a) => (
                    <li key={a.id}>
                    {a.id} — {a.name}
                    </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Primer