import {sum} from './sum';



describe('sum module', () => {
    test("Test func",()=>{
        expect(sum(1,2)).toBe(3);
       })
});