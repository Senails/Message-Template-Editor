export type IFBlockStruct = {
    ifConditionParam: TTamplateStruct;
    Then: TTamplateStruct;
    Else: TTamplateStruct;
}

export type TTamplateStruct = {
    First: string;
    IFblocks?: IFBlockStruct;
    Last?: TTamplateStruct;
}