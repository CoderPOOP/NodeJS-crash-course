// Importing URL Module
import url from 'url';

// Some Commands
// const myUrl = new URL('https://example.org');
const myUrl = new URL('https://example.org:8000');
myUrl.pathname = '/a/b/c';
myUrl.search = '?d=e';
myUrl.hash = '#fgh';

console.log(myUrl)
console.log(myUrl.href)