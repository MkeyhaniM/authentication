import { toast } from "react-toastify";

const requestOrder = async () => {
  const order = await fetch("http://localhost:3000/api/protected", {
    headers: {
      authorization: "authorization",
    },
  });

  if (order.ok) {
    toast.error(
      `code status: ${order.status} Oops, there is a problem with your validation `,
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }
    );
  }

  return await order.json();
};

export default requestOrder;
