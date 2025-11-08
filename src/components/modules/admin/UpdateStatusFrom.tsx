import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { IParcelFrontend, ParcelStatus } from "@/types/parcel.type";
import { useParcelStatusUpdateMutation } from "@/redux/features/parcel/parcel.api";
import { toast } from "sonner";

interface UpdateStatusFormProps {
    parcelInfo: IParcelFrontend;
    onClose?: () => void;
}

function UpdateStatusForm({ parcelInfo, onClose }: UpdateStatusFormProps) {
    // 👇 default value set from parcelInfo.status
    const [selectedStatus, setSelectedStatus] = useState<ParcelStatus | "">(parcelInfo.status || "");
    const [parcelStatusUpdate, { isLoading }] = useParcelStatusUpdateMutation();

    const parcelStatuses: ParcelStatus[] = [
        "Requested",
        "Approved",
        "Dispatched",
        "In Transit",
        "Delivered",
        "Cancelled",
        "Returned",
    ];

    const handleUpdate = async (id: string) => {
        if (!selectedStatus) return alert("Please select a status!");
        if (!parcelInfo?._id) return alert("Parcel ID missing!");

        try {
            const res = await parcelStatusUpdate({ parcelId: id, status: selectedStatus }).unwrap();
            if ((res as any)?.success) {
                toast.success("Status Update Successful");
                onClose?.();
            }
        } catch (error: any) {
            toast.error("Failed to update status");
        }
    };

    return (
        <div className="space-y-4 p-4 border rounded-lg w-full mx-auto">
            <Select
                value={selectedStatus}
                onValueChange={(value: string) => setSelectedStatus(value as ParcelStatus)}
            >
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                    {parcelStatuses.map((status) => (
                        <SelectItem key={status} value={status}>
                            {status}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>

            <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={onClose}>
                    Cancel
                </Button>
                <Button onClick={() => handleUpdate(parcelInfo?._id!)} disabled={isLoading}>
                    {isLoading ? "Updating..." : "Update Status"}
                </Button>
            </div>
        </div>
    );
}

export default UpdateStatusForm;
