// const postgres = require("postgres");
// const connectionString =
//   "postgres://postgres.ypbtvwylonewcyxgjbib:sbp_61c9fb70b06ee5717dd0c9b60f712f605bf107c2@aws-0-ap-southeast-1.pooler.supabase.com:5432/postgres";
// const sql = postgres(connectionString);

// module.exports = sql;

// import { createClient } from '@supabase/supabase-js'
const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = "https://ypbtvwylonewcyxgjbib.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlwYnR2d3lsb25ld2N5eGdqYmliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIwMjIzNTEsImV4cCI6MjAyNzU5ODM1MX0.cQplCoCEszvzN4Z8wohNI6it1mhhsxL-hSaCSrXMxL0";
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
