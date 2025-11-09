import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AlertCancelParcel } from "../aleart/AlertCancelParcel";

export interface Parcel {
    _id: string;
    receiverId: string;
    senderId : string;
    receiverPhone: string;
    receiverAddress: string;
    type: string;
    weight: number;
    fee: number;
    status: string;
    deliveryDate: string;
    trackingId: string;
    deliveryMan?: string;
}

interface ParcelTableProps {
    parcels: Parcel[];
    onCancel?: (id: string) => void;
};

export default function ParcelTable({ parcels }: ParcelTableProps) {
    return (
        <div className="overflow-x-auto">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>#</TableHead>
                        <TableHead>Receiver Id</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>Address</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Weight </TableHead>
                        <TableHead>Fee </TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Delivery Date</TableHead>
                        <TableHead>Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {parcels?.length > 0 ? (
                        parcels?.map((parcel, index) => (
                            <TableRow key={parcel._id}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{parcel.receiverId.slice(0,10)}...</TableCell>
                                <TableCell>{parcel.receiverPhone}</TableCell>
                                <TableCell>{parcel.receiverAddress.slice(0,10)}...</TableCell>
                                <TableCell>{parcel.type.slice(0,10)}...</TableCell>
                                <TableCell>{parcel.weight}</TableCell>
                                <TableCell>{parcel.fee}</TableCell>
                                <TableCell>
                                    <span
                                        className={`px-2 py-1 rounded text-xs font-medium ${parcel.status === "Approved"
                                            ? "bg-green-100 text-green-700"
                                            : parcel.status === "Pending"
                                                ? "bg-yellow-100 text-yellow-700"
                                                : "bg-gray-100 text-gray-700"
                                            }`}
                                    >
                                        {parcel.status}
                                    </span>
                                </TableCell>
                                <TableCell>{new Date(parcel.deliveryDate).toLocaleDateString()}</TableCell>
                                <TableCell>
                                    {
                                        parcel.status === "Requested" ?
                                            <AlertCancelParcel parcel={parcel}></AlertCancelParcel> : <Button variant="outline" size="sm" disabled>
                                                Cancel
                                            </Button>
                                    }
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={11} className="text-center text-gray-500 py-4">
                                No parcels found.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
}
