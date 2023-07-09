import { useState } from 'react'
import Scale from "./utils/scale.class.js";
import Degree from "./components/Degree.jsx";
import Selector from "./components/Selector.jsx";

function App() {
  const [key, setKey] = useState({
    fonda: 'C',
    type: 'major',
    view: 'degree',
    scale: new Scale('C')
  })

  function changeKey (fonda){
    setKey(state => ({
      fonda: fonda,
      type: 'major',
      view: 'degree',
      scale: new Scale(fonda)
    }))
  }

  const iterations = Array.from({length: 7}, (_, index) => index)

  return (
    <main>
      <aside>
        <Selector onChangeCallback={changeKey}></Selector>
      </aside>
      <article>
        <ul className="degrees__list">
          {
            iterations.map((iteration) =>
              (
                <li key={iteration}>
                  <Degree degree={key.scale.degrees[iteration]} mode={key.scale.modes[iteration]}/>
                </li>
              )
            )
          }
        </ul>
      </article>
    </main>
  )
}

export default App
