import { getAuthToken } from "../../../../utils/Auth";


// BASE URL
const URL = "https://e-vents.onrender.com/api/prospects";

// AUTHORIZATION TOKEN
const token = getAuthToken();

//  FETCH PROSPECTS FROM THE SERVER
export async function getAllProspects() {
  try {
    const res = await fetch(`${URL}/all`, {
      method: "GET",
      redirect: "follow",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return error?.message;
  }
}

let raw = {
  source: "Offline",
  specification: {
    theme: "Coronation",
    activities: [
      {
        title: "Omele Dance",
        description: "The coronation",
        exhibitor_name: "Kola",
        start_date: "12-08-2024",
        end_date: "12-08-2024",
        amount: 68000,
      },
    ],
    provisions: [
      {
        provision: "DJ",
        description: "Play only dirge",
        exhibitor_name: "DJ Zoo",
        start_date: "12-08-2024",
        end_date: "12-08-2024",
        amount: 25000,
      },
    ],
  },
  client: {
    type: "Company/Organization",
    email: "ade@gmail.com",
    name: "Ademola",
    phone_number: "08012345678",
  },
  event: {
    name: "The King Coronation",
    date: "2024-08-12",
    type: "Public Event",
    description: "The coronation",
    city: "Ikeja",
    state: "Lagos",
    location_type: "In person",
    location_address: "Adewolu Street, Ikeja",
  },
};

// CREATE NEW PROSPECT ON THE SERVER
export async function createProspect(newProspect) {
  try {
    const response = await fetch(`${URL}/create`, {
      method: "POST",
      body: JSON.stringify(newProspect),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
}

// GET PROSPECT BY ID
export async function getProspectById(id) {
  try {
    const res = await fetch(`${URL}/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const prospect = res.json();
    return prospect;
  } catch (error) {
    return error;
  }
}

// UPDATE PROSPECT STATUS FROM SERVER
export async function updateProspectStatus(id, status) {
  try {
    const res = fetch(`${URL}/update-status/${id}`, {
      method: "PATCH",
      body: JSON.stringify(status),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const data = res.json();
    return data;
  } catch (error) {
    return error;
  }
}

// FILTER PROSPECTS BY SOURCE
export async function filterProspectBySource(source) {
  try {
    const res = await fetch(`${URL}/?source=${source}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = res.json();
    console.log(data);
  } catch (error) {
    console.log(error)
  }
}

