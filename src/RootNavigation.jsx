import { createNavigationContainerRef } from "@react-navigation/native";

// See https://reactnavigation.org/docs/navigating-without-navigation-prop/

export const navigationRef = createNavigationContainerRef();

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export function goBack() {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
}

const RootNavigation = { navigate, goBack};
export default RootNavigation;
