import { MessageGenerator } from './MessageGenerator';

import { 
    TestParams1,
    TestParams2,
    TestParams3,
    TestParams4,
    TestParams5,
    TestParams6,

    TestTamplate1,
    TestTamplate2,
    TestTamplate3,
    TestTamplate4,
    TestTamplate5,
    TestTamplate6,
    
    TestResult1,
    TestResult2,
    TestResult3,
    TestResult4,
    TestResult5,
    TestResult6,
} from  "./TestData";


describe('MessageGenerator Function Test', () => {
    //test 1
    test("Can compose message",()=>{ 
        let res1 = MessageGenerator(TestParams1,TestTamplate1).replaceAll(/\s+/g," ");
        let res2 = TestResult1.replaceAll(/\s+/g," ");
        //удаление повторяющихся пробелов
        // т.к при заполнении данных в TestDataTamplate.ts
        // в исходных данных присутствуют лишние пробелы из за табуляций

        expect(res1).toBe(res2);
    })
    //test 2
    test("Can replace params",()=>{ 
        let res1 = MessageGenerator(TestParams2,TestTamplate2).replaceAll(/\s+/g," ");
        let res2 = TestResult2.replaceAll(/\s+/g," ");
        //удаление повторяющихся пробелов
        // т.к при заполнении данных в TestDataTamplate.ts
        // в исходных данных присутствуют лишние пробелы из за табуляций

        expect(res1).toBe(res2);
    })
    //test 3
    test("Work without value of params",()=>{ 
        let res1 = MessageGenerator(TestParams3,TestTamplate3).replaceAll(/\s+/g," ");
        let res2 = TestResult3.replaceAll(/\s+/g," ");
        //удаление повторяющихся пробелов
        // т.к при заполнении данных в TestDataTamplate.ts
        // в исходных данных присутствуют лишние пробелы из за табуляций

        expect(res1).toBe(res2);
    })
    //test 4
    test(`Dont have bag {firstname} = "{lastname}" {lastname} = value`,()=>{ 
        let res1 = MessageGenerator(TestParams4,TestTamplate4).replaceAll(/\s+/g," ");
        let res2 = TestResult4.replaceAll(/\s+/g," ");
        //удаление повторяющихся пробелов
        // т.к при заполнении данных в TestDataTamplate.ts
        // в исходных данных присутствуют лишние пробелы из за табуляций
        
        expect(res1).toBe(res2);
    })
    //test 5
    test(`Dont have bag 
    {firstname} = "{com" {lastname} = "pany}"  
    {firstname}{lastname} = "{company}" {company} = value`,()=>{
        let res1 = MessageGenerator(TestParams5,TestTamplate5).replaceAll(/\s+/g," ");
        let res2 = TestResult5.replaceAll(/\s+/g," ");
        //удаление повторяющихся пробелов
        // т.к при заполнении данных в TestDataTamplate.ts
        // в исходных данных присутствуют лишние пробелы из за табуляций

        expect(res1).toBe(res2);
    })
    //test 6
    test(`Test count of space`,()=>{
        let res1 = MessageGenerator(TestParams6,TestTamplate6);
        let res2 = TestResult6;

        expect(res1).toBe(res2);
    })
});