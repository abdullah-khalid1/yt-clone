import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import SideBar from "./components/SiderBar/SideBar";
import Home from "./pages/Home/Home";
import VideoDetail from "./pages/VideoDetail/VideoDetail";
import ChannelDetail from "./pages/ChannelDetail.jsx/ChannelDetail";

const App = () => (
  <BrowserRouter>
    <Box sx={{ background: "#000" }}>
      <SideBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        {/* <Route path="search/:query" element={<Search />} /> */}
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
