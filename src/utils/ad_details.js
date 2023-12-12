export default async function ad_details(ad_id) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + "/api/ad/" + ad_id
  );
  const data = await res.json();

  return data.data;
}
