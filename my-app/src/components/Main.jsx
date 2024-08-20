import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Friends } from "./Friends";
import { Friend } from "./Friend";

export const Main = () => (
  <main>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/friends" element={<Friends />} />

      <Route path="/friends/:id" element={<Friend />} />

      <Route path="*" element={"No match"} />
    </Routes>
  </main>
);
