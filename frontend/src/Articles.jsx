import React from 'react';
const articles = [
    {
        id: 1,
        title: "교육계에 드리운 '인공지능' 남용... 이럴 때가 아니다",
        photo: 'https://ojsfile.ohmynews.com/STD_IMG_FILE/2023/0723/IE003181150_STD.jpg',
        link: 'https://www.ohmynews.com/NWS_Web/View/at_pg.aspx?CNTN_CD=A0002946880'
    },
    {
        id: 2,
        title: ' "인공지능 남용 예의주시…강력하게 법 집행할 것" ',
        photo: 'http://img.wowtv.co.kr/wowtv_news/dnrs/20230504/B20230504052324607.jpg',
        link:'https://www.wowtv.co.kr/NewsCenter/News/Read?articleId=A202305040351'
    },
    {
        id: 3,
        title: '"AI 기술 남용 좌시않을 것" 美 당국, 전방위 규제 한 목소리',
        photo: 'https://cdn.digitaltoday.co.kr/news/photo/202304/475023_443718_407.jpg',
        link: 'https://www.digitaltoday.co.kr/news/articleView.html?idxno=475023'
    },
    {
        id: 5,
        title: '[챗GPT와 윤리②] “AI는 무조건 좋은 기술?” AI 악용 사례 등장',
        photo: 'https://cdn.startuptoday.kr/news/photo/202306/47031_33957_211.jpg',
        link: 'https://www.startuptoday.kr/news/articleView.html?idxno=47031'
    },
    {
        id: 5,
        title: '사고·논란 9년 새 26배 급증… ‘FATE’ 확보에 ‘운명’ 달렸다 [심층기획-AI 앞에 선 민주주의]',
        photo: 'https://mimg.segye.com/content/image/2023/09/05/20230905515412.jpg',
        link: 'https://m.segye.com/view/20230905514810'
    },
    {
        id: 6,
        title: '尹 “가짜뉴스 AI로 확산, 자유민주주의 훼손… AI 질서규범 확립을” ',
        photo: 'https://mimg.segye.com/content/image/2023/09/13/20230913517905.jpg',
        link: 'https://m.segye.com/view/20230913517149'
    },
];

const Article = ({ id, title, photo, link }) => {
    return (
        <div className="article" onClick={() => window.open(link, '_blank')}>
            <img src={photo} alt={title}/>
            <h2>{title}</h2>
        </div>
    );
};


export const Articles = () => {
    return (
        <div className="articles">
            {articles.map((article) => (
                <Article key={article.id} {...article} />
            ))}
        </div>
    );
};
