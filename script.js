// script.js

// 0. 데이터 정의
const qnaList = [
    {
        q: '1. 연인과의 기념일, 나는 어떻게 준비할까?',
        a: [
            { answer: '맛집, 동선, 예산까지 완벽하게 계획된 데이트 코스를 준비한다.', type: 'Teto' },
            { answer: '그날의 분위기에 맞춰 즉흥적으로 하고 싶은 것을 즐긴다.', type: 'Aegen' },
        ]
    },
    {
        q: '2. 연인이 힘든 일로 우울해할 때 나의 반응은?',
        a: [
            { answer: '문제의 원인을 분석하고 현실적인 해결책을 찾아주려 노력한다.', type: 'Teto' },
            { answer: '따뜻하게 안아주며 "내가 옆에 있어"라고 말하며 위로해준다.', type: 'Aegen' },
        ]
    },
    {
        q: '3. 연인과 사소한 문제로 다퉜을 때, 나는?',
        a: [
            { answer: '누가 먼저 잘못했는지 따져보고 확실하게 매듭짓고 싶다.', type: 'Teto' },
            { answer: '일단 서운한 감정이 풀릴 때까지 위로와 사과를 받고 싶다.', type: 'Aegen' },
        ]
    },
    {
        q: '4. 내가 생각하는 최고의 데이트는?',
        a: [
            { answer: '새로운 것을 배우거나 함께 성장할 수 있는 전시회, 스터디 데이트', type: 'Teto' },
            { answer: '아무것도 안 하고 소파에 찰싹 붙어서 하루 종일 꽁냥거리는 데이트', type: 'Aegen' },
        ]
    },
    {
        q: '5. 연인에게 사랑을 표현하는 나의 방식은?',
        a: [
            { answer: '상대방에게 필요한 것을 챙겨주거나 묵묵히 곁을 지켜주는 행동으로 보여준다.', type: 'Teto' },
            { answer: '"사랑해", "보고 싶어" 같은 애정 표현과 스킨십을 적극적으로 한다.', type: 'Aegen' },
        ]
    },
    {
        q: '6. 연인의 새로운 도전을 앞두고 나는?',
        a: [
            { answer: '성공 가능성을 객관적으로 판단하고 도움이 될 만한 정보를 찾아준다.', type: 'Teto' },
            { answer: '"넌 무조건 잘할 수 있어!"라며 무한한 응원과 지지를 보낸다.', type: 'Aegen' },
        ]
    },
    {
        q: '7. 연인과 함께 있을 때, 더 중요한 것은?',
        a: [
            { answer: '둘의 미래를 위한 건설적인 대화를 나누는 시간', type: 'Teto' },
            { answer: '지금 이 순간 서로에게 집중하며 감정을 나누는 시간', type: 'Aegen' },
        ]
    },
    {
        q: '8. 연인에게 줄 선물을 고를 때 나는?',
        a: [
            { answer: '상대방의 취향과 실용성을 고려해 최고의 선택을 하려 한다.', type: 'Teto' },
            { answer: '선물 받고 기뻐할 상대방의 표정을 상상하며 귀여운 것을 고른다.', type: 'Aegen' },
        ]
    },
    {
        q: '9. 친구들에게 내 연인을 소개한다면?',
        a: [
            { answer: '"정말 배울 점이 많고 똑똑한 사람이야."', type: 'Teto' },
            { answer: '"너무 귀엽고 보고만 있어도 웃음이 나는 사람이야."', type: 'Aegen' },
        ]
    },
    {
        q: '10. 둘만의 여행 계획을 세울 때 나는?',
        a: [
            { answer: '시간대별로 완벽한 여행 계획(J)을 세워야 마음이 편하다.', type: 'Teto' },
            { answer: '숙소만 정해두고 나머지는 발길 닿는 대로 다니는 게 좋다.', type: 'Aegen' },
        ]
    }
];

const resultList = {
    'Teto': {
        male: {
            title: "#논리적인_전략가, 테토남",
            headline: "감정보단 논리, 과정보단 결과가 중요한 당신은 관계의 안정성을 추구하는 연애 전략가입니다.",
            analysis: "연애를 통해 함께 성장하고 안정적인 미래를 그리는 것을 중요하게 생각합니다. 순간의 감정보다는 문제를 해결하고 더 나은 방향으로 나아가는 과정에서 진정한 사랑을 느낍니다.",
            strength: "• 든든한 해결사: 어떤 위기에서도 침착하게 해결책을 제시하여 깊은 신뢰를 줍니다.\n• 책임감과 꾸준함: 한번 마음을 연 상대에게는 누구보다 헌신적입니다.\n• 건설적인 대화: 감정에 휩쓸리지 않아 문제의 본질을 파악하고 대화할 수 있습니다.",
            weakness: "• '정답'이 아닌 '공감'이 필요할 때: 때로 당신의 날카로운 분석이 연인에게 차가운 비판처럼 들릴 수 있습니다. 조언에 앞서 감정을 먼저 읽어주는 연습을 해보세요.\n• 가끔은 빈틈을 보여주세요: 완벽한 모습도 좋지만, 가끔 나의 약한 모습을 공유하는 것이 관계를 더욱 깊게 만듭니다.",
            bestMatch: "❤️ 환상의 케미: 다정한 에겐 타입. 당신의 논리가 에겐의 감정 기복을 잡아주고, 에겐의 따뜻함이 당신의 지친 마음에 휴식을 주어 이상적인 파트너가 될 수 있습니다.",
            worstMatch: "💔 환장의 케미: 또 다른 테토 타입. 두 명의 전략가가 만나면 연애가 아닌 비즈니스를 하게 될지도 모릅니다. 가끔은 계산기를 내려놓는 용기가 필요합니다.",
            img: 'images/teto_male.png'
        },
        female: {
            title: "#논리적인_전략가, 테토녀",
            headline: "감정보단 논리, 과정보단 결과가 중요한 당신은 관계의 안정성을 추구하는 연애 전략가입니다.",
            analysis: "연애를 통해 함께 성장하고 안정적인 미래를 그리는 것을 중요하게 생각합니다. 순간의 감정보다는 문제를 해결하고 더 나은 방향으로 나아가는 과정에서 진정한 사랑을 느낍니다.",
            strength: "• 든든한 해결사: 어떤 위기에서도 침착하게 해결책을 제시하여 깊은 신뢰를 줍니다.\n• 책임감과 꾸준함: 한번 마음을 연 상대에게는 누구보다 헌신적입니다.\n• 건설적인 대화: 감정에 휩쓸리지 않아 문제의 본질을 파악하고 대화할 수 있습니다.",
            weakness: "• '정답'이 아닌 '공감'이 필요할 때: 때로 당신의 날카로운 분석이 연인에게 차가운 비판처럼 들릴 수 있습니다. 조언에 앞서 감정을 먼저 읽어주는 연습을 해보세요.\n• 가끔은 빈틈을 보여주세요: 완벽한 모습도 좋지만, 가끔 나의 약한 모습을 공유하는 것이 관계를 더욱 깊게 만듭니다.",
            bestMatch: "❤️ 환상의 케미: 다정한 에겐 타입. 당신의 논리가 에겐의 감정 기복을 잡아주고, 에겐의 따뜻함이 당신의 지친 마음에 휴식을 주어 이상적인 파트너가 될 수 있습니다.",
            worstMatch: "💔 환장의 케미: 또 다른 테토 타입. 두 명의 전략가가 만나면 연애가 아닌 비즈니스를 하게 될지도 모릅니다. 가끔은 계산기를 내려놓는 용기가 필요합니다.",
            img: 'images/teto_female.png'
        }
    },
    'Aegen': {
        male: {
            title: "#사랑으로_사는_감성파, 에겐남",
            headline: "이성보단 감성, 계획보단 지금 이 순간의 행복이 중요한 당신은 사랑을 먹고사는 로맨티스트입니다.",
            analysis: "연인과의 정서적 유대감과 친밀감을 최우선으로 생각합니다. 안정적인 미래보다는 지금 이 순간 나누는 따뜻한 감정과 교감을 통해 사랑을 확인하고 행복을 느낍니다.",
            strength: "• 뛰어난 공감 능력: 연인의 감정을 섬세하게 파악하고 진심으로 공감해줍니다.\n• 풍부한 애정 표현: 사랑한다는 말을 아끼지 않아 연인에게 늘 사랑받는다는 느낌을 줍니다.\n• 긍정적인 에너지: 당신의 밝고 순수한 모습은 주변까지 행복하게 만드는 힘이 있습니다.",
            weakness: "• 때로는 감정이 앞설 때: 가끔 감정 기복이 생기거나 의존적인 모습을 보일 수 있습니다. 스스로 감정을 다스리는 연습이 관계에 도움이 될 거예요.\n• 현실적인 문제에 대한 고민: 가끔은 감성적인 접근 대신, 현실적인 문제 해결에도 관심을 기울여보는 것은 어떨까요?",
            bestMatch: "❤️ 환상의 케미: 든든한 테토 타입. 당신의 풍부한 감성을 테토가 이성적으로 지지해주고, 당신은 테토에게 정서적 안정감을 주어 최고의 커플이 될 수 있습니다.",
            worstMatch: "💔 환장의 케미: 또 다른 에겐 타입. 두 감성파가 만나면 사랑은 넘치지만, 현실의 벽에 부딪혔을 때 함께 방향을 잃고 헤맬 수 있습니다.",
            img: 'images/aegen_male.png'
        },
        female: {
            title: "#사랑으로_사는_감성파, 에겐녀",
            headline: "이성보단 감성, 계획보단 지금 이 순간의 행복이 중요한 당신은 사랑을 먹고사는 로맨티스트입니다.",
            analysis: "연인과의 정서적 유대감과 친밀감을 최우선으로 생각합니다. 안정적인 미래보다는 지금 이 순간 나누는 따뜻한 감정과 교감을 통해 사랑을 확인하고 행복을 느낍니다.",
            strength: "• 뛰어난 공감 능력: 연인의 감정을 섬세하게 파악하고 진심으로 공감해줍니다.\n• 풍부한 애정 표현: 사랑한다는 말을 아끼지 않아 연인에게 늘 사랑받는다는 느낌을 줍니다.\n• 긍정적인 에너지: 당신의 밝고 순수한 모습은 주변까지 행복하게 만드는 힘이 있습니다.",
            weakness: "• 때로는 감정이 앞설 때: 가끔 감정 기복이 생기거나 의존적인 모습을 보일 수 있습니다. 스스로 감정을 다스리는 연습이 관계에 도움이 될 거예요.\n• 현실적인 문제에 대한 고민: 가끔은 감성적인 접근 대신, 현실적인 문제 해결에도 관심을 기울여보는 것은 어떨까요?",
            bestMatch: "❤️ 환상의 케미: 든든한 테토 타입. 당신의 풍부한 감성을 테토가 이성적으로 지지해주고, 당신은 테토에게 정서적 안정감을 주어 최고의 커플이 될 수 있습니다.",
            worstMatch: "💔 환장의 케미: 또 다른 에겐 타입. 두 감성파가 만나면 사랑은 넘치지만, 현실의 벽에 부딪혔을 때 함께 방향을 잃고 헤맬 수 있습니다.",
            img: 'images/aegen_female.png'
        }
    }
};

// 1. 전역 변수 및 DOM 요소 선언
let userGender = '';
let score = { 'Teto': 0, 'Aegen': 0 };
let currentQIdx = 0;

const startPage = document.querySelector('#start-page');
const qnaPage = document.querySelector('#qna-page');
const resultPage = document.querySelector('#result-page');
const genderButtons = document.querySelectorAll('.gender-btn');
const restartButton = document.querySelector('#restart-btn');
const copyLinkButton = document.querySelector('#copy-link-btn');

function startTest(gender) { /* 이전과 동일 */ }
function goNextQuestion() { /* 이전과 동일 */ }
function restartTest() { /* 이전과 '동일' */ }
function copyLink() { /* 이전과 동일 */ }

// 2. 핵심 로직 함수
function startTest(gender) {
    userGender = gender;
    startPage.style.display = 'none';
    qnaPage.style.display = 'block';
    goNextQuestion();
}

function goNextQuestion() {
    if (currentQIdx === qnaList.length) {
        showResult();
        return;
    }

    const q = qnaList[currentQIdx];
    document.querySelector('#question-title').innerText = q.q;

    const answerBox = document.querySelector('#answer-box');
    answerBox.innerHTML = ''; // 이전 답변 버튼들 제거

    q.a.forEach(answerInfo => {
        const answerBtn = document.createElement('button');
        answerBtn.innerText = answerInfo.answer;
        answerBtn.addEventListener('click', () => {
            score[answerInfo.type]++;
            currentQIdx++;
            goNextQuestion();
        });
        answerBox.appendChild(answerBtn);
    });

    // 진행률 업데이트
    const progress = (currentQIdx / qnaList.length) * 100;
    document.querySelector('.progress-bar').style.width = `${progress}%`;
}

function showResult() {
    qnaPage.style.display = 'none';
    resultPage.style.display = 'block';

    const finalType = score['Teto'] > score['Aegen'] ? 'Teto' : 'Aegen';
    const result = resultList[finalType][userGender];

    // 새로운 구조에 맞게 데이터 채우기
    document.querySelector('#result-title').innerText = result.title;
    document.querySelector('#result-headline').innerText = result.headline;
    document.querySelector('#result-image').src = result.img;
    document.querySelector('#result-image').alt = result.title;
    document.querySelector('#result-analysis').innerText = result.analysis;
    document.querySelector('#result-strength').innerText = result.strength;
    document.querySelector('#result-weakness').innerText = result.weakness;
    document.querySelector('#result-best-match').innerText = result.bestMatch;
    document.querySelector('#result-worst-match').innerText = result.worstMatch;
}

function restartTest() {
    // 상태 초기화
    userGender = '';
    score = { 'Teto': 0, 'Aegen': 0 };
    currentQIdx = 0;

    // 화면 전환
    resultPage.style.display = 'none';
    startPage.style.display = 'block';
    
    // 프로그레스 바 초기화
    document.querySelector('.progress-bar').style.width = '0%';
}

function copyLink() {
    navigator.clipboard.writeText(window.location.href)
        .then(() => alert('링크가 복사되었습니다! 친구들에게 공유해보세요.'))
        .catch(err => console.error('링크 복사 실패:', err));
}

// 3. 이벤트 리스너 연결
document.addEventListener('DOMContentLoaded', () => {
    genderButtons.forEach(button => {
        button.addEventListener('click', (e) => startTest(e.target.dataset.gender));
    });
    restartButton.addEventListener('click', restartTest);
    copyLinkButton.addEventListener('click', copyLink);
});