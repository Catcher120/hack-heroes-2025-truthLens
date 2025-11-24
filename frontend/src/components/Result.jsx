import "./style/Result.css";

export default function Result({ data, setData }) {
  let trustColor;
  let riskColor;
  if (data != null) {
    if (data.credibilityScore < 50) {
      trustColor = "var(--red-600)";
    } else if (data.credibilityScore < 75) {
      trustColor = "var(--yellow-600)";
    } else {
      trustColor = "var(--green-600)";
    }
  }
  if (data != null) {
    if (data.riskLevel == "low") {
      riskColor = "var(--green-600)";
    } else if (data.riskLevel == "medium") {
      riskColor = "var(--yellow-600)";
    } else {
      riskColor = "var(--red-600)";
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
                    backgroundColor: trustColor,
                  }}
                ></div>
              </div>
            </div>
            <div className="risk-level">
              <h3>
                Poziom ryzyka:{" "}
                <span style={{ color: riskColor }}>{data.riskLevel}</span>
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
