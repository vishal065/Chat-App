import { useAuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";
export const useLogin = () => {
  const { setAuthUser } = useAuthContext();
  const startLogin = async ({ username, password }) => {
    try {
      if (!username && !password) {
        throw new Error(data.error);
      }
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (!data) {
        throw new Error(data.error);
      }
      localStorage.setItem("LoggedInUser", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      console.log(error, " useLogin hook ka error");
      toast.error(error);
    }
  };

  return { startLogin };
};
