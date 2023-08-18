import type { Meta, StoryObj } from '@storybook/react';
import { IfBlock } from "./index";

const meta = {
    title: 'Tamplate.Editor/IfBlock',
    component: IfBlock
} satisfies Meta<typeof IfBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const primary: Story = {
    args:{
        ifParams:{
            ifConditionParam:"isactve",
            Then:{First:"one"},
            Else:{First:"two"},
        },
    }
};

