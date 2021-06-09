import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from './../index';
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
