// const {username, password} = process.env
// export const connectionStr="mongodb+srv://resort:resort@cluster0.w4133.mongodb.net/resortDB?retryWrites=true&w=majority&appName=Cluster0";
export const connectionStr = process.env.MONGODB_URI;
// console.log("MONGODB_URI is:", process.env.MONGODB_URI);

