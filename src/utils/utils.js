export const delay = (ms) => new Promise(res => setTimeout(res, ms));

export const takeData = async (getApi, page) => {
  const request = await fetch(`https://jsonplaceholder.typicode.com/${getApi}${page}`);
  const data = await request.json();
  return data;
};

export function createPages(pages, pagesCount, currentPage) {
    // if(pagesCount > 10) {
    //     if(currentPage > 5) {
    //         for (let i = currentPage-2; i <= currentPage+2; i++) {
    //             pages.push(i)
    //             if(i === pagesCount) break
    //         }
    //     }
    //     else {
    //         for (let i = 1; i <= 5; i++) {
    //             pages.push(i)
    //             if(i === pagesCount) break
    //         }
    //     }
    // }  else {
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
    // }
}

const debounce =(fn, ms) => {
    let timeout;
    return function () {
        const fnCall = () => { fn.apply(this, arguments) }
        clearTimeout(timeout);
        timeout = setTimeout(fnCall, ms)
    }
}  

function sdebounce(callee, timeoutMs) {
    // Как результат возвращаем другую функцию.
    // Это нужно, чтобы мы могли не менять другие части кода,
    // чуть позже мы увидим, как это помогает.
    return function perform(...args) {
      // В переменной previousCall мы будем хранить
      // временную метку предыдущего вызова...
      let previousCall = this.lastCall
  
      // ...а в переменной текущего вызова —
      // временную метку нынешнего момента.
      this.lastCall = Date.now()
  
      // Нам это будет нужно, чтобы потом сравнить,
      // когда была функция вызвана в этот раз и в предыдущий.
      // Если разница между вызовами меньше, чем указанный интервал,
      // то мы очищаем таймаут...
      if (previousCall && this.lastCall - previousCall <= timeoutMs) {
        clearTimeout(this.lastCallTimer)
      }
  
      // ...который отвечает за непосредственно вызов функции-аргумента.
      // Обратите внимание, что мы передаём все аргументы ...args,
      // который получаем в функции perform —
      // это тоже нужно, чтобы нам не приходилось менять другие части кода.
      this.lastCallTimer = setTimeout(() => callee(...args), timeoutMs)
  
      // Если таймаут был очищен, вызова не произойдёт
      // если он очищен не был, то callee вызовется.
      // Таким образом мы как бы «отодвигаем» вызов callee
      // до тех пор, пока «снаружи всё не подуспокоится».
    }
  }

  export default debounce;