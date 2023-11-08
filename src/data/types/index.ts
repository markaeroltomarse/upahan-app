export interface IFindPropertyFilter {
  location: {
    name: string;
    lat: number;
    lng: number;
    km: number;
  };
  placeType?: string;
  bill?: {
    minBill: number;
    maxBill: number;
  };
  paymentDueDate?: Date;
  utility: {
    water: boolean;
    electricity: boolean;
    maintenance: boolean;
  };
}
