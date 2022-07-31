import { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import { Stack, Box, CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { Grid } from '@mui/material';

function App() {
   const drawerWidth = 178;
   const [category, setCategory] = useState(0);

   const handleCategory = (category) => {
      setCategory(category);
   };

   return (
      <Grid container spacing={0.5}>
         <CssBaseline />
         <Navbar />
         <Grid item sm={2} xs={0}>
            <Sidebar
               drawerWidth={drawerWidth}
               handleCategory={handleCategory}
            />
         </Grid>
         <Grid item sm={6} xs={12}>
            <Feed category={category} />
         </Grid>
         <Grid item sm={4} xs={0}>
            <Rightbar />
         </Grid>
      </Grid>
   );
}

export default App;
