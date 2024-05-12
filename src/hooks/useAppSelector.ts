import { RootState } from '@/redux/rootReducer/rootReducer';
import { useSelector } from 'react-redux';

export const useAppSelector = useSelector.withTypes<RootState>();
