import React from "react";

function Sii() {
  const isPremiumUser = true;
  return (
    <div>
      {isPremiumUser && <button>Premium Feature</button>}
    </div>
  );
}

export default Sii;