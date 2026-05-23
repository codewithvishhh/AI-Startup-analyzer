from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import requests
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

NVIDIA_API_KEY = os.getenv("NVIDIA_API_KEY", "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")  

class StartupData(BaseModel):
    name: str = ""
    industry: str = ""
    stage: str = ""
    description: str = ""
    targetMarket: str = ""
    monthlyBudget: float = 0
    startupName: str = ""

    def __init__(self, **data):
        if 'startupName' in data and not data.get('name'):
            data['name'] = data['startupName']
        if isinstance(data.get('monthlyBudget'), str):
            try:
                data['monthlyBudget'] = float(data['monthlyBudget'])
            except:
                data['monthlyBudget'] = 0
        super().__init__(**data)

@app.post("/analyze")
async def analyze_startup(data: StartupData):
    prompt = f"""You are an expert startup analyst and venture capitalist. Analyze this startup and return ONLY a JSON object, no extra text, no markdown.

Startup Details:
- Name: {data.name}
- Industry: {data.industry}
- Stage: {data.stage}
- Description: {data.description}
- Target Market: {data.targetMarket}
- Monthly Budget: ${data.monthlyBudget}

Return this exact JSON:
{{
  "overallScore": <0-100>,
  "marketOpportunity": <0-100>,
  "volatilityIndex": <0-100>,
  "volatilityRisk": "Low" or "Medium" or "High",
  "fundingReadiness": <0-100>,
  "competitorThreat": <0-100>,
  "competitors": [
    {{"name": "real competitor", "marketShare": <number>, "threatLevel": "Low" or "Medium" or "High", "description": "one line"}}
  ],
  "swot": {{
    "strengths": ["point1", "point2", "point3", "point4"],
    "weaknesses": ["point1", "point2", "point3"],
    "opportunities": ["point1", "point2", "point3", "point4"],
    "threats": ["point1", "point2", "point3"]
  }},
  "funding": [
    {{"label": "Team Strength", "value": <0-100>}},
    {{"label": "Market Size", "value": <0-100>}},
    {{"label": "Revenue Model", "value": <0-100>}},
    {{"label": "Scalability", "value": <0-100>}},
    {{"label": "Innovation", "value": <0-100>}}
  ],
  "verdict": "2-3 sentence expert analysis",
  "investorAppeal": "Not Ready" or "Promising" or "Strong Buy",
  "actionItems": ["improvement1", "improvement2", "improvement3"]
}}"""

    response = requests.post(
        "https://integrate.api.nvidia.com/v1/chat/completions",
        headers={
            "Authorization": f"Bearer {NVIDIA_API_KEY}",
            "Content-Type": "application/json"
        },
        json={
            "model": "meta/llama-3.1-70b-instruct",
            "messages": [{"role": "user", "content": prompt}],
            "max_tokens": 1500,
            "temperature": 0.7
        }
    )

    result = response.json()
    text = result["choices"][0]["message"]["content"]
    
    import json, re
    clean = re.sub(r'```json|```', '', text).strip()
    return json.loads(clean)

@app.get("/")
def root():
    return {"status": "StarSense Backend Running!"}
