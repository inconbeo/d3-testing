//     // describe('the svg' ,function() {
//     //   it('should be created', function() {
//     //       expect(getSvg()).not.toBeNull();
//     //   });
  
//     //   it('should have the correct height', function() {
//     //     expect(getSvg().attr('width')).toBe('500');
//     //   });
  
//     //   it('should have the correct width', function() {
//     //     expect(getSvg().attr('width')).toBe('500');
//     //   });
//     // });
  
//     function getSvg() {
//       return d3.select('p');
//     }

// let d3 = require('d3');
// let p = d3.select('body').append('p').text('hello world!!!');

// function hello() {
//     let that = {};

//     that.render = function() {
//        let test = d3.select('body').append('p').text('hello world!!!');
             
//     };

//     return that;
// }

// describe('Test D3.js with jasmine ', function() {
//     var c;
  
//     beforeEach(function() {
//       c = hello();
//       c.render();
//     });
  
//     afterEach(function() {
//       d3.selectAll('p').remove();
//     });
  
//     describe('the svg' ,function() {
//       it('should be created', function() {
//           expect(getSvg()).not.toBeNull();
//       });
  
//       });
  
//     function getSvg() {
//       return d3.select('p');
//     }
  
//   });