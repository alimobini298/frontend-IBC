import type { tagAnatomy as parts } from '@chakra-ui/anatomy';
import type { ComponentStyleConfig } from '@chakra-ui/theme';
import { mode } from '@chakra-ui/theme-tools';
import type { PartsStyleFunction } from '@chakra-ui/theme-tools';

import getDefaultTransitionProps from '../utils/getDefaultTransitionProps';

const variantGray: PartsStyleFunction<typeof parts> = (props) => {
  const transitionProps = getDefaultTransitionProps();

  return {
    container: {
      bg: mode('blackAlpha.100', 'whiteAlpha.400')(props),
      color: mode('gray.600', 'gray.50')(props),
      ...transitionProps,
    },
  };
};

const variants = {
  gray: variantGray,
};

const Tag: ComponentStyleConfig = {
  baseStyle: {
    container: {
      display: 'inline-block',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      borderRadius: 'sm',
    },
  },
  variants,
};

export default Tag;
