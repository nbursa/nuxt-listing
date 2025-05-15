export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const baseUrl = config.public.apiBase;

  const query = getQuery(event);
  const page = Number(query.page || 1);
  const limit = 10;
  const offset = (page - 1) * limit;

  const res = await fetch(
    `${baseUrl}/winner?page[limit]=${limit}&page[offset]=${offset}`
  );
  const text = await res.text();

  try {
    return JSON.parse(text);
  } catch (err) {
    console.error("❌ JSON parse failed:", err);
    return { data: [], meta: { pagination: { total_pages: 1 } } };
  }
});
