import type { Meta, StoryObj } from '@storybook/react';
import { RTextArea } from "./index";

const meta = {
    title: 'Shared.Components/RTextArea',
    component: RTextArea
} satisfies Meta<typeof RTextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args :{
        
    }
};

