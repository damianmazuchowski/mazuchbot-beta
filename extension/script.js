var isExecuting;

function main() {
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: function () {
        const button = document.querySelector(
          'a.button.ml-1.mr-5.h-12.w-auto.flex-1.px-1.button-green-dimmed'
        );

        // console.log('Wstrzyknięto kod po kliknięciu przycisku.');
        if (button) {
          button.click();
      }
    }});
  });
  if (isExecuting) {
    setTimeout(main, 100);
  } 
}

document.getElementById('cancelButton').addEventListener('click', () => {
  isExecuting = false;
   // Zmień kolor czcionki na żółty po kliknięciu przycisku "Cancel"
   const cancelButton = document.getElementById('cancelButton');
   cancelButton.style.color = 'blue';
   // Zmień kolor czcionki na domyślny po kliknięciu przycisku "Join"
   const joinButton = document.getElementById('joinButton');
   joinButton.style.color = '';
});

document.getElementById('joinButton').addEventListener('click', () => {
  isExecuting = true;
  // Zmień kolor czcionki na żółty po kliknięciu przycisku "Join"
  const joinButton = document.getElementById('joinButton');
  joinButton.style.color = 'red';
  // Zmień kolor czcionki na domyślny po kliknięciu przycisku "Cancel"
  const cancelButton = document.getElementById('cancelButton');
  cancelButton.style.color = '';
  main();
});

// document.getElementById('joinButton').addEventListener('click', () => {
//   // isExecuting = 13;
//   chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
//     chrome.scripting.executeScript({
//       target: { tabId: tabs[0].id },
//       function: waitForButtonAndClick,
//       args: [isExecuting]
//     });
//   });
// });

// function waitForButtonAndClick(isExecuting) {
//   alert(isExecuting)
//   if (isExecuting) {
//     const button = document.querySelector(
//       'a.button.ml-1.mr-5.h-12.w-auto.flex-1.px-1.button-green-dimmed'
//     );

//     console.log('Wstrzyknięto kod po kliknięciu przycisku.');
//     if (button) {
//       button.click();
//     } else {
//       setTimeout(waitForButtonAndClick, 100);
//     }
//   } else {
//     return;
//   }
// }
