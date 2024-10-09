const fs = require('fs');
const path = require('path');
const querystring = require('querystring');

exports.handler = async (event, context) => {
    if (event.httpMethod === 'POST') {
        // Parse URL-encoded form data
        const data = querystring.parse(event.body);
        
        // Store form data in a file
        const filePath = path.join(__dirname, 'data.txt');
        const formData = `Name: ${data.name}, Email: ${data.email}\n`;

        // Append data to file
        fs.appendFileSync(filePath, formData);

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Form data saved successfully!" })
        };
    }

    return {
        statusCode: 405,
        body: "Method Not Allowed"
    };
};
