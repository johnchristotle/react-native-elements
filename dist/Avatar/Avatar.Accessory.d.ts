import { StyleProp, ViewStyle, ColorValue } from 'react-native';
import { ImageProps } from '../Image';
import { IconProps } from '../Icon';
import { InlinePressableProps, RneFunctionComponent } from '../helpers';
export declare type AccessoryProps = Partial<IconProps> & Partial<ImageProps> & {
    underlayColor?: ColorValue;
    style?: StyleProp<ViewStyle>;
} & InlinePressableProps;
export declare const Accessory: RneFunctionComponent<AccessoryProps>;