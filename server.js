const express = require('express');
const multer = require('multer');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const dotenv = require('dotenv');
const fs = require('fs');

dotenv.config();

const app = express();
const upload = multer({ dest: 'uploads/' });
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.use(express.static('public'));
app.use(express.json());

app.post('/analyze', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) return res.json({ error: 'No image uploaded' });
    const imageData = fs.readFileSync(req.file.path);
    const base64Image = imageData.toString('base64');
    const mimeType = req.file.mimetype;
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-pro' });
    const prompt = 'You are a deepfake detection expert. Analyze this image and provide: 1. VERDICT: REAL, DEEPFAKE, or AI-GENERATED 2. CONFIDENCE: percentage 3. INDICATORS: list 3-5 visual indicators 4. FACE ANALYSIS: facial features and lighting 5. ARTIFACTS: digital artifacts or inconsistencies 6. RECOMMENDATION: what user should do. Be specific and technical.';
    const result = await model.generateContent([prompt, { inlineData: { data: base64Image, mimeType: mimeType } }]);
    const response = await result.response;
    const text = response.text();
    fs.unlinkSync(req.file.path);
    res.json({ analysis: text });
  } catch (error) {
    console.error('Error:', error);
    res.json({ error: 'Analysis failed: ' + error.message });
  }
});

app.post('/analyze-text', async (req, res) => {
  try {
    const { text, type } = req.body;
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-pro' });
    let prompt = '';
    if (type === 'phishing') {
      prompt = 'You are a cybersecurity expert. Analyze this for phishing: ' + text + '. Provide: 1. VERDICT: PHISHING, SUSPICIOUS, or LEGITIMATE 2. CONFIDENCE: percentage 3. RED FLAGS: specific indicators 4. TACTICS USED: social engineering tactics 5. RECOMMENDATION: what user should do.';
    } else {
      prompt = 'You are a social engineering expert. Analyze this message: ' + text + '. Provide: 1. VERDICT: SOCIAL ENGINEERING ATTEMPT, SUSPICIOUS, or LEGITIMATE 2. CONFIDENCE: percentage 3. MANIPULATION TACTICS: psychological tactics used 4. WARNING SIGNS: specific red flags 5. RECOMMENDATION: how user should respond.';
    }
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const analysisText = response.text();
    res.json({ analysis: analysisText });
  } catch (error) {
    console.error('Error:', error);
    res.json({ error: 'Analysis failed: ' + error.message });
  }
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});