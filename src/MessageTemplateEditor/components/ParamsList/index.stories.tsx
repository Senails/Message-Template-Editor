import type { Meta, StoryObj } from '@storybook/react';
import { ParamsList } from "./index";

const meta = {
    title: 'Tamplate.Editor/components/ParamsList',
    component: ParamsList
} satisfies Meta<typeof ParamsList>;

export default meta;
type Story = StoryObj<typeof meta>;

let names = [
    'namedsf1',
    'namfe2',
    'namefdsfs3',
    'namfe2',
    'namefdsfs3',
    'namfe2',
];

export const primary: Story = {
    args :{
        params : names,
        onClick(name) {
            console.log(name)
        },
    }
};

