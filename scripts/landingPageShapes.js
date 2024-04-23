const wrapper = document.getElementById('wrapper');
const backgroundDiv = document.getElementById('landingPageBackground');
const shapeContainer = document.getElementById('shape-container');
const content1 = document.querySelectorAll('.content-1');
const content2 = document.querySelectorAll('.content-2');

// 3 shape configs
const configCombinations = [
  { configuration: 1, roundness: 1, position: 'left' },
  { configuration: 2, roundness: 2, position: 'center' },
  { configuration: 3, roundness: 3, position: 'right' },
];

// //  3 content configs
// const contentArray = [
//   [
//     'SONAR CLOUD',
//     'STEAM',
//     'UNITY',
//     'IOS',
//     'JENKINS',
//     '',
//     'UX/UI',
//     'ANDROID',
//     'UNREAL',
//     'C#',
//   ],
//   [
//     'REACT NATIVE',
//     'IOS',
//     'ANDROID',
//     'JS',
//     'TESTFLIGHT',
//     '',
//     'JENKINS',
//     'SONAR CLOUD',
//     'UX/UI',
//     'GIT',
//   ],
//   [
//     'HTML',
//     'REACT',
//     'CSS3',
//     'ES6',
//     'WORDPRESS',
//     '',
//     'BOOTSTRAP',
//     'LARAVEL',
//     'FIGMA',
//     'PHP',
//   ],
// ];

let bgIndex = 1;
function changeBackground() {
  console.log('bgIndex: ', bgIndex);
  const combination = configCombinations[bgIndex];
  shapeContainer.style.marginTop = bgIndex === 1 ? '25%' : '5%';

  backgroundDiv.style.backgroundPosition = combination.position;
  wrapper.dataset.configuration = combination.configuration;
  wrapper.dataset.roundness = combination.roundness;

  // changeContent();
  bgIndex = (bgIndex + 1) % configCombinations.length;
}
// let contentIndex = 0;

setInterval(() => {
  changeBackground();
}, 3500);

wrapper.dataset.configuration = 1;
wrapper.dataset.roundness = 1;

// //  change HTML content
// function changeContent() {
//   const currentContent = contentArray[contentIndex];
//   // const currentContent = contentArray[2];

//   // Loop through each div with class "word" and update its content from the array
//   var divs = document.querySelectorAll('.word');

//   divs.forEach(function (div, index) {
//     if (div.id != 'wrapperDiv') {
//       // Apply fade-out effect by adding 'hide' class
//       div.classList.add('hide');

//       // Schedule content update after the fade-out transition completes
//       setTimeout(function () {
//         // Update content
//         div.textContent = currentContent[index];

//         // switch (bgIndex) {
//         //   case 2:
//         //     content1.forEach((word) => (word.style.color = 'var(--text-3-2)'));
//         //     content2.forEach((word) => (word.style.color = 'var(--text-1-1)'));
//         //     console.log("index: ", bgIndex);
//         //     break;
//         //   case 1:
//         //     content1.forEach((word) => (word.style.color = 'var(--text-2-1)'));
//         //     content2.forEach((word) => (word.style.color = 'var(--text-3-1)'));
//         //     console.log("index: ", bgIndex);
//         //     break;
//         //   case 0:
//         //     content1.forEach((word) => (word.style.color = 'var(--text-1-2)'));
//         //     content2.forEach((word) => (word.style.color = 'var(--text-1-1)'));
//         //     console.log("index: ", bgIndex);
//         //   break;
//         // }

//         //   if(bgIndex !== 0)
//         //   content1.forEach((word) => (word.style.color = 'var(--text-2-1)'));
//         // else
//         //   content1.forEach((word) => (word.style.color = 'var(--text-1-2)'));

//         // Apply fade-in effect by removing 'hide' class
//         div.classList.remove('hide');
//       }, 700); // Wait for 500 milliseconds (same duration as transition)
//     }
//   });

//   contentIndex = (contentIndex + 1) % contentArray.length;
// }
