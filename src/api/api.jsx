  import axios from "axios";

  import { BASE_URL } from "./baseURL";

  const api = axios.create({
    baseURL: BASE_URL,
    headers: {
      "Content-Type": "application/json",    
    },
  });

  const api2 = axios.create({
    baseURL: BASE_URL,
    headers: {
      "Content-Type": ["application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"], // Add Accept header for application/json
    },
  });


  export const setAuthHeaders = () => {
      const token = localStorage.getItem("token");
      if (token) {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      } else {
        delete api.defaults.headers.common["Authorization"];
      }
    };

    export const postUser = async (userData) => {
      try {
        setAuthHeaders();
        const response = await api.post("user/postuser", userData);
        return response.data;
      } catch (error) {
        console.error("Error posting user:", error.message);
        throw new Error("Failed to post user");
      }
    };
    
    export const loginUser = async (loginData) => {
      try {
        const response = await api.post(`user/login`, loginData);
        const { token } = response.data;
        localStorage.setItem("token", token);
        setAuthHeaders(); // Add this line
        return response.data;
      } catch (error) {
        console.error("Error logging in:", error.message);
        throw new Error("Failed to login");
      }
    };
    
    export const fetchVegetableProducts = async () => {
      try {
        setAuthHeaders();
        const response = await api.get(`${BASE_URL}fetch/Vegetable`);
        return response.data;
      } catch (error) {
        console.error("Error fetching Vegetable products:", error);
        throw error; 
      }
    };
    
    export const postVegetableProduct = async (formData) => {
      try {
        setAuthHeaders();
        const response = await api2.post(`${BASE_URL}api/upload`, formData);
        return response.data;
      } catch (error) {
        console.error("Error posting postVegetableProduct:", error.message);
        console.error("Server response:", error.response.data); 
        throw error; 
      }
    };


     export const fetchAnimalProducts = async () => {
      try {
        setAuthHeaders();
        const response = await api.get(`${BASE_URL}fetch/animalProducts`);
        return response.data;
      } catch (error) {
        console.error("Error fetching Animal products:", error);
        throw error; 
      }
    };

    export const fetchIndustrialProducts = async () => {
      try {
        setAuthHeaders();
        const response = await api.get(`${BASE_URL}fetch/industrialProduct`);
        return response.data;
      } catch (error) {
        console.error("Error fetching Industrial products:", error);
        throw error; 
      }
    };

   

    export const fetchNewsProducts = async () => {
      try {
        setAuthHeaders();
        const response = await api.get(`${BASE_URL}api/fetch-news`);
        return response.data;
      } catch (error) {
        console.error("Error fetching news :", error);
        throw error; 
      }
    };