import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Topbar from "./sceens/global/Topbar"
import Sidebar from "./sceens/global/Sidebar";
import Dashboard  from "./sceens/dashboard";
import Team  from "./sceens/team";
import Invoices  from "./sceens/invoices";
import Contacts  from "./sceens/contacts";
import Bar  from "./sceens/bar";
import Form  from "./sceens/form";
import Line  from "./sceens/line";
import Pie  from "./sceens/pie";
import FAQ  from "./sceens/faq";
import Geography  from "./sceens/geography";
import Calendar  from "./sceens/calendar";


function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/calendar" element={<Calendar />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
