export const Experience = (props) => {
    const { title, reponsibilites } = props;
    
    return (
        <>
            <span>{title}</span>
            <ul>
                {reponsibilites.map(r => <li>{r}</li>)}
            </ul>
        </>
    )
}