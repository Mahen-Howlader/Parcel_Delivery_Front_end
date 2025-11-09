import { useAllParcelQuery } from "@/redux/features/parcel/parcel.api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

export default function Analytics() {
  const { data: parcelData, isLoading } = useAllParcelQuery(undefined);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <p className="text-lg font-medium text-gray-600">Loading analytics...</p>
      </div>
    );
  }

  const parcels = parcelData?.data || [];

  // 🟦 1️⃣ Monthly Shipments
  const monthlyShipments = parcels.reduce((acc: any, parcel: any) => {
    const month = new Date(parcel.createdAt).toLocaleString("en-US", {
      month: "short",
    });
    acc[month] = (acc[month] || 0) + 1;
    return acc;
  }, {});

  const monthlyData = Object.entries(monthlyShipments).map(([month, count]) => ({
    month,
    count,
  }));

  // 🟩 2️⃣ Delivery Status Distribution
  const statusDistribution = parcels.reduce((acc: any, parcel: any) => {
    acc[parcel.status] = (acc[parcel.status] || 0) + 1;
    return acc;
  }, {});

  const statusData = Object.entries(statusDistribution).map(
    ([status, count]) => ({
      status,
      count,
    })
  );

  const COLORS = ["#4F46E5", "#22C55E", "#EAB308", "#EF4444", "#14B8A6"];

  return (
    <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* 📦 Monthly Shipments */}
      <Card className="shadow-md border">
        <CardHeader>
          <CardTitle> Monthly Shipments</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#4F46E5" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* 🥧 Delivery Status */}
      <Card className="shadow-md border">
        <CardHeader>
          <CardTitle> Delivery Status Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={statusData}
                dataKey="count"
                nameKey="status"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {statusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
