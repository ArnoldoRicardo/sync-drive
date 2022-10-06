import { useEffect, useState, useCallback, useMemo } from "react";

import { CreateNote } from "./note";
import "./App.css";

function App() {
  const [content, setCotent] = useState("");
  return (
    <div className="App">
      <CreateNote />
    </div>
  );
}

export default App;
