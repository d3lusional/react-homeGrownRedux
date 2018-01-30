const TITLE_UPDATE = `SADFJKASL;JDFA-JRIEQ[JAFIS9DFIJA[FDSA`;
const CONTENT_UPDATE = `SADFJKASL;ASFDA;'MFDSAI--JRIEQ[JAFIS9DFIJA[FDSA`;


const titleValue = document.querySelector('#title-value');
const submitTitle = document.querySelector('#submit-title');
const submitContent = document.querySelector('#submit-content');
const contentValue = document.querySelector('#content-value');
const input = document.querySelector('#input-field');
const store = store.Creator(reducer);

let initialState = {
  title: 'Hi there',
  content: ['First Paragraph']
}

function reducer(state=initialState, action) {
  switch(action.type) {
    case TITLE_UPDATE:
      return {...state, title: action.payload};
    case CONTENT_UPDATE:
      return {...state, content: state.content.concat([action.payload])};
    default:
      return state;
  }
}

function render(state) {
  titleValue.innerText = state.title;
  let str = '';
  state.content.forEach(content => {
    str += content + `\n`
  });

  contentValue.innerText = str
}


store.subscribe(render);

store.state.title = 'safdjiasodfjas;fdjas'
console.log(store);



submitContent.addEventListener('click', () => {
  store.receiveAction({type: CONTENT_UPDATE, payload: input.value});
})

submitTitle.addEventListener('click', () => {
  store.receiveAction({type: TITLE_UPDATE, payload: input.value});
})