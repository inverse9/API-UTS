const supabase = require("../db.js");

const TABLE_NAME = "user";

async function get(id) {
  if (id) {
    const { data } = await supabase.from(TABLE_NAME).select().eq("id", id);
    return data;
  }
  const { data } = await supabase.from(TABLE_NAME).select();
  return data;
}
async function post(req) {
  const { status, statusText, data } = await supabase
    .from(TABLE_NAME)
    .insert({ name: req.name })
    .select();
  return { status, statusText, data };
}

async function update(id, data1) {
  const { status, statusText, data } = await supabase
    .from(TABLE_NAME)
    .update({ name: data1.name })
    .eq("id", id)
    .select();
  return { status, statusText, data };
}

async function remove(id) {
  const { status, statusText, data } = await supabase
    .from(TABLE_NAME)
    .delete()
    .eq("id", id)
    .select();

  return { status, statusText, data };
}

module.exports = {
  get,
  post,
  update,
  remove,
};
