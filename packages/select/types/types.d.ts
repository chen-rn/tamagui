import type { ContextData, FloatingContext, ReferenceType } from '@floating-ui/react';
import type { NativeValue, SizeTokens } from '@tamagui/core';
import type { Scope } from '@tamagui/create-context';
import type { ThemeableStackProps, YStackProps } from '@tamagui/stacks';
import type { DispatchWithoutAction, HTMLProps, MutableRefObject, ReactNode } from 'react';
export type Direction = 'ltr' | 'rtl';
export type ScopedProps<P> = P & {
    __scopeSelect?: Scope;
};
export type SelectImplProps = ScopedProps<SelectProps> & {
    activeIndexRef: any;
    selectedIndexRef: any;
    listContentRef: any;
};
export interface SelectProps {
    id?: string;
    children?: ReactNode;
    value?: string;
    defaultValue?: string;
    onValueChange?(value: string): void;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?(open: boolean): void;
    dir?: Direction;
    name?: string;
    autoComplete?: string;
    size?: SizeTokens;
    /**
     * If passed, will render a native component instead of the custom one. Currently only `web` is supported.
     */
    native?: NativeValue<'web'>;
}
export interface SelectContextValue {
    dir?: Direction;
    scopeKey: string;
    sheetBreakpoint: string | boolean | null;
    size?: SizeTokens;
    value: any;
    selectedItem: ReactNode;
    setSelectedItem: (item: ReactNode) => void;
    selectedIndex: number;
    setSelectedIndex: (index: number) => void;
    activeIndex: number | null;
    setActiveIndex: (index: number | null) => void;
    setValueAtIndex: (index: number, value: string) => void;
    open: boolean;
    setOpen: (open: boolean) => void;
    onChange: (value: string) => void;
    valueNode: Element | null;
    onValueNodeChange(node: HTMLElement): void;
    forceUpdate: DispatchWithoutAction;
    isInSheet?: boolean;
    fallback: boolean;
    blockSelection: boolean;
    allowSelectRef?: MutableRefObject<boolean>;
    allowMouseUpRef?: MutableRefObject<boolean>;
    upArrowRef?: MutableRefObject<HTMLDivElement | null>;
    downArrowRef?: MutableRefObject<HTMLDivElement | null>;
    selectTimeoutRef?: MutableRefObject<any>;
    setScrollTop?: Function;
    setInnerOffset?: Function;
    dataRef?: MutableRefObject<ContextData>;
    controlledScrolling?: boolean;
    listRef?: MutableRefObject<Array<HTMLElement | null>>;
    canScrollUp?: boolean;
    canScrollDown?: boolean;
    floatingContext?: FloatingContext<ReferenceType>;
    interactions?: {
        getReferenceProps: (userProps?: HTMLProps<Element> | undefined) => any;
        getFloatingProps: (userProps?: HTMLProps<HTMLElement> | undefined) => any;
        getItemProps: (userProps?: HTMLProps<HTMLElement> | undefined) => any;
    };
    native?: NativeValue;
    shouldRenderWebNative: boolean;
    /** update floating-ui to recalculate */
    update?: () => void;
}
export type SelectViewportProps = ThemeableStackProps & {
    size?: SizeTokens;
    disableScroll?: boolean;
};
export type SelectContentProps = ScopedProps<{
    children?: React.ReactNode;
    zIndex?: number;
}>;
export interface SelectScrollButtonImplProps extends YStackProps {
    dir: 'up' | 'down';
    componentName: string;
}
export interface SelectScrollButtonProps extends Omit<SelectScrollButtonImplProps, 'dir' | 'componentName'> {
}
//# sourceMappingURL=types.d.ts.map