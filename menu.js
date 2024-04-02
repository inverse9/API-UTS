const supabase = require("./db.js");

async function get() {
  const { data } = await supabase.from("menu").select();
  return data;
}
async function post(req) {
  const { status, statusText, data } = await supabase
    .from("menu")
    .insert({ name: req.name, price: req.price })
    .select();
  return { status, statusText, data };
}

async function update(id, data1) {
  const { status, statusText, data } = await supabase
    .from("menu")
    .update({ name: data1.name, price: data1.price })
    .eq("id", id)
    .select();
  return { status, statusText, data };
}

async function remove(id) {
  const { status, statusText, data } = await supabase
    .from("menu")
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
