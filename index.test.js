
const d3 = require('d3');
let s = d3.select('body').append('p').text('hello world');

   test('it exists', () => {
    expect(s).not.toBeNull();
  })

 
   test('type of s', () => {
    expect(typeof s).toBe('object');
  })

    test('hello world', () => {
      console.log(d3.select('p').text());
      expect(d3.select('p').text()).toBe('hello world')
  })
  
  

