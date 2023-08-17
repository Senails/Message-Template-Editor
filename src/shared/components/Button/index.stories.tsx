import type { Meta, StoryObj } from '@storybook/react';
import { Button } from "./index";

const meta = {
    title: 'Shared.Components/Button',
    component: Button
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args :{
        name : 'name',
        onClick : ()=>console.log(1)
    }
};

