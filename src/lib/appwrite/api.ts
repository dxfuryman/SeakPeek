import { ID } from 'appwrite';
import { INewUser } from "@/types";
import { account, appwriteConfig, avatars, databases } from "@/lib/appwrite/config.ts";

export async function createUserAccount(user: INewUser) {
    try {
        const newAccount = await account.create(
            ID.unique(),
            user.email,
            user.password,
            user.name
        );
        if (!newAccount) throw new Error();

        const avatarUrl = avatars.getInitials(user.name);

        const newUser = await saveUserToDB({
            accountId: newAccount.$id,
            name: newAccount.name,
            email: newAccount.email,
            username: user.username,
            imageUrl: avatarUrl,
        });

        return newUser;
    } catch (error) {
        console.log(error);
        return error;
    }
}

interface SaveUserToDBParams {
    accountId: string;
    email: string;
    name: string;
    imageUrl: string; // assuming this is a string URL
    username?: string;
}

export async function saveUserToDB({
                                       accountId,
                                       email,
                                       name,
                                       imageUrl,
                                       username,
                                   }: SaveUserToDBParams) {
    try {
        const newUser = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            {
                accountId,
                email,
                name,
                imageUrl,
                username,
            }
        );
        return newUser;
    } catch (error) {
        console.log(error);
    }
}

export async function signInAccount(user: { email: string; password: string }) {
    try {
        const session = await account.createSession(user.email, user.password);
        return session;
    } catch (error) {
        console.log(error);
    }
}
