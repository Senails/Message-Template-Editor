
export type IFblock = {
    ifConditionParam: string;
    Then: Ttamplate;
    Else: Ttamplate;
}

export type Ttamplate = {
    First: string;
    IFblock?: IFblock;
    Last?: string;
}