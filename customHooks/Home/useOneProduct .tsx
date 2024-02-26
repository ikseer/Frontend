import nonAuthRequest from '@/api/nonAuthRequest';
import { useQuery } from '@tanstack/react-query';

// get Product

const getOneProducts = async (id: string) => {
  console.log(id, 'from use hook');
  const response = await nonAuthRequest.get(`/products/product/${id}`);
  return response.data;
};

export const useGetOneProduct = (id: string) => {
  return useQuery({
    queryKey: ['product-get'],
    queryFn: () => getOneProducts(id),
  });
};
