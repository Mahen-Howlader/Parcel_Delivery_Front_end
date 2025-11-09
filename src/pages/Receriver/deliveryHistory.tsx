import { useDeliveryHistoryQuery } from "@/redux/features/receiver/receiver.api";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";
import type { Parcel } from "@/components/modules/Sender/ParcelTabel";

export default function DeliveryHistory() {
  const { data, isLoading } = useDeliveryHistoryQuery(undefined);

  if (isLoading) {
    return <p className="text-center text-lg">Loading...</p>;
  }

  const deliveries = data?.data || [];

  return (
    <div className="p-5">
      <h1 className="text-2xl font-semibold mb-4 text-center">Delivery History</h1>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>SL</TableHead>
            <TableHead>Sender Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Weight (kg)</TableHead>
            <TableHead>Fee (৳)</TableHead>
            <TableHead>Delivery Date</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {deliveries.length > 0 ? (
            deliveries.map((parcel: Parcel, index: number) => (
              <TableRow key={parcel._id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{parcel?.senderId || "N/A"}</TableCell>
                <TableCell>{parcel?.type}</TableCell>
                <TableCell>{parcel?.weight}</TableCell>
                <TableCell>{parcel?.fee}</TableCell>
                <TableCell>
                  {parcel.deliveryDate
                    ? format(new Date(parcel.deliveryDate), "dd MMM yyyy")
                    : "N/A"}
                </TableCell>
                <TableCell
                  className={
                    parcel.status === "Delivered"
                      ? "bg-green-400 text-white font-semibold text-center "
                      : parcel.status === "Cancelled"
                        ? "bg-red-400 text-white font-semibold text-center"
                        : "bg-yellow-300 text-black font-semibold text-center"
                  }
                >
                  {parcel.status || "Pending"}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={7} className="text-center py-5 text-gray-500">
                No completed deliveries found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
