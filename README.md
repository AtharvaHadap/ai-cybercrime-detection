# ai-cybercrime-detection
AI-Powered Cybercrime Detection System

# 🛡️ AI Cybercrime Detection System

![Status](https://img.shields.io/badge/Status-Live-brightgreen)
![Node](https://img.shields.io/badge/Node.js-v24-blue)
![AI](https://img.shields.io/badge/AI-Gemini%202.5%20Pro-orange)
![License](https://img.shields.io/badge/License-MIT-purple)

A powerful web-based cybersecurity tool that uses **Google Gemini 2.5 Pro AI** to detect deepfakes, phishing attempts, and social engineering attacks in real time.

---

## 🌟 Features

| Feature | Description |
|--------|-------------|
| 🎭 Deepfake Detector | Upload any image to check if it's real, a deepfake, or AI-generated |
| 🎣 Phishing Scanner | Paste any suspicious email or message to detect phishing attempts |
| 🧠 Social Engineering Detector | Analyze messages for psychological manipulation tactics |

---

## 🖥️ Demo

> Run locally and open `http://localhost:3000` in your browser

![App Screenshot]([https://raw.githubusercontent.com/AtharvaHadap/ai-cybercrime-detection/main/screenshot.png](https://github.com/AtharvaHadap/ai-cybercrime-detection/blob/main/Screenshot.png))

---

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Backend:** Node.js, Express.js
- **AI Engine:** Google Gemini 2.5 Pro
- **Libraries:** Multer, Dotenv

---

## ⚙️ Installation & Setup

### Prerequisites
- Node.js v18 or higher
- Google Gemini API Key (free at [aistudio.google.com](https://aistudio.google.com))

### Steps

**1. Clone the repository**
```bash
git clone https://github.com/YOUR-USERNAME/ai-cybercrime-detection.git
cd ai-cybercrime-detection
```

**2. Install dependencies**
```bash
npm install
```

**3. Create environment file**

Create a `.env` file in the root folder:

**4. Start the server**
```bash
node server.js
```

**5. Open in browser**
http://localhost:3000

---

## 📁 Project Structure
ai-cybercrime-detection/
├── server.js          # Backend server & AI integration
├── package.json       # Project dependencies
├── .env               # API keys (not uploaded)
├── .gitignore         # Git ignore rules
└── public/
└── index.html     # Frontend UI

---

## 🚀 How It Works

1. **Deepfake Detection** — User uploads an image → Server sends it to Gemini AI → AI analyzes facial features, lighting, artifacts → Returns detailed verdict with confidence score

2. **Phishing Detection** — User pastes suspicious text → Gemini AI scans for red flags, urgency tactics, suspicious links → Returns threat assessment

3. **Social Engineering Detection** — User pastes a message → AI identifies psychological manipulation tactics → Returns warning with recommendations

---

## 👥 Team

| Name |
| Atharva Hadap |
| Chinmay Bhoge |
| Siddhi Bhaskar |
| Aditi Gupta |

---

## 📜 License

This project is licensed under the **MIT License** — feel free to use and modify!

---

## ⭐ Show Your Support

If you found this project useful, please give it a **star** ⭐ on GitHub!
