export function getToken(token: string) {
  return JSON.parse(token);
}

export function parseStringToDate(date: string) {
  return new Date(date).toLocaleString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
