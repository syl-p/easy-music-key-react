import { useParams } from "react-router-dom";
import ScaleClass from "../utils/scale.class";
import TonePlayerClass from "../utils/tone-player.class";
import Degree from "./Degree";

export default function MainContent() {
    const tone = new TonePlayerClass()
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
    const {key} = useParams()
    const scale = new ScaleClass(key ? key : 'C')

    return <>
        {
            scale && <ul className="degrees__list">
                {iterations.map((iteration) =>
                    (
                    <li key={iteration} className='degrees__list__item'>
                        <Degree 
                            view="degree" 
                            degree={scale.degrees[iteration]} 
                            mode={scale.modes[iteration]} 
                            soundCallback={sound}
                            />
                    </li>
                    )
                )}
            </ul>
        }
    </>
}