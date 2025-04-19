import { toast } from "react-toastify";
import useAuthStore from "src/store/user";

const requestOrder = async (): Promise<{ massage: string } | null> => {
  const { accessToken } = useAuthStore();

  try {
    const order = await fetch("http://localhost:3000/api/protected", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (!order.ok) {
      if (order.status === 401) {
        toast.error("Unauthorized! Please log in again.");
      } else if (order.status === 403) {
        toast.error("Forbidden! Invalid or expired token.");
      } else {
        toast.error(`Error: ${order.statusText}`);
      }
      return null;
    }
    return await order.json();
  } catch {
    console.error("Error fetching protected data");
    toast.error("An error occurred while fetching protected data.");
    return null;
  }
};

export default requestOrder;
