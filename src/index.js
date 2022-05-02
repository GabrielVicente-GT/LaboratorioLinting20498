import React from 'react'
import ReactDOM from 'react-dom/client'
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

const App = () => {
  const [esquemaTotal, setesquemaTotal] = React.useState([[]])
  const [alturapx, setAlturapx] = React.useState(3)
  const [anchopx, setAnchopx] = React.useState(5)

  const alturaReal = parseInt(alturapx, 10) * 2 + 1
  const amplitudReal = parseInt(anchopx, 10) * 3 + 1

  const estiloCompleto = css`
    display: grid;
    background: black;
    color: white;
    text-align:center
    grid-template-rows: repeat(${alturaReal}, 20px);
    grid-template-columns: repeat(${amplitudReal}, 40px);
  `

  const headerStyle = css`
    text-align:center;
    background-color:#212F3D;
    font-family:Serifa;
    color:white
`

  const murosStyle = css`
    width: 40px; 
    height: 40px; 
    background: white;
    clip-path: polygon(0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0%);

`
  const jugadoresStyle = css`
    width: 40px; 
    height: 40px; 
    background: red;
    clip-path: polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%);
`
  const jugadores2Style = css`
    width: 40px; 
    height: 40px; 
    background: green;
    clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
`

  const botonStyle = css`
    width:100px;
    background:black;
    color:white;
    font-family:Serifa;
`
  const espacioStyle = css`
    width:100px;
    height:20px;
`

  const numerosStyle = css`
    display: flex;
    flex-direction:column;
    align-items:center;
    background-color:white;
    width:100px
    color:white;
`

  const laboratorioStyle = css`
    display: flex;
    flex-direction:column;
    align-items:center;
    background-color:#212F3D;
`

  const construyendo = async (ancho, alto) => {
    const laberintoObtenido = await fetch(`https://maze.juanelcaballo.club/?type=json&w=${ancho.toString()}&h=${alto.toString()}`).then((laberintoObtenido) => laberintoObtenido.json()).then((data) => data).catch((error) => console.log(error))
    return laberintoObtenido
  }

  const Jugando = async () => {
    const newLabyrinth = await construyendo(anchopx, alturapx)
    setesquemaTotal(newLabyrinth)
  }

  const setalto = (recibiendo) => {
    const alto = recibiendo.target.value
    setAlturapx(alto)
  }

  const setancho = (recibiendo) => {
    const ancho = recibiendo.target.value
    setAnchopx(ancho)
  }

  const movimientoLaberinto = () => {
    // eslint-disable-next-line no-restricted-globals
    const movimiento = event.key.toLowerCase()
    if (movimiento === 'a' || movimiento === 'arrowleft') {
      setesquemaTotal((laberinto) => {
        const temp = [...laberinto]
        const y = temp.findIndex((row) => row.indexOf('p') > -1)

        const x = temp[y].findIndex((column) => column === 'p')

        if (temp[y][x - 1] === '|' || temp[y][x - 1] === '+') {
          console.log('muro encontrado')
        } else if (temp[y][x - 1] === 'g') {
          alert('Laberinto completado, se liberara otro laberinto. INTENTA CAMBIAR LOS VALORES DE ARRIBA')
          temp[y][x] = ' '
          temp[y][x - 1] = 'p'
          Jugando()
        } else {
          temp[y][x] = ' '
          temp[y][x - 1] = 'p'
        }

        return temp
      })
    } else if (movimiento === 's' || movimiento === 'arrowdown') {
      setesquemaTotal((laberinto) => {
        const temp = [...laberinto]
        const y = temp.findIndex((row) => row.indexOf('p') > -1)

        const x = temp[y].findIndex((column) => column === 'p')

        if (temp[y + 1][x] === '-' || temp[y + 1][x] === '+') {
          console.log('muro encontrado')
        } else if (temp[y + 1][x] === 'g') {
          alert('Laberinto completado, se liberara otro laberinto. INTENTA CAMBIAR LOS VALORES DE ARRIBA')
          temp[y][x] = ' '
          temp[y + 1][x] = 'p'
          Jugando()
        } else {
          temp[y][x] = ' '
          temp[y + 1][x] = 'p'
        }

        return temp
      })
    } else if (movimiento === 'd' || movimiento === 'arrowright') {
      setesquemaTotal((laberinto) => {
        const temp = [...laberinto]
        const y = temp.findIndex((row) => row.indexOf('p') > -1)

        const x = temp[y].findIndex((column) => column === 'p')

        if (temp[y][x + 1] === '|' || temp[y][x + 1] === '+') {
          console.log('muro encontrado')
        } else if (temp[y][x + 1] === 'g') {
          alert('Laberinto completado, se liberara otro laberinto. INTENTA CAMBIAR LOS VALORES DE ARRIBA')
          temp[y][x] = ' '
          temp[y][x + 1] = 'p'
          Jugando()
        } else {
          temp[y][x] = ' '
          temp[y][x + 1] = 'p'
        }

        return temp
      })
    } else if (movimiento === 'w' || movimiento === 'arrowup') {
      setesquemaTotal((laberinto) => {
        const temp = [...laberinto]
        const y = temp.findIndex((row) => row.indexOf('p') > -1)

        const x = temp[y].findIndex((column) => column === 'p')

        if (temp[y - 1][x] === '-' || temp[y - 1][x] === '+') {
          console.log('muro encontrado')
        } else if (temp[y - 1][x] === 'g') {
          alert('Laberinto completado, se liberara otro laberinto. INTENTA CAMBIAR LOS VALORES DE ARRIBA')

          temp[y][x] = ' '
          temp[y - 1][x] = 'p'
          Jugando()
        } else {
          temp[y][x] = ' '
          temp[y - 1][x] = 'p'
        }

        return temp
      })
    }
  }

  React.useEffect(() => {
    Jugando()
  }, [])

  window.onkeydown = movimientoLaberinto

  return (
    <div className="laboratorio-cont" css={laboratorioStyle}>
      <h1 css={headerStyle}>Laberinto 20498</h1>
      <button type="button" css={botonStyle} onClick={Jugando}>Play!</button>
      <div className="Espacio" css={espacioStyle} />
      <input type="number" css={numerosStyle} placeholder="Amplitud" onChange={setancho} />
      <div css={espacioStyle} />
      <input type="number" css={numerosStyle} placeholder="Longitud" onChange={setalto} />
      <div css={espacioStyle} />
      <div className="tablero" id="grid" css={estiloCompleto}>
        {
          esquemaTotal.map((linea, indexA) => linea.map((fragmento, indexB) => {
            if (fragmento === '-' || fragmento === '|' || fragmento === '+') {
              return <div key={(indexA * 10 + indexB + 1).toString()} css={murosStyle} />
            } else if (fragmento === 'p') {
              return <div key={(indexA * 10 + indexB + 100).toString()} css={jugadoresStyle} />
            } else if (fragmento === 'g') {
              return <div key={(indexA * 10 + indexB + 100).toString()} css={jugadores2Style} />
            }
            return <p key={(indexA * 10 + indexB + 100).toString()}>{fragmento}</p>
          }))
      }
      </div>
      <div css={espacioStyle} />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
