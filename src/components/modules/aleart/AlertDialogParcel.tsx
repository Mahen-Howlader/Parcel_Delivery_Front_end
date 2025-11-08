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
import { useParcelBlockUnblockMutation } from "@/redux/features/parcel/parcel.api";
import type { IParcelFrontend } from "@/types/parcel.type";
import { toast } from "sonner";

interface AleartDialogProps {
    userData: IParcelFrontend;
}

export function AlertDialogParcel({ userData }: AleartDialogProps) {
    const [parcelBlockUnBlock] = useParcelBlockUnblockMutation();
    const handelBlockUnblock = async (id: string) => {
        const res = await parcelBlockUnBlock(id).unwrap();
        if (res.success) {
            toast.success(`User ${res?.data?.user?.isBlocked ? "Block" : "Unblock"} successfully`)

        }
    };

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button
                    size="sm"
                    className="cursor-pointer"
                    variant={userData?.isBlocked ? "outline" : "outline"}
                >
                    {userData?.isBlocked ? "Unblock" : "Block"}
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure you want to block this user?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Blocking this user will restrict their access to the system.
                        You can unblock them later from the user management panel.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => handelBlockUnblock(userData?._id!)}>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
};
