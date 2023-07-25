export default function Selector({defaultKey, type, onChangeCallback}) {
    const cycle = [
        'F',
        'C',
        'G',
        'D',
        'A',
        'E',
        'B',
        'B♭',
        'E♭',
        'A♭',
        'D♭',
        'G♭',
        'C♭',
    ]

    const types = [
        'major',
        'minor'
    ]

    return (
        <div className="selector">
            <div className="selector__head">
                <h1>{defaultKey}</h1>
                <div>
                    {
                        types.map(typeLabel => 
                            (<button  onClick={() => {onChangeCallback(defaultKey, typeLabel)}} className={type == typeLabel ? 'active' : null} key={typeLabel}>{typeLabel}</button>)
                        )
                    }
                </div>
            </div>
            <ul>
                {cycle.map(c =>
                    (<li className={defaultKey == c ? 'active' : null} key={c} onClick={() => {onChangeCallback(c)}}>{c}</li>)
                )}
            </ul>
        </div>
    )
}