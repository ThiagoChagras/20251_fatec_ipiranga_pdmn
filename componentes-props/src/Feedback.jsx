//rafce

const Feedback = ({textoOk, funcaoOk, textoNOK, funcaoNOK}) => {
    return (
        <div className="d-flex justify-content-evenly mt=2">
            <button className="btn btn-primary"onClick={funcaoOk}>
                {textoOk}
            </button>
            <button className="btn btn-danger"onClick={funcaoNOK} >
                {textoNOK}
            </button>
        </div>
  )
}
export default Feedback;
