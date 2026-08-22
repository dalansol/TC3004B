import React from 'react'
import {nombres} from '../assets/nombres'

function Tercero() {
  return (
    <> {/* fragment */}
        <div>
            <h3>Lista de Nombres</h3>
                <ul>
                    {nombres.map((a) => (
                    <li key={a.id}>
                    {a.id} — {a.name}
                    </li>
                    ))}
                </ul>
         </div>
    </>
  )
}

export default Tercero
