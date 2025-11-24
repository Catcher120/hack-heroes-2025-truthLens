import "./style/Choice.css"
export default function Choice({buttonHandler, inputType}) {
  return (
    <>
      <section className="choice-wrapper">
        <h2>Analizuj</h2>
        <div className="sub-wrapper">
          <h3>Tekst</h3>
          <button
            className={
              (inputType
                ? "choice-input-button-left"
                : "choice-input-button-right") + " choice-input-button"
            }
            onClick={buttonHandler}
          >
            <div className="circle"></div>
          </button>
          <h3>Zdjęcie</h3>
        </div>
      </section>
    </>
  );
}
