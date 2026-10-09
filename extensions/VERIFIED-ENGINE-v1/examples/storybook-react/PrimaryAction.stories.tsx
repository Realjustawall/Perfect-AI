import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within, userEvent } from 'storybook/test';
import { PrimaryAction } from './PrimaryAction';
const meta = {
 title: 'PerfectAI/PrimaryAction', component: PrimaryAction,
 parameters: { a11y: { test: 'error' }, layout: 'centered' },
 args: { label: 'Save changes', language: 'en' }
} satisfies Meta<typeof PrimaryAction>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Idle: Story = {};
export const Busy: Story = { args: { busy: true } };
export const Disabled: Story = { args: { disabled: true } };
export const PersianRTL: Story = { args: { label: 'ذخیرهٔ تغییرات', language: 'fa' } };
export const LongLabel: Story = { args: { label: 'Save all your changes and generate the final production report' } };
export const Interaction: Story = {
 play: async ({ canvasElement }) => {
   const canvas = within(canvasElement);
   await userEvent.click(canvas.getByRole('button', { name: /save changes/i }));
   await expect(canvas.getByRole('status')).toHaveTextContent('Completed');
 }
};
