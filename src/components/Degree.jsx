export default function Degree({ view, degree, mode, soundCallback }) {
  return (
    <div className="degree">
      <span className="degree__index">
        {degree.roman}
      </span>
      <div className="degree__infos">
        <div className="degree__infos__title">
          <h2>
            {view === 'degree' ? degree.notation : mode.name}
          </h2>
          <a onClick={() => soundCallback(view === 'degree' ? degree.notes : mode.notes, view === 'degree' ? 'degree' : 'mode')}>
            <i className="mdi mdi-volume-high"></i>
          </a>
        </div>
        <ul className="degree__infos__content">
          {mode.notes.map(note => (
            <li key={note} className={view === 'degree' && degree.notes.includes(note) ? 'active' : null}>{note}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
