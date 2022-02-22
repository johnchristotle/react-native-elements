import React from 'react';
import { StyleProp, PressableProps, ViewStyle } from 'react-native';
import { RneFunctionComponent } from '../helpers';
export declare type ListItemBaseProps = PressableProps & {
    containerStyle?: StyleProp<ViewStyle>;
    disabledStyle?: StyleProp<ViewStyle>;
    topDivider?: boolean;
    bottomDivider?: boolean;
    pad?: number;
    Component?: typeof React.Component;
    ViewComponent?: typeof React.Component;
    linearGradientProps?: any;
    children?: any;
};
export declare const ListItemBase: RneFunctionComponent<ListItemBaseProps>;