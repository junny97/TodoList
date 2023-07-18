const quotes = [
  {
    quote: '나는 성공에 대해 꿈꾸지 않았다. 나는 그것을 위해 노력했다.',
    author: ' -에스티 로더',
  },
  {
    quote: '독창적이려고 하지 말고, 단지 좋으려고만 하라.',
    author: ' -폴 랜드',
  },
  {
    quote: '위대한 것으로 향하기 위해 좋은 것을 포기하는 걸 두려워하지 마라.',
    author: ' -존 D. 록펠러',
  },
  {
    quote:
      '하늘을 날 수 없으면 달려라. 달릴 수 없다면 걸어라. 걸을 수 없다면 기어라. 하지만 무엇을 하든 앞으로 나아가야 한다.',
    author: ' -마틴 루터 킹 주니어',
  },
  {
    quote:
      '우리의 가장 큰 약점은 포기하는 것이다. 성공하는 가장 확실한 방법은 더 시도해보는 것이다.',
    author: ' -토마스 에디슨',
  },
  {
    quote: '자신이 되고 싶은 방향으로 이미 그렇게 살고 있는 사람들과 어울려라.',
    author: ' -리드 호프만',
  },
  {
    quote:
      '돈은 로드 트립 중의 휘발유와 같다. 여행 중에 기름이 바닥나기를 원치 않지만 주유소들을 관광하는 것은 아니다.',
    author: ' -팀 오라일리',
  },

  {
    quote: '시작하고 넘어지는 것보다 아예 시작하지 않는 것이 더 나쁘다.',
    author: ' -세스 고딘',
  },
  {
    quote:
      '정말로 뭔가를 하고 싶다면 방법을 찾을 것이다. 그렇지 않다면 핑계를 찾을 것이다.',
    author: ' -짐 론',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
