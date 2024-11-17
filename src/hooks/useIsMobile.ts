import { useState, useEffect } from "react";

const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    // Function to check the window width
    const checkIsMobile = () => {
      // You can adjust the width to your specific needs (e.g., 768px for tablets and phones)
      setIsMobile(window.innerWidth <= 1024);
    };

    // Check on mount
    checkIsMobile();

    // Add event listener for resizing
    window.addEventListener("resize", checkIsMobile);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return isMobile;
};

export default useIsMobile;
