
export const {
    NEXT_PUBLIC_APPWRITE_ENDPOINT,
    NEXT_PUBLIC_APPWRITE_PROJECT_ID,
    DATABASE_ID,
    MENU_ID,
    NEXT_PUBLIC_API_KEY,
    BLOGS_ID
} = process.env;

import * as sdk from "node-appwrite"

// Initialize the Appwrite client
const client = new sdk.Client();

client
    .setEndpoint(NEXT_PUBLIC_APPWRITE_ENDPOINT!) // Your Appwrite Endpoint
    .setProject(NEXT_PUBLIC_APPWRITE_PROJECT_ID!); // Your project ID

// Initialize the Databases service
export const databases = new sdk.Databases(client);

