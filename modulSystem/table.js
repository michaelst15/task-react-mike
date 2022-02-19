import {Table} from "./index.js";
const table = new Table({
    header: ["Name", "Email", "Asal", "Favorite"],
    data: [
      ["Michael", "mike@email.com", "Indonesia", "Action"],
      ["Suparlan", "suparlan@gmail.com", "Indonesia", "Advanture"],
      ["Tobing", "tob@yahoo.com", "Indonesia", "Horror"]
    ]
  });
  
  const html = document.getElementById("tabel");
  table.wrap(html);