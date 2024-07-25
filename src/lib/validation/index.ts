import { z } from "zod";

 const SignupValidation = z.object({
     name: z.string().min(2, "Too short"),
    username: z.string().min(2, "Username must be at least 2 characters long").max(50, "Username cannot exceed 50 characters"),
    email : z.string().email(),
     password: z.string().min(8, "Password must be atleast 8 characters"),

 });
 export default SignupValidation;