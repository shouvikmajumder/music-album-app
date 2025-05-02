const fs = require("fs");

const Homepage = () => { 

    const rawData = fs.readFileSync("Backend/temp.json", "utf-8");
    
    const data = JSON.parse(rawData)
    
    print(data)

    
    

}

export default Homepage