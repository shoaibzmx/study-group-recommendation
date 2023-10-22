import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios'
import data from './data'

let currentData = data;



const BrowseComponent = () => {
    const [filteredData, setFilteredData] = useState(currentData);
    const [selectedInterest, setSelectedInterest] = useState("None");
    
    function filterByInterests(interest) {
        let tempData = []
        currentData.forEach(element => {
            if(element.interests == interest) {
                tempData.push(element)
            }
        });
        currentData = tempData;
        return tempData;
    }

    function filterByGoal(goal) {
        tempData = []
        currentData.forEach(element => {
            if(element.goals == goal) {
                tempData.push(element)
            }
        });
        currentData = tempData;
        return tempData;
    }
    
    function clearFilters() {
        currentData = data;
    }


    const recommendedInterests = [
        { title: "Group 1", description: "Description for Interest 1" },
        { title: "Group 2", description: "Description for Interest 2" },
        { title: "Group 3", description: "Description for Interest 3" },
        { title: "Group 4", description: "Description for Interest 4" },
        { title: "Group 5", description: "Description for Interest 5" },
        // Add more interest data here
    ];

    

    function CarouselSlider({ data }) {
        const sliderSettings = {
          dots: true,
          infinite: false,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
        };
      
        return (
          <Slider {...sliderSettings}>
            {data.map((item, index) => (
              <div key={index} className="p-4">
                <div className="bg-white rounded-lg shadow-md border border-gray-300 p-4 h-64">
                  <h3 className="text-xl font-semibold text-blue-500 mb-2">{item.title || item.name}</h3>
                  <p className="text-sm">{item.description || item.interest}</p>
                </div>
              </div>
            ))}
          </Slider>
        );
    }


    const handleInterestChange = (event) => {
        const selectedOption = event.target.value;
        setSelectedInterest(selectedOption);
        
        // Update the count based on the selected option
        if (selectedOption === 'Web Development') {
            clearFilters();
            setFilteredData(filterByInterests(selectedOption));
        } else if (selectedOption === 'Android Development') {
            clearFilters();
            setFilteredData(filterByInterests(selectedOption));
        } else if (selectedOption === 'Machine Learning') {
            clearFilters();
            setFilteredData(filterByInterests(selectedOption));
        } else if (selectedOption === 'None') {
            clearFilters();
            setFilteredData(currentData);
        }
    };






  return (
    
    <div className="container mx-auto py-4">
    
      <div className="flex">
        <div className="w-1/4 p-4">
          <div className="mb-4">
            <select onChange={handleInterestChange} className="p-2 w-full border rounded-md">
              <option value="None">Select your interest</option>
              <option value="Web Development">Web Development</option>
              <option value="Android Development">Android Development</option>
              <option value="Machine Learning">Machine Learning</option>
              {filteredData.map((interest, index) => (
                <option key={index} value={interest.title}>
                  {interest.title}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <select className="p-2 w-full border rounded-md">
              <option>Select your goal</option>
              {/* Add more dropdown options here */}
            </select>
          </div>
          <div>
            <select className="p-2 w-full border rounded-md">
              <option>Select your experience</option>
              {/* Add more dropdown options here */}
            </select>
          </div>
        </div>
        <div className="w-3/4 p-4">
            <h2 className="text-2xl font-semibold mb-4">Groups with similar Interests</h2>
            <CarouselSlider data={recommendedInterests} />
            <h2 className="text-2xl font-semibold mt-4 mb-4">People with Similar Interests</h2>
            <CarouselSlider data={filteredData} />
        </div>
      </div>
    </div>
    
  );
};

export default BrowseComponent;
