import { TSignInValidation } from "./TSignInValidation";

export interface TSignUpValidation extends TSignInValidation {
  username: string | null;
}
