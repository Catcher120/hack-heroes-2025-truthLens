export function validateText(req, res, next) {
    const { text } = req.body;
  
    if (!text) {
      return res.status(400).json({ error: "Missing text field" });
    }
    if (text.length > 5000) {
      return res.status(400).json({ error: "Text too long" });
    }
    next();
  }
  
  export function validateImage(req, res, next) {
    if (!req.file) {
      return res.status(400).json({ error: "Missing image file" });
    }
    next();
  }
  