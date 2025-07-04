import Navbar from "../components/Navbar";
import { InputAdornment, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Rating from "../utils/Rating";
import { useState } from "react";

const tools = [
  {
    name: "DeepSeek",
    desc: "DeepSeek is a cutting-edge open-source AI model from China,focused on code generation, reasoning, and research tasks acrosstext and programming languages.",
    logo: "/logo.png",
    rating: 4,
    category: "Education",
  },
  {
    name: "ContentBot",
    desc: "DeepSeek is a cutting-edge open-source AI model from China,focused on code generation, reasoning, and research tasks acrosstext and programming languages.",
    logo: "/logo.png",
    rating: 4,
    category: "Content Creation",
  },
  {
    name: "AI Editor Pro",
    desc: "DeepSeek is a cutting-edge open-source AI model from China,focused on code generation, reasoning, and research tasks acrosstext and programming languages.",
    logo: "/logo.png",
    rating: 4,
    category: "Video Editing",
  },
  {
    name: "Talky AI",
    desc: "DeepSeek is a cutting-edge open-source AI model from China,focused on code generation, reasoning, and research tasks acrosstext and programming languages.",
    logo: "/logo.png",
    rating: 4,
    category: "Chat Box & A.I Assistant",
  },
  {
    name: "WriteSmart",
    desc: "DeepSeek is a cutting-edge open-source AI model from China,focused on code generation, reasoning, and research tasks acrosstext and programming languages.",
    logo: "/logo.png",
    rating: 4,
    category: "Writing",
  },
  {
    name: "ImageForge",
    desc: "DeepSeek is a cutting-edge open-source AI model from China,focused on code generation, reasoning, and research tasks acrosstext and programming languages.",
    logo: "/logo.png",
    rating: 4,
    category: "Image Generation",
  },
];

const tabs = [
  { name: "All" },
  { name: "Education" },
  { name: "Content Creation" },
  { name: "Video Editing" },
  { name: "Chat Box & A.I Assistant" },
  { name: "Writing" },
  { name: "Image Generation" },
];

const ExplorePage = () => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("All");

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="flex flex-col gap-[2rem] pt-[130px] px-4 md:px-8">
        {/* Badge */}
        <div className="flex justify-center">
          <div className="bg-[#E7F3FD] px-4 py-1.5 w-fit text-center rounded-[6px]">
            <Typography
              sx={{ color: "#0167C4", fontWeight: 700, fontSize: 14 }}
            >
              Featured Tools
            </Typography>
          </div>
        </div>

        {/* Heading */}
        <div className="relative text-center">
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: {
                xs: 36,
                sm: 48,
                md: 64,
              },
              lineHeight: 1.2,
            }}
          >
            Featured{" "}
            <span
              style={{
                background:
                  "radial-gradient(circle at center, #2B91EE, #0167C4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              AI Tools{" "}
            </span>
            Handpicked <br className="hidden sm:block" /> for You
          </Typography>

          <div className="absolute -bottom-[5rem] right-[30rem] hidden lg:block">
            <img src="/arrow.png" alt="arrow" />
          </div>
        </div>

        {/* Subtitle */}
        <div className="text-center">
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: {
                xs: 16,
                sm: 20,
                md: 24,
              },
              color: "#667085",
            }}
          >
            A curated selection of high-performing tools trusted by our
            community and rated for <br className="hidden sm:block" />
            innovation, usability, and impact.
          </Typography>
        </div>
      </div>

      {/* Search Input */}
      <div className="flex justify-center mt-8 px-4">
        <TextField
          placeholder="What type of A.I Model are you looking for?"
          variant="outlined"
          sx={{
            width: "100%",
            maxWidth: "950px",
            "& .MuiInputBase-root": {
              backgroundColor: "#F2F2F3",
              borderRadius: "64px",
              border: "none",
              px: "1rem",
              py: ".5rem",
            },
            "& fieldset": {
              border: "none",
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <img src="/search.png" alt="Search A.I Tool" />
              </InputAdornment>
            ),
          }}
        />
      </div>

      {/* Tabs */}
      <div className="mt-[3rem] px-4 overflow-x-auto scrollbar-hide">
        <ul className="flex gap-3 sm:gap-5 md:gap-6 lg:gap-[30px] min-w-max md:justify-center">
          {tabs.map((tab) => (
            <li
              key={tab.name}
              className={`py-2 px-4 whitespace-nowrap cursor-pointer rounded-[72px] transition-all duration-200 ${
                activeTab === tab.name ? "bg-[#E7F3FD]" : "bg-transparent"
              }`}
              onClick={() => setActiveTab(tab.name)}
            >
              <Typography
                fontWeight={700}
                sx={{
                  fontSize: {
                    xs: 13,
                    sm: 15,
                    md: 17,
                    lg: 18,
                  },
                  color: activeTab === tab.name ? "#0167C4" : "#00000A",
                }}
              >
                {tab.name}
              </Typography>
            </li>
          ))}
        </ul>
      </div>

      {/* Tool Cards */}
      <div className="flex justify-center py-[3rem] px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[25px]">
          {tools
            .filter((tool) =>
              activeTab === "All" ? true : tool.category === activeTab
            )
            .map((tool) => (
              <div
                key={tool.name}
                onClick={() => navigate("/view/tool/123")}
                className="group bg-[#F2F2F3] rounded-[25px] flex flex-col items-center text-center gap-[15px] px-4 py-[40px] w-full max-w-[296px] mx-auto cursor-pointer
            hover:bg-[#E7F3FD] hover:scale-105 hover:border-2 hover:border-[#0167C4] transition-all duration-300 ease-in-out"
              >
                <img
                  src={tool.logo}
                  className="w-[150px] h-[150px]"
                  alt={tool.name}
                />
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: 24,
                    color: "black",
                    transition: "color 0.3s",
                    ".group:hover &": {
                      color: "#0167C4",
                    },
                  }}
                >
                  {tool.name}
                </Typography>

                <Rating value={tool.rating} />

                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: 16,
                    color: "#667085",
                    transition: "color 0.3s",
                    ".group:hover &": {
                      color: "#0167C4",
                    },
                  }}
                >
                  {tool.desc}
                </Typography>
              </div>
            ))}
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ExplorePage;
