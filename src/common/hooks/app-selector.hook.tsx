import { AppState } from '@/store/store';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export default useAppSelector;
