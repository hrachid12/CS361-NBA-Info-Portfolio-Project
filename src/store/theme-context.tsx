import React, { useState } from 'react';

type ThemeContextObj = { theme: string; changeTheme: (theme: string) => void, selectTheme: (light: string, dark: string) => string};

export const ThemeContext = React.createContext<ThemeContextObj>({
	theme: '',
	changeTheme: (theme: string) => {},
	selectTheme: (light: string, dark: string) => {return light || dark}
});

const ThemeContextProvider: React.FC = (props) => {
	const [ theme, setTheme ] = useState('light');

	const changeThemeHandler = (theme: string) => {
		setTheme(theme);
	};

	const selectThemeHandler = (light: string, dark: string) => {
		return theme === 'light' ? light : dark;
	}

	const contextValue: ThemeContextObj = {
		theme: theme,
		changeTheme: changeThemeHandler,
		selectTheme: selectThemeHandler
	};

	return <ThemeContext.Provider value={contextValue}>{props.children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;