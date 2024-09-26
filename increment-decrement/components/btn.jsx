export function Button(props) {
    return (
        <>
            <button className="btn btn-primary" onClick={props.onclick}>{props.texto}</button>
        </>
    )
}