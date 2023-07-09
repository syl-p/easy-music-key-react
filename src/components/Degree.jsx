export default function Degree({degree, mode}){
  return (
    <div className="degree">
      <span className="degree__index">
        {degree.roman}
      </span>
      <div className="degree__infos">
        <div className="degree__infos__title">
          <h2>{degree.notation}</h2>
          <a href="#">
            <i className="mdi mdi-volume-high"></i>
          </a>
        </div>
        <ul className="degree__infos__content">
          {mode.notes.map(note => (
            <li key={note} className={degree.notes.includes(note) ? 'active' : null}>{note}</li>
          ))}
        </ul>
        <p>Mode: {mode.name}</p>
      </div>
    </div>
  )
}