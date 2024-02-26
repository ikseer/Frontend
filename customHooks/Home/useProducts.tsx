import nonAuthRequest from '@/api/nonAuthRequest';
import { useInfiniteQuery } from '@tanstack/react-query';

// get Product
const getProducts = async ({ pageParam = 1 }) => {
  const response = await nonAuthRequest.get('/products/product/', {
    params: {
      page: pageParam,
      limit: 3,
    },
  });
  return response.data;
};

export const useGetProducts = () => {
  return useInfiniteQuery({
    queryKey: ['product-get'],
    queryFn: getProducts,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};
