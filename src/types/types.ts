
export type AppLocation =
  | 'PlaceOfferNewAd'
  | 'Product'
  | 'Settings'
  | 'LocationSearch'
  | 'NotificationScreen'
  | 'ClearSearchResultScreen'
  | 'LicenseScreen'
  | 'PrivacyPolicyScreen'
  | 'KvikUseScreen'
  | 'OfferUseScreen'
  | 'SignInScreen'
  | 'RegistrationScreen'
  | 'MessageScreen'
  | 'MainScreen'
  | 'PlaceOfferScreen'
  | 'FavoriteScreen'
  | 'AccountScreen'
  | 'PlaceOfferAdditionalFields';

export type onChangeText = (text: string) => void;

export type NumberType = 'int' | 'float';

export type textWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export interface IDevicePhoto {
  fileName: string;
  uri: string;
}

export interface IColors {
  id: number;
  name: string;
  value: string;
}
