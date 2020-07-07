export let UrlHead;
export let user;

switch (window.location.host) {
  case "novatest-mospmvp.aida.de:8080":
  case "novatest-mospmvp.aida.de:9000":
    UrlHead = "https://api.novatest-mospmvp.aida.de/api";
    user = "user001:001user";
    break;
  case "nova-mospmvp.aida.de:8080":
  case "nova-mospmvp.aida.de:9000":
    UrlHead = "https://api.mospmvp.nova.aida.de/api";
    user = "mosp_dbd_prod:pOM!Tasnz?cVoU5lC+8G";
    break;
  case "test-mospmvp.aida.de:8080":
  case "test-mospmvp.aida.de:9000":
    UrlHead = "https://api.test-mospmvp.aida.de/api";
    user = "user001:001user";
    break;
  case "mospmvp.aida.de:8080":
  case "mospmvp.aida.de:9000":
    UrlHead = "https://api.mospmvp.aida.de/api";
    user = "mosp_dbd_prod:pOM!Tasnz?cVoU5lC+8G";
    break;
  default:
    UrlHead = "https://api.test-mospmvp.aida.de/api";
    user = "user001:001user";
    break;
}

export const isGoodApi = async url => {
  try {
    const data = await fetch(url, {
      headers: {
        Authorization: "Basic " + btoa(user)
      }
    });
    const items = await data.json();

    return items;
  } catch (error) {
    return error;
  }
};

export const isGoodUrl = (
  paxId,
  embarkationDate,
  disembarkationDate,
  bookingNumber
) => {
  let url = `${UrlHead}/getProductDetails?paxId=${paxId}&embarkationDate=${embarkationDate}&disembarkationDate=${disembarkationDate}&bookingNumber=${bookingNumber}&productCode=mvp01`;

  return isGoodApi(url);
};
