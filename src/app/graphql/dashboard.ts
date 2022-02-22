import { gql } from 'apollo-angular';
export const DASHBOARD_GRAPHQL = {
  QUERIES: {

    results: gql`query {
      # time series data
      results (countries: ["US", "Canada"], date: { lt: "3/10/2020" }) {
        country {
          name
        }
        date
        confirmed
        deaths
        recovered
        growthRate
      }

      # by country
      country(name: "US") {
        name
        mostRecent {
          date(format: "yyyy-MM-dd")
          confirmed
        }
      }
    }`
  }

}
