import { Outlet, Navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../redux/slice/userSlice";
import React, { useState, useEffect } from "react";
import Sidebar from "../../layout/Sidebar";
import Topbar from "../../layout/Topbar";

export default function OnlyAdminPrivateRoute() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true); 
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const storedUser = localStorage.getItem("user");
        const storedToken = localStorage.getItem("token");

        if (storedUser && storedToken) {
          const parsedUser = JSON.parse(storedUser);
          dispatch(setUser({ user: parsedUser, token: storedToken }));
          navigate("/dashboard");
        }
      } catch (error) {
        console.error("Error fetching user:", error.message);
      } finally {
        setLoading(false); 
      }
    };
    fetchUser();
  }, [dispatch]);

  
  if (loading) {
    return <div>Loading...</div>;
  }

  return user && user.token ? (
    <>
      <div style={{ padding: "0px" }}>
        <div style={{ marginLeft: 280 }}>
          <Topbar />
          <Sidebar />
          <Outlet />
        </div>
      </div>
      
    </>
  ) : (
    <Navigate to="/login" />
  );
}