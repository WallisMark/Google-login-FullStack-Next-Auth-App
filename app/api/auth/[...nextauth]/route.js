import NextAuth from "next-auth/next";
import GoogleProvider from ''

const authOptions = {

    providers:[
        GoogleProvider({
            clientId:process.env.CLIENT_ID,
            clientSecrete:process.env.CLIENT_SECRET,
        }),
    ],
}

const handler = NextAuth(authOptions)


export{ handler as GET, handler as POST}