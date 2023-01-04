const express = require("express");
const mysql = require("./mysql"); // mysql 폴더의 index.js

const app = express();

app.listen(3000, () => {
  console.log("Server started. port 3000.");
});

app.get("/api/customers", async (req, res) => {
  // localhst:3000/customers 접속하면 실행 됨

  const customers = await mysql.query("customerList"); //sql.js 파일의 customerList 쿼리 실행
  console.log(customers);
  res.send(customers);
});
