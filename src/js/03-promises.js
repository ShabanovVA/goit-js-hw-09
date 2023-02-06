import Notiflix from 'notiflix';

const delay = document.querySelector('[name="delay"]');
const step = document.querySelector('[name="step"]');
const amount = document.querySelector('[name="amount"]');
const btnSubmit = document.querySelector('button');

btnSubmit.addEventListener('click', startCreatePromises);

function startCreatePromises(e) {
  e.preventDefault();
  getNumbers(
    Number(delay.value),
    Number(step.value),
    Number(amount.value)
  );
  
  function getNumbers(delay, step, amount) {
  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`,
          {
            timeout: 2000,
          },
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`,
          {
            timeout: 2000,
          },
        );
      })
    delay += step;
  }
}
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => { 
  const shouldResolve = Math.random() > 0.3;
  setTimeout(() => {
    if (shouldResolve) {
      resolve({ position, delay });
    }
    else {
      reject({ position, delay });
    }
  }, delay);
})
}