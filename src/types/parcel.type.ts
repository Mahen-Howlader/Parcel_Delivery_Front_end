// Tracking Event
export interface ITrackingEventFrontend {
  location: string;
  status: string;
  note?: string;
  timestamp: string; // Date as string for frontend
}

// Parcel status enum
export type ParcelStatus = 
  | "Requested"
  | "Approved"
  | "Dispatched"
  | "In Transit"
  | "Delivered"
  | "Cancelled"
  | "Returned";


// Parcel type for frontend
export interface IParcelFrontend {
  _id?: string; // ObjectId as string
  senderId?: string; // ObjectId as string
  receiverName: string;
  receiverPhone: string;
  receiverAddress: string;
  type: string;
  weight: number;
  fee: number;
  deliveryDate: string; // Date as string
  trackingId?: string;
  status?: ParcelStatus;
  trackingEvents?: ITrackingEventFrontend[];
  deliveryMan? : string,
  isBlocked?: boolean;
  createdAt?: string; // Date as string
  updatedAt?: string; // Date as string
};


// Receiver type for frontend
export interface IReceiverFrontend {
  _id: string;
  name: string;
}
