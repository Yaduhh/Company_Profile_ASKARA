import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";

const LoadingSpinner = () => {
  const [loading, setLoading] = useState(true);

  // Simulasikan pemuatan data dengan setTimeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Durasi pemuatan 3 detik
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <ClipLoader size={150} color={"#123abc"} loading={loading} />
    </div>
  );
};

export default LoadingSpinner;
