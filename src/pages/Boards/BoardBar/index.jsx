import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import { Tooltip } from '@mui/material'
import Button from '@mui/material/Button'
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1'

const Menu_style = {
  color: 'primary.main',
  backgroundColor: 'white',
  border: 'none',
  padding: '5px',
  borderRadius: '4px',
  '& .MuiSvgIcon-root':{
    color: 'primary.main'
  },
  '&:hover': {
    backgroundColor: 'primary.50'
  }
}

function BoardBar() {
  return (
    <Box sx={{
      // backgroundColor: 'primary.dark',
      width: '100%',
      height: (theme) => theme.trelloCustom.boarbBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      paddingX: 2,
      overflowX: 'auto',
      borderTop: '1px solid #00bfa5'
    }}>
      <Box sx={{ display: 'flex', alignItems:'center', gap: 2 }}>
        <Chip sx={Menu_style}
          icon={<DashboardIcon />} label="NguyenDuyDuc"
          onClick ={() => {

          }}
        />
        <Chip sx={Menu_style}
          icon={<VpnLockIcon />} label="Public/Private"
          onClick ={() => {

          }}
        />
        <Chip sx={Menu_style}
          icon={<AddToDriveIcon />} label="Add to drive"
          onClick ={() => {

          }}
        />
        <Chip sx={Menu_style}
          icon={<BoltIcon />} label="Automation"
          onClick ={() => {

          }}
        />
        <Chip sx={Menu_style}
          icon={<FilterListIcon />} label="Filter"
          onClick ={() => {

          }}
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems:'center', gap: 2 }}>
        <Button variant="outlined" startIcon={<PersonAddAlt1Icon/>}>Invite</Button>
        <AvatarGroup max={4}
          sx={{
            '& .MuiAvatar-root':{
              width: '34px',
              height: '34px',
              fontSize: 16
            }
          }}
        >
          <Tooltip title="Hmm" alt="Hmm">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title="Hmm" alt="Hmm">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title="Hmm" alt="Hmm">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title="Hmm" alt="Hmm">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title="Hmm" alt="Hmm">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title="Hmm" alt="Hmm">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title="Hmm" alt="Hmm">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Tooltip>
          <Tooltip title="Hmm" alt="Hmm">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar