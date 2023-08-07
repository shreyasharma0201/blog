function Props(props){
    return (
        <div>
            <h2>{props.name}</h2>
            <h3>{props.subject}</h3>
            <h4>{props.children}</h4>
        </div>
    )
}
 
export default Props