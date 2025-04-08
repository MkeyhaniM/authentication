import { toast } from "react-toastify";
import SignInSchema, { type TSignInSchema } from "src/schema/signInInfo";
import type { TSignInValidation } from "src/types/TSignInValidation";

const requestSignIn = async (data: TSignInValidation) => {
  try {
    const checkValidationInputs = SignInSchema(data as TSignInSchema);
    console.log(checkValidationInputs);
    const signinRequest = await fetch("http://localhost:3000/api/signin", {
      body: JSON.stringify(checkValidationInputs),
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!signinRequest.ok) {
      toast.error(
        `code status: ${signinRequest.status} Oops, there is a problem with your validation `,
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

    const result = await signinRequest.json();
  } catch (e) {
    if (e instanceof Error) {
      toast.error(e.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    console.log(e);
  }
};

export default requestSignIn;
