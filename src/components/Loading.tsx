import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Loader2 className="animate-spin w-8 h-8 text-primary" />
      <span className="ml-3 text-lg text-gray-600">Loading...</span>
    </div>
  );
}
