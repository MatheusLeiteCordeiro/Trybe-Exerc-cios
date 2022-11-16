const ISS_BASE_API = 'http://api.open-notify.org';

export const getCurrentISSLocation = async () => {
  const response = await fetch(`${ISS_BASE_API}/iss-now.json`);
  const json = await response.json();
  return json;
};
