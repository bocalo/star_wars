import {
	SWAPI_PARAM_PAGE,
	HTTP,
	HTTPS,
	SWAPI_PEOPLE,
	SWAPI_ROOT,
	GUIDE_IMG_EXTENSION,
	URL_IMG_PERSON,
} from '@constants/api';

//-----------------------------------------------
// Получить ID страницы для персонажей
//-----------------------------------------------
export const getPeoplePageId = (url) => {
	const pos = url.lastIndexOf(SWAPI_PARAM_PAGE);
	const id = url.slice(pos + SWAPI_PARAM_PAGE.length, url.length);

	return Number(id);
};

const getId = (url, category) => {
	const id = url.replace(HTTPS + SWAPI_ROOT + category, '').replace(/\//g, '');

	return id;
};

export const getPeopleId = (url) => getId(url, SWAPI_PEOPLE);

export const getPeopleImage = (id) =>
	`${URL_IMG_PERSON}/${id + GUIDE_IMG_EXTENSION}`;
