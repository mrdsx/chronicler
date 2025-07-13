export function getApiRequestJsonOptions(
  data: any,
  method?: string,
): RequestInit {
  return {
    method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
}
