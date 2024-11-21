import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function useCheckTokenExpiration() {
  const navigate = useNavigate();

  useEffect(() => {
    const checkTokenExpiration = () => {
      const expiration = localStorage.getItem("expiration");
      if (expiration) {
        const expirationDate = new Date(expiration);
        const currentDate = new Date();

        if (currentDate >= expirationDate) {
          localStorage.removeItem("token");
          localStorage.removeItem("expiration");
          localStorage.removeItem("profile");
          navigate("/home");
        }
      }
    };

    checkTokenExpiration();
    const intervalId = setInterval(checkTokenExpiration, 60000);

    return () => clearInterval(intervalId);
  }, [navigate]);
}

export default useCheckTokenExpiration;
