import { PropsWithChildren, ReactElement } from 'react';
import { AppBar } from '@mui/material';

interface MainNavigatorProps {}

function MainNavigator({
  children,
}: PropsWithChildren<MainNavigatorProps>): ReactElement {
  return (
    <>
      <AppBar />
      {children}
    </>
  );
}

export default MainNavigator;
