import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAllReciverNameQuery, useCreateParcelMutation } from "@/redux/features/parcel/parcel.api";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { toast } from "sonner";
import { useNavigate } from "react-router";

// ✅ Zod Schema
const parcelSchema = z.object({
  receiverId: z.string().min(1, "Receiver is required"),
  receiverPhone: z.string().min(10, "Phone number must be at least 10 digits"),
  receiverAddress: z.string().min(5, "Address is required"),
  type: z.string().min(2, "Parcel type is required"),
  weight: z.number().min(0.1, "Weight must be positive"),
  fee: z.number().min(0, "Fee must be positive"),
  deliveryDate: z.string().min(1, "Delivery date is required"),
  deliveryMan: z.string().optional(),
});

type CreateParcelFormProps = {
  closeModal: () => void;
};

interface Receiver {
  _id: string;
  name: string;
}

export default function ParcelCreateForm({ closeModal }: CreateParcelFormProps) {
  const navigate = useNavigate();
  const [createParcel] = useCreateParcelMutation();
  const { data: userData } = useUserInfoQuery(undefined);
  const { data: allReceivers } = useAllReciverNameQuery(undefined);

  const form = useForm<z.infer<typeof parcelSchema>>({
    resolver: zodResolver(parcelSchema),
    defaultValues: {
      receiverId: "",
      receiverPhone: "",
      receiverAddress: "",
      type: "",
      weight: 0.1,
      fee: 0,
      deliveryDate: "",
      deliveryMan: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof parcelSchema>) => {
    const senderId = userData?.data?._id;
    if (!senderId) {
      navigate("/");
      return toast.error("Please login first!");
    }

    const parcelData = {
      senderId,
      ...values,
    };

    console.log(parcelData)

    try {
      const res = await createParcel(parcelData).unwrap();
      if (res.success) {
        toast.success("Parcel created successfully!");
        closeModal();
      }
    } catch (error: any) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* ✅ Receiver Select */}
        <FormField
          control={form.control}
          name="receiverId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Receiver Name</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a Receiver" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Receivers</SelectLabel>
                    {allReceivers?.data?.map((receiver: Receiver) => (
                      <SelectItem key={receiver._id} value={receiver._id}>
                        {receiver.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* ✅ Receiver Phone */}
        <FormField
          control={form.control}
          name="receiverPhone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Receiver Phone</FormLabel>
              <FormControl>
                <Input placeholder="0123456789" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* ✅ Receiver Address */}
        <FormField
          control={form.control}
          name="receiverAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Receiver Address</FormLabel>
              <FormControl>
                <Input placeholder="123 Street, City" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* ✅ Parcel Type */}
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Parcel Type</FormLabel>
              <FormControl>
                <Input placeholder="Documents / Package" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* ✅ Weight */}
        <FormField
          control={form.control}
          name="weight"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Weight (kg)</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  step="0.1"
                  {...field}
                  onChange={(e) => field.onChange(parseFloat(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* ✅ Fee */}
        <FormField
          control={form.control}
          name="fee"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Fee (৳)</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  step="0.1"
                  {...field}
                  onChange={(e) => field.onChange(parseFloat(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* ✅ Delivery Date */}
        <FormField
          control={form.control}
          name="deliveryDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Delivery Date</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* ✅ Delivery Man (Optional) */}
        <FormField
          control={form.control}
          name="deliveryMan"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Delivery Man (optional)</FormLabel>
              <FormControl>
                <Input placeholder="Assign delivery person" {...field} />
              </FormControl>
              <FormDescription>
                You can assign a delivery person later if needed.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Create Parcel
        </Button>
      </form>
    </Form>
  );
}
