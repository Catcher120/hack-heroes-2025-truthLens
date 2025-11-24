import "./style/StartAnalyseButton.css";

export default function StartAnalyseButton({ input, setData, inputType, }) {

  async function handleUpload() {
    if (inputType) {
      // fota
      if (!input) return alert("Wybierz plik!");
      const formData = new FormData();
      formData.append("image", input); // "image" to nazwa pola

      try {
        const res = await fetch("http://localhost:3000/api/analyze-image", {
          method: "POST",
          body: formData,
        });

        const data = await res.json();
        console.log("Odpowiedź:", data);
        setData(() => data);
      } catch (err) {
        console.error("Błąd:", err);
      }
    } else {
      // tekst
      if (!input) return alert("Pole jest puste");
      const body = {
        text: input,
        model: "pro"
      };

      const res = await fetch("http://localhost:3000/api/analyze-text", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // <-- ważne!
        },
        body: JSON.stringify(body),
      });

      const data = await res.json();
      setData(() => data);
    }

  }

  
  return (
    <button onClick={handleUpload} className="start-analyse-button">
      Start
    </button>
  );
}
