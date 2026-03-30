import fs from "fs";
import https from "https";

const users = JSON.parse(fs.readFileSync("public/mock-users.json", "utf8"));

const payload = JSON.stringify({
  status: 200,
  content: JSON.stringify(users),
  content_type: "application/json",
  charset: "UTF-8",
});

const options = {
  hostname: "run.mocky.io",
  path: "/v3",
  method: "POST",
  rejectUnauthorized: false,
  headers: {
    "Content-Type": "application/json",
    "Content-Length": Buffer.byteLength(payload),
  },
};

const req = https.request(options, (res) => {
  let data = "";
  res.on("data", (chunk) => {
    data += chunk;
  });
  res.on("end", () => {
    console.log("RESPONSE:", data);
  });
});

req.on("error", (e) => {
  console.error("ERROR:", e);
});

req.write(payload);
req.end();
