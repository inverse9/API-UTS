const supabase = require("../db.js");
const TABLE_NAME = "menu";

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
    .insert({ name: req.name, price: req.price })
    .select();
  return { status, statusText, data };
}

async function update(id, data1) {
  const { status, statusText, data } = await supabase
    .from(TABLE_NAME)
    .update({ name: data1.name, price: data1.price })
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
