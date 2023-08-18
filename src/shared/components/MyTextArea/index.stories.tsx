import type { Meta, StoryObj } from '@storybook/react';
import { MyTextArea } from "./index";
import { useState } from 'react';


let Component = ()=>{
    let [text,setText]=useState("");
    return <MyTextArea 
        value={text} 
        onChange={setText} 
        placeholder='placeholder'
        charsLimit={500}
    />
}


const meta = {
    title: 'Shared.Components/MyTextArea',
    component: Component
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
};

