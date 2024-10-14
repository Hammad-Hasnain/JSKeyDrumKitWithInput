


// let completeValueOfInp1 = ''
// const keyDownEventHandler = (e) => {

//   const pressedKey = document.querySelector(`div[data-key="${e.keyCode}"]`)
//   const audioElem = document.querySelector(`audio[data-key="${e.keyCode}"]`)

//   if (!audioElem || !pressedKey) return;

//   // pressedKey.style = 'transform: scale(1.2)'



//   const inp1 = document.querySelector('#inp1')
//   const span1 = document.querySelector('#span1')
//   const span2 = document.querySelector('#span2')

//   // console.log(inp1.value='45')

//   // console.log(span1, span2)

//   // inp1.value += e.keyj
//   // completeValueOfInp1 = completeValueOfInp1 + e.key
//   completeValueOfInp1 += e.key
//   console.log('completeValueOfInp1===> ', completeValueOfInp1)



//   const span1Value = completeValueOfInp1.slice(0, -1)
//   console.log('span1Value==>', span1Value)
//   span1.value = span1Value
//   console.log(span1.value)



//   // span2.style.fontSize = '60px'
//   const span2Value = completeValueOfInp1.slice(-1)
//   console.log('span2Value==>', span2Value)
//   span2.value = span2Value
//   console.log(span2.value)


//   console.log('span1.value ===> ', span1.value, 'span2.vlaue  =====> ', span2.value)


//   span1.innerHTML = span1.value
//   span2.innerHTML = span2.value


//   // inp1.value = span1Value + span2Value
//   span1.value



//   return
//   // span2.style.transform = 'scale(1.2)'
//   // inp1.value = span1Value + span2Value


//   // inp1.style.fontSize = '60px'




//   console.log(inp1.value.slice(0, -1))


//   // console.log(inp1.value.slice(-1))

//   // const last_key = inp1.value.slice(-1)
//   // console.log(last_key)


//   // span.value = e.key
//   // span.style.fontSize = "60px"
//   // inp1.value += span.value



//   // console.log(span)
//   // console.log('span.value==>', span.value)


//   // inp1.style.fontSize = '60px'



//   pressedKey.classList.add('playing')
//   audioElem.currentTime = 0;
//   audioElem.play()

// }


// const transformHandler = (e) => e.target.classList.remove('playing')


// const keys = Array.from(document.querySelectorAll('.key'))
// keys.forEach((e, i) => e.addEventListener('transitionend', transformHandler))


// window.addEventListener('keydown', keyDownEventHandler)


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx 
// ============================== concise and professional look of code ============================== 
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx 




// Get current year
const currentYear = new Date().getFullYear();
// Set  current year in the span
document.getElementById('currentYear').textContent = currentYear;


let completeValueOfInp1 = '';

const keyDownEventHandler = (e) => {
  const pressedKey = document.querySelector(`div[data-key="${e.keyCode}"]`);
  const audioElem = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  if (!audioElem || !pressedKey) return;

  const inp1 = document.querySelector('#inp1');
  const span1 = document.querySelector('#span1');
  const span2 = document.querySelector('#span2');

  // Update completeValueOfInp1 with the pressed key
  completeValueOfInp1 += e.key;

  // Update span1 and span2 with respective values
  const span1Value = completeValueOfInp1.slice(0, -1);
  const span2Value = completeValueOfInp1.slice(-1);

  span1.textContent = span1Value;
  span2.textContent = span2Value;

  // span1.innerHTML = span1Value;
  // span2.innerHTML = span2Value;


  // Add class and play sound
  pressedKey.classList.add('playing');
  audioElem.currentTime = 0;
  audioElem.play();
};


const clickEventHandler = (e) => {
  const pressedKey = e.currentTarget; // Get the clicked key
  const audioElem = document.querySelector(`audio[data-key="${pressedKey.dataset.key}"]`);

  console.log(pressedKey.querySelector('kbd').textContent)

  // return
  if (!audioElem) return;

  const inp1 = document.querySelector('#inp1');
  const span1 = document.querySelector('#span1');
  const span2 = document.querySelector('#span2');

  // Update completeValueOfInp1 with the pressed key
  completeValueOfInp1 += pressedKey.querySelector('kbd').textContent;

  // Update span1 and span2 with respective values
  const span1Value = completeValueOfInp1.slice(0, -1);
  const span2Value = completeValueOfInp1.slice(-1);

  span1.textContent = span1Value;
  span2.textContent = span2Value;

  // span1.innerHTML = span1Value;
  // span2.innerHTML = span2Value;


  // Add class and play sound
  pressedKey.classList.add('playing');
  audioElem.currentTime = 0;
  audioElem.play();
}

const transformHandler = (e) => e.target.classList.remove('playing');

const keys = Array.from(document.querySelectorAll('.key'));

keys.forEach((key) => {
  key.addEventListener('transitionend', transformHandler);
  key.addEventListener('click', clickEventHandler);
});



window.addEventListener('keydown', keyDownEventHandler);
