import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import type { Parcel } from "../Sender/ParcelTabel";
import { useDeliveryCompletedMutation } from "@/redux/features/receiver/receiver.api";
import { toast } from "sonner";

export function AleartConfirmParcel(parcel: { parcel: Parcel }) {
    const [deliveryCompleted] = useDeliveryCompletedMutation();
    const handelConfirm = async (id: string) => {
        try {
            const res = await deliveryCompleted(id).unwrap();
            if (res.success) {
                toast.success("Delivery completed...")
            }
        } catch (error) {
            toast.error("Invalid ...")
        }
    };

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button
                    disabled={parcel?.parcel?.status === "Delivered"}
                    size="sm"
                    className="cursor-pointer"
                >
                    {parcel?.parcel?.status === "Delivered" ? "Already Delivery" : " Confirm Delivery"}
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure you want to Confirm Delivery this parcel?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Confirm Delivery this parcel will  delivery process.
                        You can’t undo this action later.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => handelConfirm(parcel?.parcel?._id)}>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
};
