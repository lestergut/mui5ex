import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import { Stack, Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Donor from './components/Donor';
import Histotrac from './components/Histotrac';
import Outport from './components/Outport';
import GenericPRA from './components/GenericPRA';
import Other from './components/Other';

function App() {
   return (
      <Box>
         <Navbar />
         <Stack
            direction="row"
            spacing={0}
            justifyContent="space-between"
            alignItems="flex-start"
         >
            <Sidebar />
            <Feed>
               <Routes>
                  {/* <Route path="/" element={<App />} /> */}
                  <Route path="/donor" element={<Donor />} />
                  <Route path="/histotrac" element={<Histotrac />} />
                  <Route path="/outport" element={<Outport />} />
                  <Route path="/genericpra" element={<GenericPRA />} />
                  <Route path="/other" element={<Other />} />
               </Routes>
            </Feed>
            <Rightbar />
         </Stack>
      </Box>
   );
}

export default App;
