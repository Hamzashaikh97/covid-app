import React, {useState} from 'react';
import './App.css';
import NavBar from './Components/navbar'
import InfoPanel from './Components/InfoPanel'
import SelectionTab from './Components/selectionTab'



function App() {
	const screenConfig = useState(0);

  return (
	<div>

		<NavBar />
		<SelectionTab screenConfig={screenConfig}/>

		<InfoPanel currentScreen={screenConfig}/>


		
	</div>
  );
}

export default App;