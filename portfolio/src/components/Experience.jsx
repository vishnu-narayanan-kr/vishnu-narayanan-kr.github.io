export const Experience = (props) => {
    const { title, reponsibilites, location, time } = props;
    
    return (
        <>
            <span>{title}</span>
            &nbsp;|&nbsp;
            {location && <span className="location">{location}</span>}
            &nbsp;|&nbsp;
            {time && <span className="time">{time}</span>}
            <ul>
                {reponsibilites.map((r, i) => <li key={i}>{r}</li>)}
            </ul>
        </>
    )
}