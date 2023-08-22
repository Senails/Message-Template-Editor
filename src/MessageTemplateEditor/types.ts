export type IFBlockStruct = {
    IfConditionParam: TTamplateStruct;
    Then: TTamplateStruct;
    Else: TTamplateStruct;
}

export type TTamplateStruct = {
    First: string;
    IFBlocks?: IFBlockStruct;
    Last?: TTamplateStruct;
}

export type TTamplateConfig = {
    ParamList : string[],
    Tamplate : TTamplateStruct,
}