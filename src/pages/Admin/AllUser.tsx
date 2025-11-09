import { Table, TableHeader, TableHead, TableBody, TableRow, TableCell } from "@/components/ui/table"
import { useAllUserQuery } from "@/redux/features/user/user.api"
import { AleartDialog } from "@/components/modules/aleart/AleartDialog"

export type User = {
    _id: string
    name: string
    email: string
    password: string
    role: "SENDER" | "RECEIVER" | "ADMIN"
    isBlocked: boolean
    createdAt: string
    updatedAt: string
};

export default function AllUser() {
    const { data } = useAllUserQuery(undefined);

    return (
        <div className="overflow-hidden rounded-md border">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data?.data?.map((user: User) => (
                        <TableRow key={user._id}>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell className={user.isBlocked ? "text-red-600" : "text-green-600"}>
                                {user.isBlocked ? "Block" : "Unblock"}
                            </TableCell>
                            <TableCell>
                                <AleartDialog userData={user}></AleartDialog>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
};