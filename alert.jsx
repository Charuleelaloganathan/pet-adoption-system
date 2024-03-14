import './alert.css'
const Modal = (props) => {
    return (
      <section>
        <div className="modalBackdrop" />
        <FancyBorder className="modal-container">
          <header>
            <h2>An error occured!</h2>
          </header>
          <div className="error-msg">
            <p>All fields are require</p>
          </div>
          <footer className="modal-close">
            <button type="button">close</button>
          </footer>
        </FancyBorder>
      </section>
    )
   }
   
   export default Modal