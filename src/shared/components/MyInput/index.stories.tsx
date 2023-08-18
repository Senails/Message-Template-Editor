import type { Meta, StoryObj } from '@storybook/react';
import { MyInput } from "./index";
import { useState } from 'react';


let Component = ()=>{
    let [text,setText]=useState("");
    return <MyInput value={text} onChange={setText} placeholder='name of param'/>
}


const meta = {
    title: 'Shared.Components/MyInput',
    component : Component,
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
};