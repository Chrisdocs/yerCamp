import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import reportWebVitals from './reportWebVitals';

import Checklist from "./Components/Checklist/checklist.component";
import CreateList from "./Components/Create-list/createlist.component";
import EditList from "./Components/Edit-list/editlist.component";

const container = document.getElementById('root');
const root = createRoot(container);

root.
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="checklist" element={<Checklist />} />
      <Route path="createlist" element={<CreateList />} />
      <Route path="editlist" element={<EditList />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
