// 将 require() 改为 import
import chai from 'chai';
const expect = chai.expect;
import add from '../app.js';  // 注意：ES 模块需明确文件后缀（如 .js）

describe('Add function', () => {
    it('should return 5 when adding 2 and 3', () => {
        expect(add(2, 3)).to.equal(5);
    });
});


