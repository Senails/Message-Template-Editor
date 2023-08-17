import type { Meta, StoryObj } from '@storybook/react';
import { MyInput } from "./index";

const meta = {
    title: 'Shared.Components/MyInput',
    component: MyInput
} satisfies Meta<typeof MyInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args :{
        
    }
};

