from fastapi import FastAPI, HTTPException

app = FastAPI()

# 임시 데이터베이스 역할을 할 변수
survey_data = []

# 설문 조사 제출 엔드포인트
@app.post("/survey/submit/")
async def submit_survey(data: dict):
    survey_data.append(data)
    return {"message": "Survey submitted successfully"}

# 설문 조사 조회 엔드포인트
@app.get("/survey/get/")
async def get_survey():
    if not survey_data:
        raise HTTPException(status_code=404, detail="No survey data available")
    return survey_data

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)