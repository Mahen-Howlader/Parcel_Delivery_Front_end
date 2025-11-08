import { useState } from "react";
import { Table, TableHeader, TableHead, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useAllParcelQuery } from "@/redux/features/parcel/parcel.api";
import { useAllUserQuery } from "@/redux/features/user/user.api";
import type { User } from "./Analytics";
import UpdateStatusForm from "@/components/modules/admin/UpdateStatusFrom";
import { AlertDialog, AlertDialogContent, AlertDialogTitle } from "@/components/ui/alert-dialog";
import type { IParcelFrontend } from "@/types/parcel.type";
import { AlertDialogParcel } from "@/components/modules/aleart/AlertDialogParcel";

export default function AllParcel() {
  const { data: userData } = useAllUserQuery(undefined);
  const { data: parcelData } = useAllParcelQuery(undefined);

  const [selectedParcel, setSelectedParcel] = useState<IParcelFrontend | null>(null);

  return (
    <div className="overflow-hidden rounded-md border mt-5">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Sender</TableHead>
            <TableHead>Receiver</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Parcel Type</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Blocked</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {parcelData?.data?.map((parcel: IParcelFrontend) => {
            const sender = userData?.data.find((user: User) => user._id === parcel.senderId);

            return (
              <TableRow key={parcel._id}>
                <TableCell>{sender?.name}</TableCell>
                <TableCell>{parcel.receiverName}</TableCell>
                <TableCell>{parcel.receiverPhone}</TableCell>
                <TableCell>{parcel.type}</TableCell>
                <TableCell>{parcel.status}</TableCell>
                <TableCell>
                  {parcel.isBlocked ? (
                    <span className="text-red-600 font-medium">Blocked</span>
                  ) : (
                    <span className="text-green-600 font-medium">Active</span>
                  )}
                </TableCell>
                <TableCell>
                   <AlertDialogParcel userData={parcel}></AlertDialogParcel>
                </TableCell>
                
                <TableCell>
                  {/* Trigger modal for this parcel */}
                  <Button variant="outline" onClick={() => setSelectedParcel(parcel)}>
                    Update Status
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      {/* Modal for the selected parcel */}
      {selectedParcel && (
        <AlertDialog
          open={!!selectedParcel}
          onOpenChange={() => setSelectedParcel(null)}
        >
          <AlertDialogContent>
            <AlertDialogTitle>Update Status</AlertDialogTitle>
            <UpdateStatusForm
              parcelInfo={selectedParcel}
              onClose={() => setSelectedParcel(null)}
            />
          </AlertDialogContent>
        </AlertDialog>
      )}
    </div>
  );
}


// import { Table, TableHeader, TableHead, TableBody, TableRow, TableCell } from "@/components/ui/table"
// import { Button } from "@/components/ui/button"
// import { useAllParcelQuery } from "@/redux/features/parcel/parcel.api"
// import { useAllUserQuery } from "@/redux/features/user/user.api"
// import type { User } from "./Analytics"
// import { AlertDialogParcel } from "@/components/modules/aleart/AlertDialogParcel"
// import type { IParcelFrontend } from "@/types/parcel.type"
// import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
// import UpdateStatusFrom from "@/components/modules/admin/UpdateStatusFrom"
// import UpdateStatusForm from "@/components/modules/admin/UpdateStatusFrom"
// import { useState } from "react"

// export type Parcel = {
//   _id: string
//   senderName: string
//   receiverName: string
//   receiverPhone: string
//   parcelType: string
//   deliveryStatus: "Pending" | "Shipped" | "Delivered" | "Cancelled"
//   isBlocked: boolean
//   createdAt: string
// }

// export default function AllParcel() {
//   const [open, setOpen] = useState(false);
//   const { data: userData } = useAllUserQuery(undefined);
//   const { data: parcelData } = useAllParcelQuery(undefined);

//   return (
//     <div className="overflow-hidden rounded-md border mt-5">
//       <Table>
//         <TableHeader>
//           <TableRow>
//             <TableHead>Sender</TableHead>
//             <TableHead>Receiver</TableHead>
//             <TableHead>Phone</TableHead>
//             <TableHead>Parcel Type</TableHead>
//             <TableHead>Status</TableHead>
//             <TableHead>Blocked</TableHead>
//             <TableHead>Action</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {parcelData?.data?.map((parcel: IParcelFrontend) => {
//             const sender = userData?.data.find((user: User) => user._id === parcel.senderId);
//             return (
//               <TableRow key={parcel._id}>
//                 <TableCell>{sender?.name}</TableCell>
//                 <TableCell>{parcel.receiverName}</TableCell>
//                 <TableCell>{parcel.receiverPhone}</TableCell>
//                 <TableCell>{parcel.type}</TableCell>
//                 <TableCell>
//                   {parcel.status}
//                 </TableCell>
              
//                 <TableCell className="space-x-2">
//                   <AlertDialogParcel userData={parcel}></AlertDialogParcel>
//                   <AlertDialog open={open} onOpenChange={setOpen}>
//                     <AlertDialogTrigger asChild>
//                       <Button variant="outline">Update Status</Button>
//                     </AlertDialogTrigger>
//                     <AlertDialogContent>
//                       <AlertDialogTitle>Update Status</AlertDialogTitle>
//                       <UpdateStatusForm
//                         parcelInfo={parcel}
//                         onClose={() => setOpen(false)}
//                       />
//                     </AlertDialogContent>
//                   </AlertDialog>
                  
//                 </TableCell>
//               </TableRow>
//             )
//           })}
//         </TableBody>
//       </Table>
//     </div>
//   )
// }



