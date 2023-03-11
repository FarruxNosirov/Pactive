import {
  createNavigationContainerRef,
  NavigationContainerRefWithCurrent,
} from '@react-navigation/native';
import {AllRoutes} from '../routes/AllRoutes';

export default class NavigationService {
  static ref: NavigationContainerRefWithCurrent<any> =
    createNavigationContainerRef<any>();
  static navigate = (
    name: keyof typeof AllRoutes,
    params?: {[key: string]: string | number | undefined},
  ) => {
    if (this.ref.isReady()) {
      this.ref.navigate(AllRoutes[name], params);
    }
  };
  static goBack = () => {
    if (this.ref.isReady()) {
      this.ref.goBack();
    }
  };
}
