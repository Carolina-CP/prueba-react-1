import React from 'react';
import { useState, useEffect } from 'react';

const MiAppi = () => {

  //creamos estado para acarga de la APPI
  const [sismos, setSismos] = useState([]);

  // creamos estado para capturar el input
  const [inputMagnitud, setInputMagnitud] = useState("");

  // creamos estado para capturar actividad del botón reverse
  const [btnReverse, setBtnReverse] = useState("");

  // LLamamos al función que consume la API al momento de montar el componente
  useEffect(() => {
    consultarInformacion();
  }, []);

  //Función que consulta la API
  const consultarInformacion = async () => {
    const url = 'https://api.gael.cloud/general/public/sismos';
    const response = await fetch(url)
    const data = await response.json()
    console.log('ta temblando...')
    console.log(data)
    setSismos([...sismos, ...data]);
  }

  //Función reverse, esto no lo logré
  const revertirOrden = sismos.reverse();
  console.log(revertirOrden);


  return (
    <div className='container'>
      <h3>Buscadores</h3>
      <form className="form-group mb-2">
        <input
          className='w-10 m-2 me-4'
          type="text"
          placeholder="magnitud"
          name={inputMagnitud}
          value={inputMagnitud}
          onChange={(e) => setInputMagnitud(e.target.value)}
        />
        <button className='btn btn-primary' onClick={() => revertirOrden()}>Revertir Orden</button>
      </form>

      <div className='row' >
        {sismos
          .filter((el) => {
            if (inputMagnitud === '') {
              return el;
            } else if (el.Magnitud
              .toLocaleLowerCase()
              .includes(inputMagnitud.toLocaleLowerCase())
            ) {
              return el;
            }
          }).map(s =>
            <div className='card col-md-3 m-2'>
              <h5 class="card-title pt-2"><p>{s.Magnitud}</p></h5>
              <p>{s.RefGeografica}</p>

              <div class="card-footer"><small class="text-muted"><p>{s.Fecha}</p></small></div>
            </div>)}
      </div>
    </div>
  )
}

export default MiAppi