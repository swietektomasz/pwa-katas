import { useState } from "react";
import QrReader from "react-web-qr-reader";

export function Camera() {
  const [scanned, setScanned] = useState();

  return (
    <div>
      <div>Scanned content: {scanned}</div>
      <QrReader onScan={(result) => result && setScanned(result.data)} style={{ height: 240, width: 320 }} />
    </div>
  );
}
