import React from 'react';
import { Episode } from './components/Episode/Episode';
import SearchField from "./components/SearchField"


function App() {
  return (
    <div className="App">
      <SearchField></SearchField>
      <Episode></Episode>
    </div>
  );
}

export default App;
