const data = require('./data')

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors')

// const corsOptions = {
//     origin: 'http://127.0.0.1:5173', // Replace with your frontend's origin
//   };
  
app.use(cors());
app.use(bodyParser.json());

currentData = data;

function filterByInterest(interest) {
    filteredData = []
    currentData.forEach(element => {
        if(element.interests == interest) {
            filteredData.push(element)
        }
    });
    currentData = filteredData;
    return filteredData;
}

function filterByGoal(goal) {
    filteredData = []
    currentData.forEach(element => {
        if(element.goals == goal) {
            filteredData.push(element)
        }
    });
    currentData = filteredData;
    return filteredData;
}

function clearFilters() {
    currentData = data;
}

app.get('/interests', (req, res) => {
    const interest = req.query.interest;
    const filteredData = filterByInterest(interest);
    res.json(filteredData);
});

app.get('/goals/:goal', (req, res) => {
    const goal = req.params;
    const filteredData = filterByGoal(goal);
    res.json(filteredData);
});

app.get('/clearFilters', (req, res) => {
    clearFilters();
    res.json(currentData);
});


app.get('/interests', (req, res) => {
    const selectedInterest = req.query.interest; // Assuming the selected interest is passed as a query parameter
  
    // Filter the data array based on the selected interest
    const filteredData = filterByInterest(selectedInterest);
  
    // Return the filtered data as a JSON response
    res.json(filteredData);
  });








const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
