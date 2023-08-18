
export type IFblock = {
    ifConditionParam: string;
    Then: Ttamplate;
    Else: Ttamplate;
}

export type Ttamplate = {
    First: string;
    IFblocks?: IFblock[];
    Last?: string;
}