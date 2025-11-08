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
import type { User } from "@/pages/Admin/Analytics";
import { useUserBlockUnblockMutation } from "@/redux/features/user/user.api";
import { toast } from "sonner";

interface AleartDialogProps {
  userData: User;
}

export function AleartDialog({ userData }: AleartDialogProps) {
  const [userBlock] = useUserBlockUnblockMutation();

  const handelBlockUnblock = async (id: string) => {
    const res = await userBlock(id).unwrap();
    if(res.success){
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
          {userData?.isBlocked ? "Block" : "Unblock"}
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
          <AlertDialogAction onClick={() => handelBlockUnblock(userData?._id)}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
