//show the notification (letter already entered) for 2 seconds
export function showNotification(setter) {
    setter(true);
    setTimeout(() => {
      setter(false);
    }, 2000);
  }
  
export function status(correct, wrong, word) {
let status = 'win';

  // no win yet, not status
  word.split('').forEach(letter => {
      if(!correct.includes(letter)){
      status = '';
      }
  });

  // you have lost if the wrongletters array === 10
  if(wrong.length === 10) status = 'lose';
  if(word.length === 0 ) status = 'start';
  return status
}