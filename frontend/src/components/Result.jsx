import "./style/Result.css";

export default function Result({ data, setData }) {
  let color;
  if (data != null) {
    if (data.credibilityScore < 50) {
      color = "var(--green-600)";
    } else if (data.credibilityScore < 75) {
      color = "var(--yellow-600)";
    } else {
      color = "var(--red-600)";
    }
  }
  return (
    <>
      <div className="result-wrapper">
        {data == null && <p>Tutaj pojawi się wynik twojej analizy</p>}
        {data != null && (
          <section className="data-wrapper">
            <div className="credibility-score">
              <h3>Poziom zaufania: {data.credibilityScore}%</h3>
              <div className="progress-bar">
                <div
                  className="fill"
                  style={{
                    width: data.credibilityScore + "%",
                    backgroundColor: color,
                  }}
                ></div>
              </div>
            </div>
            <div className="risk-level">
              <h3>
                Poziom ryzyka:{" "}
                <span style={{ color: color }}>{data.riskLevel}</span>
              </h3>
            </div>
            <div className="flags">
              <h2>Tematy:</h2>
              {data.flags.map((element, idx) => {
                return <h3 key={idx}>- {element}</h3>;
              })}
            </div>
            <div className="explanation">
              <h2>Wyjaśnienie:</h2>
              <p>{data.explanation}</p>
            </div>
            <div className="advice">
              <h2>Porada:</h2>
              <p>{data.advice}</p>
            </div>
            <div className="truth">
              <h2>Prawda:</h2>
              <p>{data.truth}</p>
            </div>
          </section>
        )}
      </div>
    </>
  );
}
