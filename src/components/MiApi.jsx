import React from 'react';
import { useState, useEffect } from 'react';

const MiAppi = () => {

  //estado par acarga de la APPI
  const [sismos, setSismos] = useState([]);

  // Estado para capturar el input
  const [inputMagnitud, setInputMagnitud] = useState("");

   // Estado para reverse
   const [btnReverse, setBtnReverse] = useState("");

  // LLamamos al función que consume la API al momento de montar elcomponente
  useEffect(() => {
    consultarInformacion();
  }, []);

  //Efecto cuando el campo email cambia en el formulario
  useEffect(() => {
    console.log('tremendo remesón');
  }, [inputMagnitud]);

    //Efecto boton reverse
    useEffect(() => {
      console.log('patas par arriba');
    }, [setBtnReverse]);
  


  //Función que consulta la API
  const consultarInformacion = async () => {
    const url = 'https://api.gael.cloud/general/public/sismos';
    const response = await fetch(url)
    const data = await response.json()
    console.log('dame un remesón')
    console.log(data)
    setSismos([...sismos, ...data]);

  }

//Función reverse
const reversarInformación = async () => {
  console.log('patas par abajo');
  sismos.reverse

}




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
           <button className='btn btn-primary' onClick={() => reversarInformación()}>reverse</button>
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