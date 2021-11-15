import queryString from 'query-string';
import { useLocation } from 'umi';

export default <T extends unknown = any>(
  options?: queryString.ParseOptions,
) => {
  const location = useLocation();

  const query = queryString.parse(location.search, options) as T;

  return {
    ...location,
    query,
  };
};
