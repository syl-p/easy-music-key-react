import { useState } from 'react'
import Scale from "./utils/scale.class.js";
import Degree from "./components/Degree.jsx";
import Selector from "./components/Selector.jsx";
import TonePlayer from "./utils/tone-player.class.js";

function App() {
  const tone = new TonePlayer()
  const [key, setKey] = useState({
    fonda: 'C',
    type: 'major',
    view: 'degree',
    scale: new Scale('C'),
  })

  function changeKey (fonda, type = 'major'){
    console.log(fonda, type)
    setKey(state => ({
      fonda: fonda,
      type: type,
      view: 'degree',
      scale: new Scale(fonda)
    }))
  }

  function changeView (view) {
    setKey(state => ({
      fonda: state.fonda,
      type: state.type,
      view: view,
      scale: new Scale(state.fonda)
    }))
  }

  function sound(notes, mode) {
    switch (mode) {
      case 'mode':
        tone.play_note_by_note(notes)
        break;
      default:
        tone.play_chord(notes)
        break;
    }
  }

  const iterations = Array.from({length: 7}, (_, index) => index)

  return (
    <main>
      <aside>
        <Selector onChangeCallback={changeKey} defaultKey={key.fonda} type={key.type}></Selector>
      </aside>
      <section>
        <nav>
          <ul>
            <li>
              <a onClick={() => changeView('degree')} className={ key.view === 'degree' ? 'active' : null}>
                Degrees
              </a>
            </li>
            <li>
              <a onClick={() => changeView('mode')} className={ key.view === 'mode' ? 'active' : null}>
                Modes
              </a>
            </li>
          </ul>
        </nav>
        <article>
          <ul className="degrees__list">
            {
              iterations.map((iteration) =>
                (
                  <li key={iteration} className='degrees__list__item'>
                    <Degree view={key.view} degree={key.scale.degrees[iteration]} mode={key.scale.modes[iteration]} soundCallback={sound}/>
                  </li>
                )
              )
            }
          </ul>
        </article>
      </section>
    </main>
  )
}

export default App
