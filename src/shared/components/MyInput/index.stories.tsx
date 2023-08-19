import type { Meta, StoryObj } from '@storybook/react';
import { MyInput } from "./index";
import { useState } from 'react';


let Component = ()=>{
    let [text,setText]=useState("");

    return <div style={{maxWidth:"200px"}}>
        <MyInput 
        value={text} 
        placeholder='name of param' 
        onChange={setText}
        />
    </div>
}


const meta = {
    title: 'Shared.Components/MyInput',
    component : Component,
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
};