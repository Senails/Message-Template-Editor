import type { Meta, StoryObj } from '@storybook/react';
import { TamplatePreviewer } from "./index";

const meta = {
    title: 'Tamplate.Previewer/TamplatePreviewer',
    component: TamplatePreviewer
} satisfies Meta<typeof TamplatePreviewer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args:{
        params :[
            'namedsf1',
            'namfe2',
            'namefdsfs3',
        ],
        tamplate: {
            First:""
        }
    }
};

