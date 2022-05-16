import './App.css';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ItemCounter } from './context/ItemCounter';

const theme = createTheme({
	palette: {
		type: 'light',
		primary: {
			main: '#3f8db5',
		},
		secondary: {
			main: '#983a5c',
		},
		error: {
			main: '#f44336',
		},
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<ItemCounter>
				<NavBar />
				<ItemListContainer />
			</ItemCounter>
		</ThemeProvider>
	);
}

export default App;
