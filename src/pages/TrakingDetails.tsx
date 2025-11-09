import { useTrakingParcelQuery } from "@/redux/features/parcel/parcel.api";
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import { toast } from "sonner";

export default function TrackingDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (!id) {
            toast.error("Please provide a valid Tracking ID");
            navigate("/");
        }
    }, [id, navigate]);

    const { data, isLoading, error } = useTrakingParcelQuery(id, { skip: !id });

    if (isLoading)
        return (
            <div className="flex justify-center items-center min-h-screen text-lg font-medium text-gray-500">
                Loading parcel details...
            </div>
        );

    if (error)
        return (
            <div className="flex justify-center items-center min-h-screen text-red-500 font-semibold">
                Failed to fetch tracking data.
            </div>
        );

    const parcel = data?.data;

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
            <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-lg text-center border border-gray-200">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">📦 Parcel Tracking Details</h1>

                <div className="space-y-3 text-gray-700">
                    <p>
                        <span className="font-semibold">Tracking ID:</span>{" "}
                        <span className="text-blue-600">{parcel?.trackingId}</span>
                    </p>
                    <p>
                        <span className="font-semibold">Current Status:</span>{" "}
                        <span
                            className={`px-3 py-1 rounded-full text-white text-sm ${parcel?.currentStatus === "Delivered"
                                    ? "bg-green-500"
                                    : parcel?.currentStatus === "Approved"
                                        ? "bg-blue-500"
                                        : "bg-yellow-500"
                                }`}
                        >
                            {parcel?.currentStatus}
                        </span>
                    </p>
                </div>

                <div className="mt-6 text-left">
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">📜 Status Log</h2>
                    <ul className="space-y-3">
                        {parcel?.statusLog?.map((log: any, index: number) => (
                            <li
                                key={index}
                                className="bg-gray-50 border border-gray-200 rounded-lg p-3 hover:bg-gray-100 transition"
                            >
                                <p className="font-semibold text-gray-800">{log.status}</p>
                                <p className="text-sm text-gray-600">{log.note}</p>
                                <p className="text-xs text-gray-400 mt-1">
                                    {new Date(log.timestamp).toLocaleString()}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
