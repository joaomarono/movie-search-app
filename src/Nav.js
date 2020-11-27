import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InfoIcon from '@material-ui/icons/Info'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import HouseIcon from '@material-ui/icons/House'

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
))

function Nav() {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className='menu'>
      <Button
        aria-controls='customized-menu'
        aria-haspopup='true'
        variant='contained'
        color='primary'
        onClick={handleClick}
      >
        Open Menu
      </Button>
      <StyledMenu
        id='customized-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to='/'>
          <MenuItem>
            <ListItemIcon>
              <HouseIcon fontSize='small' />
            </ListItemIcon>
            <ListItemText className='link' primary='Home' />
          </MenuItem>
        </Link>
        <Link to='/list'>
          <MenuItem>
            <ListItemIcon>
              <FavoriteBorderIcon fontSize='small' />
            </ListItemIcon>
            <ListItemText className='link' primary='Favorite List' />
          </MenuItem>
        </Link>
        <Link to='/about'>
          <MenuItem>
            <ListItemIcon>
              <InfoIcon fontSize='small' />
            </ListItemIcon>
            <ListItemText className='link' primary='About' />
          </MenuItem>
        </Link>
      </StyledMenu>
    </div>

    /*
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/list'>Favorite List</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
    </div>
    */
  )
}

export default Nav
