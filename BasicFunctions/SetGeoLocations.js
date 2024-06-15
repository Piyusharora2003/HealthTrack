"use server";

export async function fetchState(latitude, longitude) {
    const api = `https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}&api_key=${process.env.REACT_APP_MAPS_API_KEY}`;
    const response = await fetch(api);
    const data = await response.json();
    console.log("new user from : " , data);
    return data.address.state;
  }