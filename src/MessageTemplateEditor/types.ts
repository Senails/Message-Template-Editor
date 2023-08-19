
export type IFblock = {
    ifConditionParam: Ttamplate;
    Then: Ttamplate;
    Else: Ttamplate;
}

export type Ttamplate = {
    First: string;
    IFblocks?: IFblock;
    Last?: Ttamplate;
}