import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {  Meta, Story } from '@storybook/react/types-6-0';

import Paragraph from './';

export default {
    title: 'Paragraph',
    component: Paragraph,
  } as Meta;


  export const Standard: Story = () => <Paragraph>Test message</Paragraph>
  export const Bold: Story = () => <Paragraph bold>Bold message</Paragraph>
  export const Italic: Story = () => <Paragraph italic>Italic message</Paragraph>
  export const BoldAndItalic: Story = () => <Paragraph bold italic>Bold and italic message</Paragraph>