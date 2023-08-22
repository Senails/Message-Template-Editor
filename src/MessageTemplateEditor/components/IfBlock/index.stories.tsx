import type { Meta, StoryObj } from '@storybook/react';
import { IfBlock } from "./index";

const meta = {
    title: 'Tamplate.Editor/components/IfBlock',
    component: IfBlock
} satisfies Meta<typeof IfBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args:{
        ifParams:{
            IfConditionParam:{First:"condition"},
            Then:{First:"one"},
            Else:{First:"two"},
        },
        path:[],
        functions:{
            DeleteIfBlock: ()=>{},
            ChangeState: ()=>{},
            ChangeCursorPosition: ()=>{}
        }
    }
};

