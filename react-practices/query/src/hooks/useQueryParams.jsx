import { useLocation } from "react-router-dom";
import qs from "query-string";

/**
 * Function to get all url query which not indexed in router component
 * @returns {Object} - Parsed query params
 */
function useQueryParams() {
  const location = useLocation();
  const queries = qs.parse(location.search);

  return queries;
}

export default useQueryParams;
