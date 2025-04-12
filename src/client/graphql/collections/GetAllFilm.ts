import { graphql } from '@client/graphql/gql-gen'

export const GetAllFilmQuery = graphql(`
  query GetAllFilm {
    allFilms {
      films {
        title
        director
        releaseDate
        speciesConnection {
          species {
            name
            classification
            homeworld {
              name
            }
          }
        }
      }
    }
  }
`)
