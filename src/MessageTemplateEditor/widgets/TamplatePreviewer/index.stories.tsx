import type { Meta, StoryObj } from '@storybook/react';
import { TamplatePreviewer } from "./index";

const meta = {
    title: 'Tamplate.Editor/TamplatePreviewer',
    component: TamplatePreviewer
} satisfies Meta<typeof TamplatePreviewer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args:{
        params :["firstname", "lastname", "company", "position"],
        tamplate: {
            First:"Hello, {firstname}!",
            IFblocks:{
                ifConditionParam: {
                    First:"{lastname}"
                },
                Then:{
                    First:"Your lastname is {lastname}"
                },
                Else:{
                    First:"What your lastname?"
                }
            },
            Last:{
                First:"",
                IFblocks:{
                    ifConditionParam: {
                        First:"{position}"
                    },
                    Then:{
                        First:"Are your in {position}?"
                    },
                    Else:{
                        First:"Where are your?"
                    }
                },
                Last:{
                    First:"{company} send to give you manual"
                }
            }
        }
    }
};

