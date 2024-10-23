import { DB } from "https://deno.land/x/sqlite/mod.ts";

// Open a connection to the SQLite database
const db = new DB("microblog.sqlite3");

// Enable Write-Ahead Logging (WAL) mode and foreign keys
db.query("PRAGMA journal_mode = WAL;");
db.query("PRAGMA foreign_keys = ON;");

export default db;