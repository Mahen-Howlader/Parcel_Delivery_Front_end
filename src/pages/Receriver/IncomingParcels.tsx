import { useReceiverAllDataQuery } from "@/redux/features/receiver/receiver.api";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import type { Parcel } from "@/components/modules/Sender/ParcelTabel";
import { AleartConfirmParcel } from "@/components/modules/aleart/AleartConfirmParcel";

export default function IncomingParcels() {
    const { data, isLoading } = useReceiverAllDataQuery(undefined);
    const parcels = data?.data || [];

    if (isLoading) {
        return <p className="text-center text-lg">Loading...</p>;
    }

    return (
        <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-center">Incoming Parcels</h2>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Sender ID</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Weight (kg)</TableHead>
                        <TableHead>Address</TableHead>
                        <TableHead>Delivery Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {parcels.length > 0 ? (
                        parcels.map((parcel: Parcel) => (
                            <TableRow key={parcel._id}>
                                <TableCell>{parcel.senderId}</TableCell>
                                <TableCell>{parcel.type}</TableCell>
                                <TableCell>{parcel.weight}</TableCell>
                                <TableCell>{parcel.receiverAddress}</TableCell>
                                <TableCell>
                                    {new Date(parcel.deliveryDate).toLocaleDateString("en-GB", {
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric",
                                    })}
                                </TableCell>
                                <TableCell className={parcel.status === "Delivered" ? "text-green-400" : ""}>
                                    {parcel.status || "Pending"}
                                </TableCell>
                                <TableCell className="text-right">
                                    <AleartConfirmParcel parcel={parcel}></AleartConfirmParcel>
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={7} className="text-center text-gray-500">
                                No parcels found
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
}
