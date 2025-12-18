

function Appq() {
  const isLoggedIn = true;

  return (
    <div>
      <h2>{isLoggedIn ? "Logged In" : "Guest"}</h2>
    </div>
  );
}

export default Appq;