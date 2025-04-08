import * as v from "valibot";
import type { TSignInValidation } from "src/types/TSignInValidation";

const checkInfo = v.object({
  email: v.pipe(v.string(), v.email(), v.minLength(8)),
  password: v.pipe(v.string(), v.minLength(8)),
});

export type TSignInSchema = v.InferOutput<typeof checkInfo>;

const SignInSchema = (data: TSignInValidation) => {
  const result = v.parse(checkInfo, data);
  return result;
};

export default SignInSchema;
