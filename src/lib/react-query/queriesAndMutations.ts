import {
    useQuery,
    useMutation,
    useQueryClient,
    useInfiniteQuery,
} from '@tanstack/react-query';
import { createUserAccount } from "@/lib/appwrite/api.ts";
import { INewUser } from "@/types";
import {signInAccount} from "@/lib/appwrite/api.ts";

export const useCreateUserAccount = () => {
    return useMutation({
        mutationFn: (user: INewUser) => createUserAccount(user),
    });
};

export const useSignInAccount = () => {
    return useMutation({
        mutationFn: (user: { email: string; password: string }) => signInAccount(user),
    });
};

export default useSignInAccount;
