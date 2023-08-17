import type { Meta, StoryObj } from '@storybook/react';
import { ButtonList } from "./index";

const meta = {
    title: 'Shared.Components/ButtonList',
    component: ButtonList
} satisfies Meta<typeof ButtonList>;

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
        names : names,
        onClick(name) {
            console.log(name)
        },
    }
};

export const withTitel: Story = {
    args :{
        titel:"Titel",
        names : names,
        onClick(name) {
            console.log(name)
        },
    }
};

export const withJustifyContentRight: Story = {
    args :{
        titel:"Titel",
        justifyContent:"center",
        names : names,
        onClick(name) {
            console.log(name)
        },
    }
};

