import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./app.auth";

export function Routes() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
