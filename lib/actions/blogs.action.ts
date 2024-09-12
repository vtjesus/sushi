"use server";
import { databases, DATABASE_ID, BLOGS_ID } from "../appwrite.config";

export const getBlogData = async () => {
    console.log(process.env.DATABASE_ID, process.env.BLOGS_ID)
    try {
        const response = await databases.listDocuments(DATABASE_ID!, BLOGS_ID!);
        return response.documents;
    } catch (error) {
        console.error('Error fetching data from Appwrite:', error);
        return [];
    }
};

export const getBlogDataById = async (id: any) => {
    const DATABASE_ID = process.env.DATABASE_ID;
    const BLOGS_ID = process.env.BLOGS_ID;

    if (!DATABASE_ID || !BLOGS_ID) {
        throw new Error("Environment variables DATABASE_ID or BLOGS_ID are not defined");
    }

    try {
        const response = await databases.getDocument(DATABASE_ID, BLOGS_ID, id);
        return response;
    } catch (error) {
        console.error('Error fetching data from Appwrite:', error);
        return null;
    }
};
