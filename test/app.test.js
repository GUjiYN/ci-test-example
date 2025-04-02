import { expect } from 'chai';  // 具名导入
import add from '../app.js';   // 明确后缀

describe('Add function', () => {
  it('should return 5 when adding 2 and 3', () => {
    expect(add(2, 3)).to.equal(5); // 确保语法正确
  });
});


