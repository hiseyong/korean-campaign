import React, { useState } from 'react';
import axios from 'axios';
export function Main() {
    const client = axios.create()
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [reason, setReason] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Age: ${age}, Reason: ${reason}`);
        client.post('/survey/submit/', {
            "age": age,
            "reason": reason
        })
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
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
                    <input type="radio" name="reason" value="프로그램 개발" checked={reason === "프로그램 개발"} onChange={(event) => setReason(event.target.value)} />
                    프로그램 개발
                </label>
                <br />
                <label>
                    <input type="radio" name="reason" value="정보 탐색" checked={reason === "정보 탐색"} onChange={(event) => setReason(event.target.value)} />
                    정보 탐색
                </label>
                <br />
                <label>
                    <input type="radio" name="reason" value="아이디어 구상" checked={reason === "아이디어 구상"} onChange={(event) => setReason(event.target.value)} />
                    아이디어 구상
                </label>
                <br />
                <label>
                    <input type="radio" name="reason" value="오락" checked={reason === "오락"} onChange={(event) => setReason(event.target.value)} />
                    오락
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
