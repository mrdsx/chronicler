export async function useUserInfo() {
  const accessToken = localStorage.getItem("access_token");

  const res = await fetch("http://127.0.0.1:3000/api/users", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const data = await res.json();

  if (!res.ok) {
    console.log(data.detail);
    return;
  }

  return data;
}
