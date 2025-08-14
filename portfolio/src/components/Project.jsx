export const Project = (props) => {
    const { name, technologies, architecture, objective, description, } = props;

    return (
        <div className="project">
            <h3>{name}</h3>
            <p className="technologies">
                <strong>Technologies:</strong> {technologies}
            </p>
            <p className="architecture">
                <strong>Architecture:</strong> {architecture}
            </p>
            <p className="objective">
                <strong>Objective:</strong> {objective}
            </p>
            <p className="description">
                <strong>Description:</strong> {description}
            </p>
        </div>
    );      
}