import { useEffect, useState } from "react";

export function Position() {
  const [{ alpha, beta, gamma }, setOrientation] = useState({ alpha: 0, beta: 0, gamma: 0 });

  const handleDeviceOrientation = (event) => {
    setOrientation({ alpha: event.alpha, beta: event.beta, gamma: event.gamma });
  };

  const checkLevel = (beta, gamma) => {
    const isLevel = (beta - -5) * (beta - 5) < 0 && (gamma - -5) * (gamma - 5) < 0;
    return isLevel ? "level" : "not-level";
  };

  useEffect(() => {
    window.addEventListener("deviceorientation", handleDeviceOrientation);
    return () => window.removeEventListener("deviceorientation", handleDeviceOrientation);
  }, []);

  return (
    <div>
      <span>Alpha: {alpha.toFixed(0)}</span>
      <span>Beta: {beta.toFixed(0)}</span>
      <span>Gamma: {gamma.toFixed(0)}</span>
      <div>Your device's position is: {checkLevel(beta.toFixed(0), gamma.toFixed(0))}</div>
    </div>
  );
}
