import { TTamplateConfig } from "../types";

type TestParams = {
    firstname?:string,
    lastname?:string,
    company?:string,
    position?:string,
    [key: string]:string|undefined,

}


//test 1
export const TestParams1: TestParams = {
    firstname: "",
    lastname: "",
    company: "",
    position: "",
    alice: "22222",
    row: "11111",
}

export const TestTamplate1: TTamplateConfig = {
    ParamList : ["firstname", "lastname", "company", "position"],
    Tamplate: {
        First : "12",
        IFBlocks : {
            IfConditionParam : {First : ""},
            Then: { First : "0000"},
            Else: { 
                First : "34",
                IFBlocks:{
                    IfConditionParam: {First : "1212421412"},
                    Then : {First : "56"},
                    Else : {First : "999999"},
                },
                Last: {First : ""},
            },
        },
        Last : {First : `7890`}
    },
}

export const TestResult1: string = `1234567890`;

//test 2
export const TestParams2: TestParams = {
    firstname: "__Firstname__",
    lastname: "_!_Lastname_!_",
    company: "_(Company(_",
    position: "_)Position241_",
    bob: "_1234321_",
}

export const TestTamplate2: TTamplateConfig = {
    ParamList : ["firstname", "lastname", "company", "position"],
    Tamplate: {
        First : "\n{firstname}|____ <-  firstname",
        IFBlocks  : {
            IfConditionParam : {First : "{lastname}"},
            Then: { First : "\nlastname-> _______|{lastname}"},
            Else: { First : "\nDont have lastname :(((((("},
        },
        Last : {
            First : "",
            IFBlocks: {
                IfConditionParam : {
                    First : "",
                    IFBlocks: {
                        IfConditionParam : {First : "{position}"},
                        Then: { First : "{company}"},
                        Else: { First : ""},
                    },
                    Last: {First: ""}
                },
                Then: { First : ""},
                Else: { First : "\n{position}"},
            },
            Last: {First : "\n{company}{position}"}
        },
    }
}

export const TestResult2: string = `
__Firstname__|____ <-  firstname
lastname-> _______|_!_Lastname_!_
_(Company(__)Position241_`;


//test 3
export const TestParams3: TestParams = {
    alice: "_1234321_",
    row: "_worrow_",
    bob: "_1234321_",
}

export const TestTamplate3: TTamplateConfig = {
    ParamList : [],
    Tamplate: {First : "\n\n{firstname}{lastname}{company}{position}"},
}

export const TestResult3: string = "\n\n{firstname}{lastname}{company}{position}";


//test 4
export const TestParams4: TestParams = {
    firstname: "{lastname}",
    lastname: "{company}",
    company: "{position}",
    position: "__value__",
}

export const TestTamplate4: TTamplateConfig = {
    ParamList : ["firstname", "lastname", "company", "position"],
    Tamplate: {
        First : "{firstname}{lastname}",
        IFBlocks: {
            IfConditionParam: {First : ""},
            Then: {First : ""},
            Else: {First : ""},
        },
        Last: {First : "{company}{position}"}
    },
}

export const TestResult4: string = "{lastname}{company}{position}__value__";

//test 6
export const TestParams6: TestParams = {
    firstname: "   ",
    lastname: "  5  2",
    company: "    4",
    position: "      6",
};

export const TestTamplate6: TTamplateConfig = {
    ParamList : ["firstname", "lastname", "company", "position"],
    Tamplate: {First : "{firstname}{lastname}{company}{position}"}
};

export const TestResult6 = "     5  2    4      6";