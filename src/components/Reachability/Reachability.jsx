export function Reachability() {
  const online = window.navigator.onLine;
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
