/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type MovieInsertInput = {
	name?: string | null;
	year?: number | null;
	_id?: string | null;
	description?: string | null;
	genres?: Array<string | null> | null;
	img_path?: string | null;
	meta?: MovieMetumInsertInput | null;
};

export type MovieMetumInsertInput = {
	votes?: string | null;
	certificate?: string | null;
	metascore?: string | null;
	rating?: string | null;
	time?: string | null;
};

export type Movie = {
	__typename: 'Movie';
	_id?: string | null;
	description?: string | null;
	genres?: Array<string | null> | null;
	img_path?: string | null;
	meta?: MovieMetum | null;
	name?: string | null;
	year?: number | null;
};

export type MovieMetum = {
	__typename: 'MovieMetum';
	certificate?: string | null;
	metascore?: string | null;
	rating?: string | null;
	time?: string | null;
	votes?: string | null;
};

export enum MovieSortByInput {
	YEAR_ASC = 'YEAR_ASC',
	DESCRIPTION_ASC = 'DESCRIPTION_ASC',
	DESCRIPTION_DESC = 'DESCRIPTION_DESC',
	IMG_PATH_ASC = 'IMG_PATH_ASC',
	IMG_PATH_DESC = 'IMG_PATH_DESC',
	NAME_ASC = 'NAME_ASC',
	_ID_ASC = '_ID_ASC',
	_ID_DESC = '_ID_DESC',
	NAME_DESC = 'NAME_DESC',
	YEAR_DESC = 'YEAR_DESC'
}

export type MovieQueryInput = {
	_id_gte?: string | null;
	meta_exists?: boolean | null;
	year_gte?: number | null;
	_id_lte?: string | null;
	description_lt?: string | null;
	img_path_gt?: string | null;
	genres_nin?: Array<string | null> | null;
	name?: string | null;
	img_path_gte?: string | null;
	meta?: MovieMetumQueryInput | null;
	_id?: string | null;
	year_ne?: number | null;
	img_path?: string | null;
	year_lt?: number | null;
	name_gte?: string | null;
	description_nin?: Array<string | null> | null;
	name_lte?: string | null;
	_id_nin?: Array<string | null> | null;
	img_path_nin?: Array<string | null> | null;
	name_exists?: boolean | null;
	description_gt?: string | null;
	img_path_ne?: string | null;
	img_path_lt?: string | null;
	name_ne?: string | null;
	name_in?: Array<string | null> | null;
	year_in?: Array<number | null> | null;
	description_lte?: string | null;
	img_path_in?: Array<string | null> | null;
	_id_lt?: string | null;
	_id_ne?: string | null;
	year_nin?: Array<number | null> | null;
	name_gt?: string | null;
	img_path_exists?: boolean | null;
	_id_exists?: boolean | null;
	name_lt?: string | null;
	description_ne?: string | null;
	OR?: Array<MovieQueryInput> | null;
	year?: number | null;
	genres_in?: Array<string | null> | null;
	genres_exists?: boolean | null;
	description_exists?: boolean | null;
	_id_gt?: string | null;
	AND?: Array<MovieQueryInput> | null;
	name_nin?: Array<string | null> | null;
	_id_in?: Array<string | null> | null;
	img_path_lte?: string | null;
	genres?: Array<string | null> | null;
	description_gte?: string | null;
	description_in?: Array<string | null> | null;
	year_gt?: number | null;
	description?: string | null;
	year_lte?: number | null;
	year_exists?: boolean | null;
};

export type MovieMetumQueryInput = {
	certificate?: string | null;
	certificate_exists?: boolean | null;
	metascore_exists?: boolean | null;
	certificate_in?: Array<string | null> | null;
	metascore?: string | null;
	rating_gte?: string | null;
	rating_lt?: string | null;
	votes_ne?: string | null;
	metascore_in?: Array<string | null> | null;
	metascore_ne?: string | null;
	time_gte?: string | null;
	rating_exists?: boolean | null;
	votes_in?: Array<string | null> | null;
	rating_nin?: Array<string | null> | null;
	rating?: string | null;
	certificate_nin?: Array<string | null> | null;
	rating_ne?: string | null;
	metascore_lt?: string | null;
	votes_gte?: string | null;
	votes_gt?: string | null;
	certificate_gt?: string | null;
	time_in?: Array<string | null> | null;
	time_lte?: string | null;
	OR?: Array<MovieMetumQueryInput> | null;
	time?: string | null;
	votes_lte?: string | null;
	time_gt?: string | null;
	time_nin?: Array<string | null> | null;
	certificate_ne?: string | null;
	certificate_lte?: string | null;
	AND?: Array<MovieMetumQueryInput> | null;
	votes?: string | null;
	rating_in?: Array<string | null> | null;
	rating_lte?: string | null;
	votes_lt?: string | null;
	votes_nin?: Array<string | null> | null;
	metascore_lte?: string | null;
	time_exists?: boolean | null;
	time_ne?: string | null;
	metascore_nin?: Array<string | null> | null;
	certificate_lt?: string | null;
	certificate_gte?: string | null;
	metascore_gte?: string | null;
	rating_gt?: string | null;
	metascore_gt?: string | null;
	time_lt?: string | null;
	votes_exists?: boolean | null;
};

export type InsertMovieMutationVariables = {
	data: MovieInsertInput;
};

export type InsertMovieMutation = {
	insertMovie?: {
		__typename: 'Movie';
		_id?: string | null;
		description?: string | null;
		genres?: Array<string | null> | null;
		img_path?: string | null;
		meta?: {
			__typename: 'MovieMetum';
			certificate?: string | null;
			metascore?: string | null;
			rating?: string | null;
			time?: string | null;
			votes?: string | null;
		} | null;
		name?: string | null;
		year?: number | null;
	} | null;
};

export type ListAllMoviesQueryVariables = {
	limit?: number | null;
	skip?: number | null;
};

export type ListAllMoviesQuery = {
	listAllMovies: Array<{
		__typename: 'Movie';
		_id?: string | null;
		description?: string | null;
		genres?: Array<string | null> | null;
		img_path?: string | null;
		meta?: {
			__typename: 'MovieMetum';
			certificate?: string | null;
			metascore?: string | null;
			rating?: string | null;
			time?: string | null;
			votes?: string | null;
		} | null;
		name?: string | null;
		year?: number | null;
	} | null>;
};

export type GetMoviesQueryVariables = {
	sortBy?: MovieSortByInput | null;
	query?: MovieQueryInput | null;
	limit?: number | null;
	skip?: number | null;
};

export type GetMoviesQuery = {
	getMovies: Array<{
		__typename: 'Movie';
		_id?: string | null;
		description?: string | null;
		genres?: Array<string | null> | null;
		img_path?: string | null;
		meta?: {
			__typename: 'MovieMetum';
			certificate?: string | null;
			metascore?: string | null;
			rating?: string | null;
			time?: string | null;
			votes?: string | null;
		} | null;
		name?: string | null;
		year?: number | null;
	} | null>;
};
