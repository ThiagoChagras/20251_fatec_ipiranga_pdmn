const Cartao = (props) => {
    return(
        <div className="card">
            <div className="card-header text-muted">
                {props.cabecalho}
            </div>
            <div className="card-body d-flex">
                {props.children}</div>
            
        </div>
    )
}

export default Cartao