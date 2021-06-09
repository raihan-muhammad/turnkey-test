export const getData = async (endpoint: string) => {
  const req: Response = await fetch(
    `${process.env.REACT_APP_API_URL}${endpoint}`
  );
  const res = await req.json();
  return res;
};
