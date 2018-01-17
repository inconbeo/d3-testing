
const d3 = require('d3');
let s = d3.select('body').append('p').text('hello w!!!');
console.log(s);

  test('it exists', () => {
    expect(s).not.toBeNull();
  })

 
   test('type of s', () => {
    expect(typeof s).toBe('object');
  })

    test('hello world', () => {
      console.log(s);
    expect(`${s}`).toBe('hellow world')
  })
  

  
