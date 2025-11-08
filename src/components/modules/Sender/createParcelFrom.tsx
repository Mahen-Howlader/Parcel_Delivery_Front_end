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

// Form validation schema using zod
const parcelSchema = z.object({
  receiverName: z.string().min(2, "Receiver name is required"),
  receiverPhone: z.string().min(10, "Phone number must be at least 10 digits"),
  receiverAddress: z.string().min(5, "Address is required"),
  type: z.string().min(2, "Parcel type is required"),
  weight: z.number().min(0.1, "Weight must be positive"),
  fee: z.number().min(0, "Fee must be positive"),
  deliveryDate: z.string().min(1, "Delivery date is required"), // you can convert to Date later
  deliveryMan: z.string().optional(),
});

export default function ParcelCreateForm() {
  const form = useForm<z.infer<typeof parcelSchema>>({
    resolver: zodResolver(parcelSchema),
    defaultValues: {
      receiverName: "",
      receiverPhone: "",
      receiverAddress: "",
      type: "",
      weight: 0.1,
      fee: 0,
      deliveryDate: "",
      deliveryMan: "",
    },
  });

  const onSubmit = (values: z.infer<typeof parcelSchema>) => {
    console.log("Parcel Data:", values);
    // এখানে API call করবে parcel create করার জন্য
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="receiverName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Receiver Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
        <FormField
          control={form.control}
          name="weight"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Weight (kg)</FormLabel>
              <FormControl>
                <Input type="number" step="0.1" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="fee"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Fee (৳)</FormLabel>
              <FormControl>
                <Input type="number" step="0.1" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
                You can assign delivery person later if you want
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Create Parcel</Button>
      </form>
    </Form>
  );
}
