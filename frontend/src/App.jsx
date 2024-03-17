import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Form from "./Components/Form";
import NoPage from "./Components/NoPage";
import Resume from "./Components/Resume";
// import Template1 from "./Components/Templates/Template1";
import Mui from "./Components/Templates/Mui";
import Jobs from "./Components/job Bank/JobBank";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Form />} />
          <Route path="resume" element={<Resume />} />
          <Route path="*" element={<NoPage />} />
        </Route>
          {/* <Route path="template" element={<Template1 />} /> */}
          <Route path="jobs" element={<Jobs />} />
      </Routes>
    </BrowserRouter>
  );
}
