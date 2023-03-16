import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import './App.css';

import { Home } from './components';

import * as React from 'react';

import Sheet from '@mui/joy/Sheet';
const modifiers = [
  {
    name: 'flip',
    options: {
      fallbackPlacements: ['bottom'],
    },
  },
];

export default function App() {
  return (
    <Sheet
      orientation="horizontal"
      variant="solid"
      invertedColors
      sx={{
        gap: 10,
        minHeight: 240,
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexGrow: 1,
        zIndex: 0,
      }}
    >
      <Router>
        <Routes>

          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </Sheet>
  );
}
