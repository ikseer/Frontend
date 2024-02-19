import nonAuthRequest from '@/api/nonAuthRequest';
import { useQuery } from '@tanstack/react-query';

// get Product

const getProducts = async ({id}:any) => {
    console.log(id)
  const response = await nonAuthRequest.get(`/products/product/${id}/`)
  return response.data;
};

export const useGetProducts = () => {
  return useQuery({
    queryKey: ['product-get'],
    queryFn: (id: any) => getProducts(id),

});
};
