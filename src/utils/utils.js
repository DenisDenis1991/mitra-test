export const delay = (ms) => new Promise(res => setTimeout(res, ms));

export const takeData = async (getApi, page) => {
  const request = await fetch(`https://jsonplaceholder.typicode.com/${getApi}${page}`);
  const data = await request.json();
  return data;
};

export function createPages(pages, pagesCount, currentPage) {
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }
}

