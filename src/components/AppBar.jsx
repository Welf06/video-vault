import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

import Card from './Card'
import logo from "../styles/logo.svg";

import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, connectSearchBox, Hits, Pagination, Configure } from 'react-instantsearch-dom';

const searchClient = algoliasearch(`CPZV9S2DTE`, `0de91e6202ef79f0b14a0d6065f493fc`);


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '50ch',
      '&:focus': {
        width: '60ch',
      },
    },
  },
}));

const CustomSearchBox = connectSearchBox(SearchAppBar);

function SearchAppBar({currentRefinement, isSearchStalled, refine}) {
  return (
    <Box sx={{ flexGrow: 2 }}>
      <AppBar position="static"
      style={{backgroundColor: '#00a27e', color: 'white', padding: '5px 5vw 5px 5vw'}}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <div style={{
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'left',
               gap: '10px'
            }}>
            <img src={logo} alt="logo"
               style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10%',
                  objectFit: 'cover'
               }}
            />
            Vivault
            </div>
          </Typography>
          <Search
          >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          value={currentRefinement}
          onChange={event => refine(event.currentTarget.value)}
          searchAsYouType={false}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default function AngoliaSearchAppBar() {
   return (
      <>
      <InstantSearch indexName="firebase-search-index" searchClient={searchClient}>
      <Configure hitsPerPage={20} />
         <CustomSearchBox />
         <div className='card-container'>
         <Hits hitComponent={Card} />
         </div>
         <Pagination />
      </InstantSearch>
      </>
      
   );
   }
