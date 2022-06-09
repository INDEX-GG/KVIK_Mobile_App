import { useForm } from 'react-hook-form';

export const usePlaceOfferNewAd = () => {
  const methods = useForm<IFormStatePlaceOfferCategory>({
    defaultValues: {
      category1: undefined,
      category2: undefined,
      category3: undefined,
      category1Length: undefined,
      category2Length: undefined,
      additionalFields: null,
    },
  });

  return {
    methods,
  };
};
