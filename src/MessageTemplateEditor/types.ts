export type IFBlockStruct = {
    ifConditionParam: TtamplateStruct;
    Then: TtamplateStruct;
    Else: TtamplateStruct;
}

export type TtamplateStruct = {
    First: string;
    IFblocks?: IFBlockStruct;
    Last?: TtamplateStruct;
}