import type { Meta, StoryObj } from '@storybook/react';
import { Button } from "./index";
import { MouseHoverHint } from '../MouseHoverHint';

type TProps = {
    name: string;
    onClick?: () => void;
    textSelectable? : boolean;
}

let Component = (props:TProps)=>{
    return <MouseHoverHint text='кнопка'>
        <Button {...props}/>
    </MouseHoverHint>
}


const meta = {
    title: 'Shared.Components/Button',
    component: Component
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args :{
        name : 'name',
        onClick : ()=>console.log(1),
        textSelectable:false,
    }
};

