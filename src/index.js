import React, { useEffect, useState } from "react";
import Navigation from "./routes/stack.navigation";
import { Provider as PaperProvider } from "react-native-paper";
import theme from "./assets/theme";

function App() {
  return (
    <PaperProvider theme={theme}>
      <Navigation />
    </PaperProvider>
  );
}
export default App;
