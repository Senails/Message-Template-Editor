import type { Meta, StoryObj } from '@storybook/react';
import { App } from "./index";

const meta = {
    title: 'Aplication/App',
    component: App
} satisfies Meta<typeof App>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Aplication: Story = {};