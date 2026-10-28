import { Meta, Story } from '@storybook/react';
import { Figure } from 'components/Figure';
import ImageViewer, { ImageViewerProps } from 'components/ImageViewer';
import React from 'react';
import image from './assets/filter-coffee.jpg';
import styles from './assets/styles/ImageViewer.module.scss';
/* eslint-disable no-alert */

export default {
  title: 'Controls/Image Viewer',
  component: ImageViewer,
} as Meta;

const Template: Story<ImageViewerProps> = (args) => (
  <Figure
    className={styles.Figure}
    caption={
      <>
        From a{' '}
        <a target="_blank" href="https://www.codefeetime.com/">
          Codefee Time
        </a>
      </>
    }
  >
    <ImageViewer {...args} />
  </Figure>
);

export const Default = Template.bind({ maximize: true });
Default.args = {
  src: image,
  alt: 'Filter Coffee',
} as ImageViewerProps;
