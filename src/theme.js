import { createMuiTheme } from '@material-ui/core/styles';
import { blueGrey } from '@material-ui/core/colors';

export const theme = createMuiTheme({
  palette:{
    primary: {
      main:blueGrey[500]
    }
  },
  overrides:{
    MuiTypography:{
      h1:{
        fontFamily:'monospace',
        fontSize:'40px',
        fontWeight:'700'
      }
    },
    MuiDrawer:{
      paper:{
        backgroundColor:'#f0f8ff'
      }
    },
  }
});
