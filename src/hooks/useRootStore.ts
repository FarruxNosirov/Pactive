import {useContext} from 'react';
import AppRootStore from '../services/RoorStore';

const useRootStore = () => useContext(AppRootStore);

export default useRootStore;
