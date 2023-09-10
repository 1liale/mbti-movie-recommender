/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const insertMovie = /* GraphQL */ `
	mutation InsertMovie($data: MovieInsertInput!) {
		insertMovie(data: $data) {
			_id
			description
			genres
			img_path
			meta {
				certificate
				metascore
				rating
				time
				votes
				__typename
			}
			name
			year
			__typename
		}
	}
`;
