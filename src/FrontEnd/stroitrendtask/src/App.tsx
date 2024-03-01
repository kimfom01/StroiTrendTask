import { Route, Routes } from "react-router-dom";
import { Duration } from "./components/Duration";
import { Home } from "./components/Home";
import "./App.css";
import { TotalChats } from "./components/TotalChats";
import { Ratings } from "./components/Ratings";
import { ResponseTime } from "./components/ResponseTime";
import { Tags } from "./components/Tags";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="total-chats" element={<TotalChats />} />
        <Route path="duration" element={<Duration />} />
        <Route path="ratings" element={<Ratings />} />
        <Route path="response-time" element={<ResponseTime />} />
        <Route path="tags" element={<Tags />} />
      </Route>
    </Routes>
  );
};
