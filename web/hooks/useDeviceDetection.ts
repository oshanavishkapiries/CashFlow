"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const useDeviceDetection = () => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkDevice = () => {
      const userAgent = navigator.userAgent;
      const mobileRegex =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      const isMobileDevice = mobileRegex.test(userAgent);

      // Additional check for screen width
      const isMobileScreen = window.innerWidth <= 768;

      setIsMobile(isMobileDevice || isMobileScreen);
      setIsLoading(false);
    };

    // Check on mount
    checkDevice();

    // Listen for window resize
    const handleResize = () => {
      checkDevice();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const routeToDeviceSpecificPage = () => {
    if (isLoading) return;

    const currentPath = window.location.pathname;

    // Don't redirect if already on the correct device-specific page
    if (currentPath === "/d-dash" || currentPath === "/m-dash") {
      return;
    }

    // Route to appropriate dashboard
    if (isMobile) {
      router.push("/m-dash");
    } else {
      router.push("/d-dash");
    }
  };

  return {
    isMobile,
    isLoading,
    routeToDeviceSpecificPage,
    deviceType: isMobile ? "mobile" : "desktop",
  };
};
