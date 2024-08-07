const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

function generateColorSuggestions(baseColor) {
    const suggestions = [];
    for (let i = 0; i < 5; i++) {
        suggestions.push(Math.floor(Math.random() * 16777215).toString(16));
    }
    return suggestions;
}

app.get('/get-color-suggestions', (req, res) => {
    const baseColor = req.query.baseColor;
    const suggestions = generateColorSuggestions(baseColor);
    res.json({ suggestions });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
