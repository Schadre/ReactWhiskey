let token = "0c3e86086d3d20a4819212833bf0b30c8576c26d113479e7";

export const server_calls = {
  get: async () => {
    const response = await fetch(`https://outlawbourbonwhiskey.herokuapp.com/api/whiskey`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": `Bearer ${token}`
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data from server");
    }

    return await response.json();
  },
  create: async(data: any = {}) => {
    const response = await fetch(`https://outlawbourbonwhiskey.herokuapp.com/api/whiskeys`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": `Bearer ${token}`
      },
      body: JSON.stringify(data)
    });
    if (!response.ok){
      throw new Error("Failed to fetch data from server");
    }

    return await response.json();
  },

  update: async(id:string, data:any = {}) => {
    const response = await fetch(
      `https://outlawbourbonwhiskey.herokuapp.com/api/whiskey/${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": `Bearer ${token}`
        },
        body: JSON.stringify(data),
      }
    );
  },
  delete: async (id: string) => {
    const response = await fetch(
      `https://outlawbourbonwhiskey.herokuapp.com/api/whiskey/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": `Bearer ${token}`,
        },
      }
    );
  },
};
