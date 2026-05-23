# AI Startup Analyzer

## Project Structure

```
ai-startup-analyzer/
├── frontend/          ← React/TypeScript code
│   ├── package.json
│   ├── src/
│   │   ├── components/
│   │   │   ├── AiVerdict.tsx
│   │   │   ├── CompetitorTable.tsx
│   │   │   ├── FundingBreakdown.tsx
│   │   │   ├── GridBackground.tsx
│   │   │   ├── LoadingScreen.tsx
│   │   │   ├── MetricCard.tsx
│   │   │   ├── NavLink.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── ScoreRing.tsx
│   │   │   ├── StartupForm.tsx
│   │   │   ├── SwotAnalysis.tsx
│   │   │   └── VolatilityChart.tsx
│   │   └── ...
│   └── ...
├── backend/           ← Python/FastAPI code
│   ├── main.py
│   ├── requirements.txt
│   ├── Procfile
│   └── ...
├── README.md
└── .gitignore
```

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Run the server:
```bash
uvicorn main:app --host 0.0.0.0 --port 8000
```

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Features

- **AI-Powered Analysis**: Comprehensive startup evaluation using AI
- **SWOT Analysis**: Strengths, Weaknesses, Opportunities, and Threats breakdown
- **Competitor Analysis**: Market share and threat level assessment
- **Funding Readiness**: Visual metrics for funding preparation
- **Risk Assessment**: Volatility trends and risk analysis
- **Interactive Dashboard**: Beautiful, responsive UI with animations

## Technology Stack

### Frontend
- React 18+
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Recharts (data visualization)
- Lucide React (icons)

### Backend
- FastAPI
- Pydantic
- Uvicorn
- Python 3.8+

## Environment Variables

Create a `.env` file in the backend directory:
```
DATABASE_URL=your_database_url
API_KEY=your_api_key
```

## Contributing

Feel free to submit issues and enhancement requests!

## License

MIT License - feel free to use this project for your own purposes.
