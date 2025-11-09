import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import { Search as SearchIcon } from 'lucide-react';
export default function Search() {
  const [trackingId, setTrackingId] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingId) return;
    navigate(`/tracking/${trackingId}`); // 🔹 tracking id সহ অন্য পেজে পাঠাবে
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center gap-x-3"
    >
      <div className="relative">
        {/* Icon */}
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <SearchIcon />
        </div>

        {/* Input */}
        <input
          value={trackingId}
          onChange={(e) => setTrackingId(e.target.value)}
          placeholder="Enter Tracking ID"
          aria-label="Enter tracking id"
          className="w-full pl-11 pr-4 rounded-xl py-1 border border-gray-200 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
    </form>
  );
}
