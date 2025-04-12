import { TSignUpValidation } from "src/types/TSignUpValidation";

const requestSignUp = async (data: TSignUpValidation) => {
  return fetch("http://localhost:5173/api/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export default requestSignUp;
