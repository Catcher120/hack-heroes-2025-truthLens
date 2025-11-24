import "./style/Footer.css";

export default function Footer() {
  return (
    <>
      <footer className="main-footer">
        <p>
          TruthLens jest narzędziem edukacyjnym. Wyniki analizy mają charakter
          pomocniczy i nie zastępują profesjonalnego fact-checkingu ani
          oficjalnych komunikatów instytucji.
        </p>
        <div className="made-by">
          <h3>Stworzone przez:</h3>
          <ul>
            <li>- Bartosz Bartocha</li>
            <li>- Piotr Słomka</li>
            <li>- Filip Jastrzębski</li>
            <li>- Władysław Waśkiewicz</li>
            <li>- Jakub Pluczak</li>
          </ul>
        </div>
      </footer>
    </>
  );
}
