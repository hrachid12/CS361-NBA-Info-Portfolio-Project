import React, { useState } from 'react';

type LangContextObj = { language: string; changeLanguage: (lang: string) => void };

export const LanguageContext = React.createContext<LangContextObj>({
	language: '',
	changeLanguage: (lang: string) => {}
});

const LanguageContextProvider: React.FC = (props) => {
	const [ language, setLanguage ] = useState('english');

	const changeLanguageHandler = (lang: string) => {
		setLanguage(lang);
	};

	const contextValue: LangContextObj = {
		language: language,
		changeLanguage: changeLanguageHandler
	};

	return <LanguageContext.Provider value={contextValue}>{props.children}</LanguageContext.Provider>;
};

export default LanguageContextProvider;