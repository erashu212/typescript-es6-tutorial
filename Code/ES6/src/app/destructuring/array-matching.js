const iterable = ['a', 'b'];
const [x, y] = iterable;
// x = 'a'; y = 'b'


const [all, year, month, day] =
    /^(\d\d\d\d)-(\d\d)-(\d\d)$/
        .exec('2999-12-31');


const [e, ...f] = 'abc';