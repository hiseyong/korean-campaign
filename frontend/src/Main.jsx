import React, { useState } from 'react';

export function Main() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [reason, setReason] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Age: ${age}, Reason: ${reason}`);
        // You can replace the console.log statement with your own code to submit the form data to a server or store it in state.
    };

    return (
        <div>
            <h1>생성형 인공지능 사용 설문조사</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    연령:
                    <input type="number" value={age} onChange={(event) => setAge(event.target.value)} min="1" max="150" />
                </label>
                <br />
                <label>
                    주로 왜 생성형 인공지능을 사용하나요?:
                </label>
                <br />
                <label>
                    <input type="radio" name="reason" value="업무 자동화" checked={reason === "업무 자동화"} onChange={(event) => setReason(event.target.value)} />
                    업무 자동화
                </label>
                <br />
                <label>
                    <input type="radio" name="reason" value="데이터 분석" checked={reason === "데이터 분석"} onChange={(event) => setReason(event.target.value)} />
                    데이터 분석
                </label>
                <br />
                <label>
                    <input type="radio" name="reason" value="이미지/음성 처리" checked={reason === "이미지/음성 처리"} onChange={(event) => setReason(event.target.value)} />
                    이미지/음성 처리
                </label>
                <br />
                <label>
                    <input type="radio" name="reason" value="자연어 처리" checked={reason === "자연어 처리"} onChange={(event) => setReason(event.target.value)} />
                    자연어 처리
                </label>
                <br />
                <label>
                    <input type="radio" name="reason" value="게임 개발" checked={reason === "게임 개발"} onChange={(event) => setReason(event.target.value)} />
                    게임 개발
                </label>
                <br />
                <label>
                    <input type="radio" name="reason" value="기타" checked={reason === "기타"} onChange={(event) => setReason(event.target.value)} />
                    기타
                </label>
                <br />
                <button type="submit">제출하기</button>
            </form>
        </div>
    );
}
