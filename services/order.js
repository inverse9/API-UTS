const supabase = require("../db.js");
const TABLE_NAME = "order";

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
    .insert({
      user_id: req.user_id,
      menu_id: req.menu_id,
      qty: req.qty,
      total: req.total,
    })
    .select();
  return { status, statusText, data };
}

async function update(id, req) {
  const { status, statusText, data } = await supabase
    .from(TABLE_NAME)
    .update({
      user_id: req.user_id,
      menu_id: req.menu_id,
      qty: req.qty,
      total: req.total,
    })
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
