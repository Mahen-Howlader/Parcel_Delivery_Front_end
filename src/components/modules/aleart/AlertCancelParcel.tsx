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
import { useParcelCancelledMutation } from "@/redux/features/parcel/parcel.api";

export function AlertCancelParcel({ parcel }: { parcel: Parcel }) {
    const [cancellParcel] = useParcelCancelledMutation();
    const handelBlockUnblock = async (id: string) => {
      const res = await cancellParcel(id);
    };

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button
                    size="sm"
                    className="cursor-pointer"
                >
                    Cancel
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure you want to Cancel this parcel?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Canceling this parcel will stop its delivery process.
                        You can’t undo this action later.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => handelBlockUnblock(parcel?._id!)}>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
};
