import type { Meta, StoryObj } from '@storybook/react';
import { MyTextArea } from "./index";
import { useState } from 'react';

type propsType = {
    value: string,
    disabled?: boolean,
    placeholder?: string,
    charsLimit?: number,
    onChange?: (value:string) => void,
    OnChangeCursorPosition?: (cursorPosition : number|null) => void
}

let Component = (prop:propsType)=>{
    let [text, setText] = useState(prop.value);

    return <div style={{maxWidth:"500px"}}>
        <MyTextArea  {...prop} value={text} onChange={setText}/>
    </div>
}


const meta = {
    title: 'Shared.Components/MyTextArea',
    component: Component
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args:{
        value:"123",
        disabled:false,
        charsLimit:500,
        placeholder:"placeholder",
        
    }
};

