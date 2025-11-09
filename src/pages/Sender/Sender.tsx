import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import CreateParcelFrom from "@/components/modules/Sender/createParcelFrom";
import { useParcelsMeQuery } from "@/redux/features/parcel/parcel.api";
import ParcelTable from "@/components/modules/Sender/ParcelTabel";

function Sender() {
    const [open, setOpen] = useState(false);
    const handleCancel = (id: string) => {
        console.log("Cancel parcel:", id);
    };
    const { data: parcelData } = useParcelsMeQuery(undefined);
    return (
        <div className="p-6 space-y-6">
            <div className="flex justify-end">
                <AlertDialog open={open} onOpenChange={setOpen}>
                    <AlertDialogTrigger asChild>
                        <Button variant="outline">Create Parcel</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="max-h-[90vh] w-screen max-w-full overflow-y-auto p-4">
                        <div className="flex justify-end">
                            <Button variant="ghost" onClick={() => setOpen(false)}>✕</Button>
                        </div>
                        <AlertDialogTitle className="text-center text-lg font-semibold">
                            Create New Parcel
                        </AlertDialogTitle>

                        <AlertDialogDescription className="text-center mb-4">
                            Fill in the recipient's name, delivery address, and any special notes.
                            This information will be used to send the parcel.
                        </AlertDialogDescription>

                        <CreateParcelFrom closeModal={() => setOpen(false)} />
                    </AlertDialogContent>

                </AlertDialog>
            </div>


            <ParcelTable parcels={parcelData?.data} onCancel={handleCancel} />
        </div>
    );
}

export default Sender;