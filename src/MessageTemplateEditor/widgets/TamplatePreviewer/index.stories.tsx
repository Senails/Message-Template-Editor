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
            First:"{firstname}|___ parametr on start string",
            IFblocks:{
                ifConditionParam: {
                    First:"{lastname}"
                },
                Then:{
                    First:"\nparametr on endOfString ____1111|{lastname}"
                },
                Else:{
                    First:"\nparametr on endOfString ____2222|{lastname}"
                }
            },
            Last:{
                First:"",
                IFblocks:{
                    ifConditionParam: {
                        First:"{company}"
                    },
                    Then:{
                        First:"\nparametr on Center ____| {company} |___ "
                    },
                    Else:{
                        First:"\nparametr on Center ____| {company} |___ "
                    }
                },
                Last:{
                    First:"\nmany space            {position}          "
                }
            }
        }
    }
};

