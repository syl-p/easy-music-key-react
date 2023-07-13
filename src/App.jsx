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

  function changeKey (fonda){
    setKey(state => ({
      fonda: fonda,
      type: 'major',
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

  function sound(notes) {
    tone.play_chord(notes)
  }

  const iterations = Array.from({length: 7}, (_, index) => index)

  return (
    <main>
      <aside>
        <Selector onChangeCallback={changeKey}></Selector>
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
                  <li key={iteration}>
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
