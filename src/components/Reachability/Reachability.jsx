import { useEffect, useState } from "react";

export function Reachability() {
  const [online, setOnline] = useState(navigator.onLine);

  const updateOnlineStatus = (_event) => {
    setOnline(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);
    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
    };
  }, []);

  return (
    <div>
      {online ? (
        <span style={{ margin: "1em", color: "green" }}>You're online!</span>
      ) : (
        <span style={{ margin: "1em", color: "red" }}>You're offline!</span>
      )}
    </div>
  );
}
