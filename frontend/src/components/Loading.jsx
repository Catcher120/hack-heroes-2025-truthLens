import "./style/Loading.css"

export default function Loading({}) {
  return (
    <>
      <div className="loader-wrapper">
        <div className="spinner"></div>
        <h3 className="info">Przetwarzamy twoje zapytanie</h3>
      </div>
    </>
  );
}
