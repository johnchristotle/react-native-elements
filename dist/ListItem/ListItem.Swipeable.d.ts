import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { ListItemBaseProps } from './ListItem';
import { RneFunctionComponent } from '../helpers';
export declare type ListItemSwipeableProps = ListItemBaseProps & {
    leftContent?: React.ReactNode | ((reset: () => void) => React.ReactNode);
    rightContent?: React.ReactNode | ((reset: () => void) => React.ReactNode);
    leftStyle?: StyleProp<ViewStyle>;
    rightStyle?: StyleProp<ViewStyle>;
    leftWidth?: number;
    rightWidth?: number;
    onSwipeBegin?: (direction: 'left' | 'right') => any;
    onSwipeEnd?: () => any;
};
export declare const ListItemSwipeable: RneFunctionComponent<ListItemSwipeableProps>;