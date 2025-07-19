"use client";

import { useEffect } from "react";
import { useDeviceDetection } from "@/hooks/useDeviceDetection";
import { Loader2 } from "lucide-react";

export default function Home() {
  const { isLoading, routeToDeviceSpecificPage } = useDeviceDetection();

  useEffect(() => {
    if (!isLoading) {
      routeToDeviceSpecificPage();
    }
  }, [isLoading, routeToDeviceSpecificPage]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Loader2 className="animate-spin" />
    </div>
  );
}
