const express = require("express");
const cors = require("cors");
const { connectDB } = require("./data/config");


const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/catalog", require("./routes/catalogRoutes"));
app.use("/api/company", require("./routes/companyRoutes"));
app.use("/api/chatbot", require("./routes/chatbotRoutes"));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
