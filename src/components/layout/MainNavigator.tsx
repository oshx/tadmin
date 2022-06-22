import { PropsWithChildren, ReactElement } from 'react';
import {
  AppBar,
  Box,
  Typography,
  Toolbar,
  IconButton,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

interface MainNavigatorProps {
  title: string;
}

function MainNavigator({
  title,
  children,
}: PropsWithChildren<MainNavigatorProps>): ReactElement {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <Button color="inherit">로그인</Button>
        </Toolbar>
      </AppBar>
      {children}
    </Box>
  );
}

export default MainNavigator;
