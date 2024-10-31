// write a function that will fetch the data with a get method
// get data from the server
const apiKey = process.env.API_KEY;
export const getData = async(url) => {
    // fetch the data
    const response = await fetch (url, {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json',
            'x-api-key': apiKey,
        }
    });

    // throw exception when url is bad or when server is down
    if (!response.ok) {
        throw new Error('Bad URL or Server is down')
    };

    // getting the data
    const responseData = await response.json()
    return responseData
}


