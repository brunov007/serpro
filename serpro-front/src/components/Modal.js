export function Modal({ handleClose, show, children }){
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    return (
        <div className={showHideClassName}>
          <section className="modal-main"> 
            {children}
            <div className="w-full h-1 bg-gray-100 mt-5"/>
            <button type="button" onClick={handleClose} className="mt-5 btn-modal">
              Fechar
            </button>
          </section>
        </div>
      );
}