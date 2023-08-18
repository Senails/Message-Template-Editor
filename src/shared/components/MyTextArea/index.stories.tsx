import type { Meta, StoryObj } from '@storybook/react';
import { MyTextArea } from "./index";

const meta = {
    title: 'Shared.Components/MyTextArea',
    component: MyTextArea
} satisfies Meta<typeof MyTextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args :{
        value:"",
        charsLimit:500,
        placeholder:"placeholder"
    }
};

