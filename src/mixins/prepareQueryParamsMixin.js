import { isValidLimitQuery, isValidPageQuery } from '../router/util'
/**
 * loop over all component props that uses in url
 * return only valid props
 */
export default {
  methods: {
    prepareQueryParamsMixin (queryPropList) {
      let result = {}
      Object.keys(queryPropList).forEach(key => {
        if (queryPropList[key]) {
          result[key] = queryPropList[key]
        }

        if ((key === 'limit') && !isValidLimitQuery(queryPropList[key])) {
          delete result[key]
        }
        if ((key === 'page') && !isValidPageQuery(queryPropList[key])) {
          delete result[key]
        }
      })

      return result
    }
  }
}
