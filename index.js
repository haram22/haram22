import { writeFileSync } from 'node:fs';
import Parser from "rss-parser";

/**
 * README.MD에 작성될 페이지 텍스트
 * @type {string}
 */
let text = `### 🙈 Experiences

- **포항 동부초등학교 AI 교육 강사** : 2023년 9월 1일 ~ 2023년 11월 30일<br>
- **포항시 문화예술 AI 메타버스 캠프 강사** : 2024년 7월 1일 ~ 2024년 8월 30일<br>
- **[한동대학교 로봇연구실 학부연구생](https://github.com/haram22/Liku_App.git)** : 2024년 3월 1일 ~ 2024년 11월 30일<br>
- **유니트윈 캄보디아 데이터 캠프 TA** : 2023년 8월 1일 ~ 2023년 8월 13일<br>
- **[PARD (경북IT협업동아리)](https://github.com/haram22/PARD_iOS)** : 2023년 4월 1일 ~ 2024년 7월 19일<br>
- **[RA 앱 개발 (산학프로젝트)](https://github.com/haram22/RA_app_2.git)** : 2022년 10월 1일 ~ 2023년 1월 31일<br>
- **삼성 드림클래스 (대외활동)** : 2022년 6월 1일 ~ 2024년 2월 29일<br>
- **소다 학회 (앱개발 학회)** : 2021년 12월 1일 ~ 2022년 12월 6일<br>
<br>

### 🏆 Prizes

- 우수상 [하계 디자인 스프린트](https://github.com/haram22/ZeroSoda22.git) (2022 한동대학교)<br>
- 우수상	[SW Festival 스마트 애플리케이션](https://github.com/haram22/ZeroSoda22.git) (2022 한동대학교)<br>
- 장려상	[SW Festival 스마트 애플리케이션](https://github.com/haram22/mobile-app-project.git) (2022 한동대학교)<br>
- 우수상	[새싹톤](https://github.com/haram22/sessakthon.git) (2023 구름EDU & 서울경제진흥원)<br>
- 최우수상  [Long Hackathon](https://github.com/haram22/Sabotage_Client.git) (2023 PARD)<br>
- 우수상	[SW Festival 스마트 SW 공모전](https://github.com/haram22/Sabotage_Client.git) (2024 한동대학교)<br>
- 우수상	[캡스톤 Festival](https://github.com/haram22/Liku_App.git) (2024 한동대학교)<br>
- 은상	[대학생논문경진대회](https://github.com/haram22/Liku_App.git) (2024 한국정보기술학회)<br>
<br>

### 👩🏻‍💻 TeckStack 👩🏻‍💻

<a href="https://github.com/anuraghazra/github-readme-stats">
  <img src="https://github-readme-stats.vercel.app/api?username=haram22&show_icons=true&theme=material-palenight&hide_border=true&bg_color=20232a&icon_color=E3E3E3A8&text_color=fff&title_color=918FE0&count_private=true" width=50.2% />
</a>

<a href="https://github.com/haram22/github-stats">
<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=haram22&layout=compact&theme=material-palenight&hide_border=true&bg_color=20232a&icon_color=E3E3E3A8&text_color=fff&title_color=918FE0&count_private=true" width=38.2% />
  
</a>
<a href="https://github.com/ashutosh00710/github-readme-activity-graph">
</a>
<br><br>

### 🩵 Latest Blog Posts
`;

// rss-parser 생성
const parser = new Parser({
    headers: {
        Accept: 'application/rss+xml, application/xml, text/xml; q=0.1',
    }});

(async () => {

    // 피드 목록
    const feed = await parser.parseURL('https://devpad.tistory.com/rss'); // 본인의 블로그 주소
    
    text += `<ul>`;
    
    // 최신 10개의 글의 제목과 링크를 가져온 후 text에 추가
    for (let i = 0; i < 10; i++) {
        const {title, link} = feed.items[i];
        console.log(`${i + 1}번째 게시물`);
        console.log(`추가될 제목: ${title}`);
        console.log(`추가될 링크: ${link}`);
        text += `<li><a href='${link}' target='_blank'>${title}</a></li>`;
    }

    text += `</ul>`;
    
    // README.md 파일 생성
    writeFileSync('README.md', text, 'utf8', (e) => {
        console.log(e);
    })
    console.log('업데이트 완료');
})();