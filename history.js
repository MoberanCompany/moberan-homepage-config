const historyData = {
    "2011": [
        "모베란 법인 설립",
        "MBC 기상센터 천리안 위성영상 출력 프로그램 Baldur 개발",
        "미쯔비시 엘리베이터 스마트 A/S 시스템 개발",
        "울타리 정보통신 메신저 모바일 버전 개발 참여",
    ],
    "2012": [
        "레몬메일 ASP 사이트 개발",
        "MBC 총선 스케쥴러 개발",
        "KBS 총선 코더 개발",
        "SBS CNBC 증시 Wasp 코더 개발",
        "ETRI LBS 실내 네비게이션 연구과제 개발",
        "JTBC 대선 토네이도 코더 개발",
        "Moberan NPC 원격 멀티 모니터링 출시",
    ],
    "2013": [
        "Top Weather 기상영상 제작 솔루션 출시",
        "코나아이 스마트 월렛 개발",
        "Posco LED 조명 제어 앱 개발",
        "인천시 행복나눔 복지 사이트 개발",
    ],
    "2014": [
        "MBC 지방선거 코더 개발",
        "MBC 방송준비 시스템 개발",
        "MBC 편성 CMS 개발",
        "JTBC TopWeather  납품",
        "Moberan FMS 솔루션 출시",
    ],
    "2015": [
        "MBC ClipBank3 개발",
        "MBN Top Weather 납품",
        "HTML5 기반 FMS 솔루션 출시, 세종로 호텔 납품",
        "MBC 광고총량제 모니터 프로그램 납품",
        "인포스립트 티켓포스(KIOSK) 개발",
        "HTML5 기반 MBC DAMS 개발",
        "HTML5 기반 MBC 통합유통정보 개발",
    ],
    "2016": [
        "HTML5 기반 소셜 게임 MocaGame출시",
        "MBC 총선 카리스마 코더 개발",
        "HTML5 기반 MBC 컨텐츠 게이트웨이 개발",
        "KBS WebNLE Front-End 개발",
    ],
    "2017": [
        "MocaWallet 출시",
        "FDSI와 MokaWallet 계약 체결",
        "HTML5 FMS 강동팰리스 납품",
        "MBC 대선 카리스마 코더 개발",
        "SBS TopWeather  납품",
    ],
    "2018": [
        "농업방송 TopWeather 납품",
        "MBC 지방선거 컨트롤러 개발",
        "MBC 지방선거 터치 스크린 개발",
    ],
    "2019": [
        "CompePrice e-PriceTag 서버, 앱 개발",
        "인천대학교 공장 라인 스케쥴링 차트 개발",
        "MBC 자막 수신 서버 개발",
        "MBC 메타허브 개발",
        "아이디어컴즈 마스터노드 코인 개발",
    ],
    "2020": [
        "EIP 비즈멤버톡 앱서비스 리뉴얼",
        "인천대학교  R&D HUB 앱 서비스 개발",
        "강릉휙파인패스 모빌리티 서버 개발",
        "MBC SNS 관리 서비스 개발",
        "MBC 2020 총선 컨트롤러 개발",
        "Sylab 표적식별 AI 프로젝트 개발",
    ],
    "2021": [
        "리얼툴스 APT 실거래가 조회 사이트 개발",
        "WebRTC 기반 TinyRTC Framework 출시",
        "베이글랩스 통합 블루투스 모듈 개발",
        "MoNFT Market Place 출시",
        "Babidiba NFT Market Place 납품",        
        "MBC FAST 삼성TV 연동 서비스 개발",
        "Castware Here TinyRTC Frame 기반 앱 서비스 개발",
    ],
    "2022": [
        "MBC ClipBank3 유지보수 체결",
        "MBC C&I와 MBC 기상센터 천리안 위성영상 출력 프로그램 Baldur3 고도화",
        "MBC 2022 대선 터치 개발",
        "MBC 2022 지방선거 터치 및 컨트롤러 개발",
        "CNI 리그 게임 관리 웹 개발",
        "TV 조선 topWeather 납품",
        "Aniverse NFT Staking System 개발", 
        "WAVVE 계정관리 솔루션 웹 개발",
        "KFA 경기영상아카이브 웹 개발",
        "메모리얼 메타버스 NFT Market Place 납품",
        "MBC 송출 소재 외부 입고 시스 개발",
        "JTBC CCTV 스트리밍 및 송출관리 웹 개발"
    ],
};

function createYearHistory(isLeft, year, datas){
    return `
    <li data-aos="${ isLeft ?'fade-right' : 'fade-left' }" data-aos-offset="-400" data-aos-delay="200" data-aos-duration="400"
    data-aos-anchor-placement="top-center">
    <dl class="${ isLeft ? 'tr fl' : 'tl fr' }">
        <dt class="month">${year}</dt>
        ${datas.map((e)=> `<dd>${e}</dd>`).join('\n')}
    </dl>
    </li>
    `;
}

function historyGenerate() {
    let elements = [];
    let keys = Object.keys(historyData);
    keys.sort((a,b)=> b-a)
    for(let index = 0; index < keys.length; index++){
        let isLeft = (index + 1) % 2;
        let key = keys[index];
        let value = historyData[key];
        let li = createYearHistory(isLeft, key, value);
        elements.push(li);
    }
    let target = document.querySelector(".history_wrap .list");
    target.innerHTML = elements.join('\n');
}

(function () {
    document.addEventListener("DOMContentLoaded", () => {
        historyGenerate();
    });
})();

