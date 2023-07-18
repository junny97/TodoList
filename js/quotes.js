const quotes = [
  {
    quote:
      '-돈이 전부는 아니지만 자전거에 앉아서 우는것 보다 포르쉐에 앉아 우는게 훨씬 낫다-',
  },
  {
    quote:
      '-행복을 돈으로 살 수 없다면 혹시 돈이 모자란 건 아닌지 확인해 보자-',
  },
  {
    quote: '-이기는 자가 강한 것이 아니라 버티는 자가 강한 거다-',
  },
  {
    quote: '-어제보다 나은 내일은 토요일 뿐!-',
  },
  {
    quote: '-미뤄봤자 그 일 어차피 내가 한다-',
  },
  {
    quote: '-참으면 아무도 모른다-',
  },
];

const quote = document.querySelector('#quote span');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
// author.innerText = todaysQuote.author;
