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