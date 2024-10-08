const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
    if (event.httpMethod === 'POST') {
        const data = JSON.parse(event.body);

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
