const {foo: x = 3, bar: y} = {};

const {prop: a = someFunc() } = someValue;

function log(x) { console.log(x); return 'YES' }
const [ res = log('hello') ] = [];


const [ newRes = log('hello') ] = [ 123 ]; 

const [ newResult, newRes1 = log('hello') ] = [ 123, null ];

//const [newResult, newRes1 = log('hello') ] = [123, undefined];  