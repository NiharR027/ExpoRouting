/**
 * RootStackParamList defines all routes and their parameters.
 */
export type RootStackParamList = {
  // Modal route expects an "id" string parameter.
  modal: { id: string };

  // Standalone pages (no parameters).
  calendar: undefined;
  contacts: undefined;
  documents: undefined;
  surveys: undefined;

  // Routes in the drawer's tab navigator.
  "(drawer)/(tabs)/home": undefined;
  "(drawer)/(tabs)/chat": undefined;
  "(drawer)/(tabs)/newsfeed": undefined;
  "(drawer)/(tabs)/notifications": undefined;

  // Drawer settings page.
  settings: undefined;
};
