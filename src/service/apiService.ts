import axios from 'axios';

const API_BASE_URL = 'https://dns-backend-m8hq.onrender.com'; // Replace with your actual API base URL

interface LoginResponse {
    token: string;
    message: string;
    user: {
      userId: string;
      role: string;
      username: string;
    };
  }

  interface MenuItem {
    _id: string;
    name: string;
    description: string;
    price: number;
    menu: string; 
  }

  interface ICategory{
    _id: string,
    name: string,
    description: string,
  }
  interface IMenuItem {
    _id: string;
    name: string;
    description: string;
  }
  

  interface RegisterResponse {
    message: string;
    user: {
      userId: string;
      username: string;
      email: string;
    };
  }
  
  export const registerUser = async (
    username: string,
    email: string,
    password: string
  ): Promise<RegisterResponse> => {
    try {
      const response = await axios.post<RegisterResponse>(
        `${API_BASE_URL}/api/auth/signup`,
        { username, email, password }
      );
      return response.data; // Return response data
    } catch (error: any) {
      throw error.response?.data?.message || "Registration failed";
    }
  };

export const getUserDetail = async () => {
  const response = await axios.get(`${API_BASE_URL}/api/auth/user`, { withCredentials: true });
  return response.data; // Ensure your API returns { userId, role, username }
};

  
  export const loginUser = async (email: string, password: string): Promise<LoginResponse> => {
    try {
      const response = await axios.post<LoginResponse>(
        `${API_BASE_URL}/api/auth/login`,
        { email, password },
        { withCredentials: true }
      );
      return response.data;
    } catch (error: any) {
      throw error.response?.data?.message || "Login failed";
    }
  };

export const logoutUser = async () => {
  const response = await axios.post(`${API_BASE_URL}/api/auth/logout`, {}, { withCredentials: true });
  return response.data; // Ensure your API returns { message }
};

export const getCategories=async ()=>{
    const response = await axios.get<ICategory[]>(`${API_BASE_URL}/api/menus/`, { withCredentials: true });
    return response.data;
}

export const getMenuItemById=async (id:string)=>{
    const response = await axios.get<{items:IMenuItem[]}>(`${API_BASE_URL}/api/menus/${id}`, { withCredentials: true });
    return response.data.items;
}

export const addMenuCategory = async (category: { name: string; description: string }) => {
    const response = await axios.post(`${API_BASE_URL}/api/menus/`, category, { withCredentials: true });
    return response.data; // Ensure your API returns { message }
  };

  export const addMenuItem = async (categoryId: string, itemData: { name: string; description: string; price: number }) => {
    const response = await axios.post(`${API_BASE_URL}/api/menus/${categoryId}/items`, itemData, { withCredentials: true });
    return response.data;
  };

  export const deleteMenuService = async (id:string) => {
    const response = await axios.delete(`${API_BASE_URL}/api/menus/${id}`, { withCredentials: true });
    return response.data;
  };

  export const deleteMenuItem = async (menuItemId: string) => {
    const response = await axios.delete(`${API_BASE_URL}/api/menuItem/${menuItemId}`, { withCredentials: true });
    return response.data;
  };
  
  export const updateMenuItem = async (item: MenuItem): Promise<MenuItem> => {
    const response = await axios.put(`${API_BASE_URL}/api/menuItem/${item._id}`,{name:item.name, description:item.description,price:item.price},{ withCredentials: true })
    return response.data;
  };