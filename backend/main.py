from fastapi import FastAPI, HTTPException

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS 설정
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 또는 특정 origin URL을 허용할 수 있습니다.
    allow_credentials=True,
    allow_methods=["*"],  # 또는 허용하려는 HTTP 메서드를 지정합니다.
    allow_headers=["*"],  # 또는 허용하려는 헤더를 지정합니다.
)

# 임시 데이터베이스 역할을 할 변수
survey_data = {"업무 자동화": 0, "프로그램 개발":0, "정보 탐색":0, "아이디어 구상":0, "오락":0, "기타":0}

# 설문 조사 제출 엔드포인트
@app.post("/survey/submit/")
async def submit_survey(data: dict):
    survey_data[data['reason']] = survey_data[data['reason']] + 1
    print(survey_data)
    return {"message": "Survey submitted successfully"}

# 설문 조사 조회 엔드포인트
@app.get("/survey/get/")
async def get_survey():
    return survey_data

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)