import type { Meta, StoryObj } from '@storybook/react';
import { MyInput } from "./index";

const meta = {
    title: 'Shared.Components/MyInput',
    component: MyInput
} satisfies Meta<typeof MyInput>;

export default meta;
type Story = StoryObj<typeof meta>;

let Vval = "";

export const Primary: Story = {
    args :{
        type:"text",
        name:"paramname",
        placeholder:"name of param",
        value:Vval,
        onChange:(text:string)=>{Vval = text}
    },
};

