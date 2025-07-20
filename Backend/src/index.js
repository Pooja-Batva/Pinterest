import {connectDB} from "./db/index.js";
import 'dotenv/config';
import app from "./app.js";

connectDB()
.then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch((error) => { 
    console.error("Database connection failed:", error);
    process.exit(1); // Exit the process with failure
});
