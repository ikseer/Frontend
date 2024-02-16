import { useMutation } from '@tanstack/react-query';
import nonAuthRequest from '@/api/nonAuthRequest';

interface PinNumberType {
    otp: string
}

const confirmPinCode = async (data: PinNumberType) => {
    const response = await nonAuthRequest.post('/accounts/verify-otp/', data);
    return response;
};


export const useConfirmPinCode = () => {
    return useMutation({
        mutationFn: confirmPinCode,
    });
}