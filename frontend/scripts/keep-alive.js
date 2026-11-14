// keep-alive.js
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;
// Replace 'your_table_name' with any actual table in your database (even an empty one)
const TABLE_NAME = 'your_table_name'; 

async function pingSupabase() {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.error('Missing Supabase credentials.');
    process.exit(1);
  }

  const endpoint = `${SUPABASE_URL}/rest/v1/${TABLE_NAME}?select=id&limit=1`;

  try {
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status} - ${await response.text()}`);
    }

    console.log(`[${new Date().toISOString()}] Successfully pinged Supabase!`);
  } catch (error) {
    console.error('Failed to ping Supabase:', error);
    process.exit(1);
  }
}

pingSupabase();