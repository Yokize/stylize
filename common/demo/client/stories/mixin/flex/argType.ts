import type { ArgType } from '@storybook/addons';

export const display: ArgType = {
  control: false,
    table: {
    disable: true
  }
};

export const main: ArgType = {
  options: [
    '_empty_',
    'flex-start',
    'flex-end',
    'start',
    'end',
    'left',
    'right',
    'center',
    'space-between',
    'space-around',
    'space-evenly'
  ],
  control: {
    type: 'select'
  }
};

export const direction = {
  options: ['_empty_', 'row', 'row-reverse', 'column', 'column-reverse'],
  control: {
    type: 'select'
  }
}

export const cross={
  options: [
    '_empty_',
    'stretch',
    'baseline',
    'flex-start',
    'flex-end',
    'start',
    'end',
    'self-start',
    'self-end',
    'normal',
    'center',
    'space-between',
    'space-around',
    'space-evenly'
  ],
  control: {
    type: 'select'
  }
};

export const  wrap= {
  options: ['_empty_', 'nowrap', 'wrap', 'wrap-reverse'],
  control: {
    type: 'select'
  }
}

export const content= {
  options: [
    '_empty_',
    'stretch',
    'baseline',
    'flex-start',
    'flex-end',
    'start',
    'end',
    'self-start',
    'self-end',
    'normal',
    'center',
    'space-between',
    'space-around',
    'space-evenly'
  ],
    control: {
    type: 'select'
  }
}

export const children= {
  control: {
    type: 'number'
  }
}
