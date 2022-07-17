import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import { Stack, Box, CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Donor from './components/Donor';
import Histotrac from './components/Histotrac';
import Outport from './components/Outport';
import GenericPRA from './components/GenericPRA';
import Other from './components/Other';
import { Grid } from '@mui/material';

function App() {
   const drawerWidth = 178;

   return (
      <Grid container spacing={0.5}>
         <CssBaseline />
         <Navbar />
         <Grid item sm={2} xs={0}>
            <Sidebar drawerWidth={drawerWidth} />
         </Grid>
         <Grid item sm={6} xs={12}>
            <Feed drawerWidth={drawerWidth}>
               <Routes>
                  {/* <Route path="/" element={<App />} /> */}
                  <Route path="/donor" element={<Donor />} />
                  <Route path="/histotrac" element={<Histotrac />} />
                  <Route path="/outport" element={<Outport />} />
                  <Route path="/genericpra" element={<GenericPRA />} />
                  <Route path="/other" element={<Other />} />
               </Routes>
            </Feed>
         </Grid>
         <Grid item sm={4} xs={0}>
            <Rightbar />
         </Grid>
      </Grid>
   );
}

export default App;
