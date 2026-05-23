# AI Startup Analyzer

An intelligent startup analysis platform powered by FastAPI and NVIDIA LLM that provides comprehensive venture capital assessments.

## Features

- **Startup Analysis**: Detailed analysis of startup potential using AI
- **Scoring System**: Multiple metrics including market opportunity, funding readiness, competitor threats
- **SWOT Analysis**: Strengths, weaknesses, opportunities, and threats assessment
- **Competitor Analysis**: Automatic competitor identification and threat assessment
- **Investor Appeal**: Rating for investment potential

## Technology Stack

- **Framework**: FastAPI
- **Server**: Uvicorn
- **Validation**: Pydantic
- **API**: NVIDIA LLM Integration (Llama 3.1-70B)

## Setup

1. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

2. Set up environment variables in `.env`:
   ```
   NVIDIA_API_KEY=your_key_here
   ```

3. Run the server:
   ```bash
   uvicorn main:app --reload
   ```

## API Endpoints

### POST /analyze
Analyzes a startup and returns detailed analysis metrics.

**Request Body:**
```json
{
  "name": "Startup Name",
  "industry": "Tech",
  "stage": "Series A",
  "description": "Brief description",
  "targetMarket": "Global",
  "monthlyBudget": 50000
}
```

### GET /
Health check endpoint.

## Response Format

Returns a JSON object with:
- `overallScore`: Overall investment potential (0-100)
- `marketOpportunity`: Market viability score
- `volatilityIndex`: Risk assessment
- `fundingReadiness`: Funding preparation score
- `competitorThreat`: Competitive landscape analysis
- `swot`: SWOT analysis breakdown
- `funding`: Detailed scoring metrics
- `verdict`: Expert analysis summary
- `investorAppeal`: Investment recommendation
- `actionItems`: Improvement suggestions
