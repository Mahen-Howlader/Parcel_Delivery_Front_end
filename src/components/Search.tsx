import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

export default function Search() {
  const [trackingId, setTrackingId] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingId) return;
    navigate(`/tracking/${trackingId}`); // 🔹 tracking id সহ অন্য পেজে পাঠাবে
  };

  return (
    <form onSubmit={handleSearch} className="flex gap-2 items-center">
      <Input
        value={trackingId}
        onChange={(e) => setTrackingId(e.target.value)}
        placeholder="Enter Tracking ID"
      />
      <Button variant={"primary"} type="submit">Search</Button>
    </form>
  );
}
