import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { MenuItem } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Register from 'features/Auth/compnnent/Register';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './styles.scss';
export default function Header() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <AttachMoneyIcon
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuItem />
          </AttachMoneyIcon>
          <Typography color="inherit" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" className="link">EZ SHOP</Link>
          </Typography>

          <NavLink className="link" to="/todos" activeClassName="active-name">
            <Button color="inherit">Todos</Button>
          </NavLink>  
          <NavLink className="link" to="/albums">
            <Button color="inherit">Album</Button>
          </NavLink>
          <Button color="inherit" variant="outlined" onClick={handleClickOpen}>Register</Button>
        </Toolbar>
      </AppBar>

      <Dialog open={open} onClose={handleClose} disableEscapeKeyDown>
        <DialogContent>
          <Register></Register>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>

    </Box>
  );
}