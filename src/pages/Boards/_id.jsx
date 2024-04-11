// import { useColorScheme } from '@mui/material/styles'
// import InputLabel from '@mui/material/InputLabel'
// import MenuItem from '@mui/material/MenuItem'
// import FormControl from '@mui/material/FormControl'
// import Select from '@mui/material/Select'
// import LightModeIcon from '@mui/icons-material/LightMode'
// import DarkModeIcon from '@mui/icons-material/DarkMode'
// import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import ModeSelect from '../../components/ModeSelect'

function Board() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh', backgroundColor:'primary.main' }}>
      <Box sx={{
        backgroundColor: 'primary.light',
        width: '100%',
        height: (theme) => theme.trelloCustom.appBarHeight,
        display: 'flex',
        alignItems: 'center'
      }}>
        <ModeSelect/>
      </Box>
      <Box sx={{
        backgroundColor: 'primary.dark',
        width: '100%',
        height: (theme) => theme.trelloCustom.boarbBarHeight,
        display: 'flex',
        alignItems: 'center'
      }}>
          Board bar
      </Box>
      <Box sx={{
        backgroundColor: 'primary.main',
        width: '100%',
        height: (theme) => `calc(100vh - ${theme.trelloCustom.appBarHeight} - ${theme.trelloCustom.boarbBarHeight})`,
        display: 'flex',
        alignItems: 'center'
      }}>
          Content
      </Box>
    </Container>
  )
}

export default Board