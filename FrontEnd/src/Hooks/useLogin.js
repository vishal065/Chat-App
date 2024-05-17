import { useAuthContext } from "../Context/AuthContext";

export const useLogin = () => {
  const { setAuthUser } = useAuthContext();
  const startLogin = async ({ username, password }) => {
    try {
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
      throw new Error(error);
    }
  };

  return { startLogin };
};
