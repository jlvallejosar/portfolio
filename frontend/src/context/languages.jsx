import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

// Creamos el contexto
const LanguageContext = createContext();

// Hook personalizado para acceder al contexto
export const useLanguage = () => useContext(LanguageContext);

// Proveedor del contexto
export const LanguageProvider = ({ children }) => {
	// Estado para almacenar el idioma seleccionado
	const [language, setLanguage] = useState('es');

	// Función para cambiar el idioma
	const changeLanguage = lang => {
		setLanguage(lang);
	};

	// Función para obtener el curriculum vitae correspondiente al idioma seleccionado
	const getCV = () => {
		// Aquí puedes realizar la lógica para obtener el CV según el idioma seleccionado
		// Por ejemplo, podrías hacer una petición a la API correspondiente al idioma seleccionado
		// y devolver los datos del CV en ese idioma
		// En este ejemplo, simplemente devolvemos una cadena indicando el idioma seleccionado
		return `./micv/${language}`;
	};

	return (
		<LanguageContext.Provider value={{ language, changeLanguage, getCV }}>
			{children}
		</LanguageContext.Provider>
	);
};

LanguageProvider.propTypes = {
	children: PropTypes.node,
};
