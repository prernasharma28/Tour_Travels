import React, { useState } from "react";
import { Container, Row, Col, Button, Input, Form } from "reactstrap";
import { useNavigate } from "react-router-dom";

const GenerateAI = () => {
  const navigate = useNavigate();
  const [city, setCity] = useState("");
  const [days, setDays] = useState("");
  const [itinerary, setItinerary] = useState([]);

  const generateItinerary = () => {
    if (!city.trim() || !days.trim() || parseInt(days, 10) < 1) {
      setItinerary(["❌ Please enter a valid city and number of days."]);
      return;
    }

    const daysNum = Math.min(parseInt(days, 10), 10); // Limit to 10 days max
    let generatedPlan = [];

    const activities = [
      "Visit historical landmarks 🏛️",
      "Explore local museums 🎨",
      "Try traditional food 🍽️",
      "Go on a city tour 🚌",
      "Check out famous shopping streets 🛍️",
      "Visit popular parks and gardens 🌳",
      "Experience the nightlife 🎶",
      "Take a scenic walk 🚶",
      "Enjoy water activities (if available) 🌊",
      "Attend a cultural event or festival 🎭",
    ];

    for (let i = 0; i < daysNum; i++) {
      let dailyActivities = [];
      for (let j = 0; j < 3; j++) {
        dailyActivities.push(
          activities[Math.floor(Math.random() * activities.length)]
        );
      }
      generatedPlan.push({
        day: i + 1,
        activities: dailyActivities,
      });
    }

    setItinerary(generatedPlan);
  };

  return (
    <section className="ai-section">
      <Container className="text-center mt-5">
        <Row>
          <Col lg="8" className="mx-auto">
            <h2 className="ai-title">🌼 AI-Powered Travel Itinerary</h2>
            <p className="ai-subtext">
              Enter a city and number of days to generate a plan.
            </p>

            <Form
              onSubmit={(e) => {
                e.preventDefault();
                generateItinerary();
              }}
              className="d-flex flex-column align-items-center"
            >
              <Input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="🌍 Enter city name"
                className="ai-input"
              />
              <Input
                type="number"
                value={days}
                onChange={(e) => setDays(e.target.value)}
                placeholder="📅 Number of days"
                className="ai-input"
              />
              <Button className="ai-button" type="submit">
                🚀 Generate Itinerary
              </Button>
            </Form>

            {/* Horizontal Scrollable Itinerary */}
            {itinerary.length > 0 && (
              <div className="scroll-container mt-4">
                {itinerary.map((dayPlan, index) => (
                  <div key={index} className="day-box">
                    <h5 className="day-title">📅 Day {dayPlan.day}</h5>
                    <ul className="day-list">
                      {dayPlan.activities.map((activity, i) => (
                        <li key={i} className="day-item">
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            <Button
              className="ai-back-button mt-3"
              onClick={() => navigate(-1)}
            >
              ⬅️ Go Back
            </Button>
          </Col>
        </Row>
      </Container>

      {/* Light Mustard Yellow Theme */}
      <style>
        {`
          /* Background Section */
          .ai-section {
            background: #fffaf0; /* Light cream mustard */
            min-height: 100vh;
            padding: 50px 0;
            }

          /* Title & Text */
          .ai-title {
            font-size: 2rem;
            font-weight: bold;
            color: #5c4a1f;
            margin-bottom: 10px;
          }
          .ai-subtext {
            font-size: 1.2rem;
            color: #6d5a2e;
            opacity: 0.9;
            margin-bottom: 20px;
          }

          /* Input Fields */
          .ai-input {
            width: 100%;
            max-width: 400px;
            padding: 10px;
            font-size: 1rem;
            margin-bottom: 10px;
            border-radius: 8px;
            border: 2px solid #d4a537;
            background: #fff6db;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }

          /* Button */
          .ai-button {
            background: #e6b800;
            border: none;
            padding: 10px 20px;
            font-size: 1rem;
            border-radius: 25px;
            box-shadow: 0 4px 8px rgba(204, 153, 0, 0.3);
            transition: 0.3s;
            color: #fff;
          }
          .ai-button:hover {
            background: #d4a537;
          }

          /* Back Button */
          .ai-back-button {
            background: #6d5a2e;
            color: #fff;
            padding: 10px 20px;
            font-size: 1rem;
            border-radius: 25px;
            transition: 0.3s;
          }
          .ai-back-button:hover {
            background: #5c4a1f;
          }

          /* Scrollable Container */
          .scroll-container {
            display: flex;
            overflow-x: auto;
            gap: 15px;
            padding: 15px;
            white-space: nowrap;
            scroll-behavior: smooth;
            background: rgba(255, 235, 179, 0.5);
            border-radius: 10px;
          }

          /* Individual Day Box */
          .day-box {
            min-width: 250px;
            max-width: 280px;
            padding: 15px;
            border-radius: 12px;
            background: #fff9db;
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
            text-align: center;
            transition: transform 0.3s;
            border: 2px solid #e6b800;
          }
          .day-box:hover {
            transform: translateY(-3px);
          }

          /* Day Title */
          .day-title {
            font-size: 1.2rem;
            font-weight: bold;
            color: #5c4a1f;
            margin-bottom: 8px;
          }

          /* Day List */
          .day-list {
            list-style: none;
            padding: 0;
            margin: 0;
          }
          .day-item {
            font-size: 1rem;
            color: #6d5a2e;
            padding: 5px;
            background: #ffe082;
            border-radius: 8px;
            margin: 5px 0;
          }

          /* Scrollbar Customization */
          .scroll-container::-webkit-scrollbar {
            height: 8px;
          }
          .scroll-container::-webkit-scrollbar-thumb {
            background: #d4a537;
            border-radius: 5px;
          }
        `}
      </style>
    </section>
  );
};

export default GenerateAI;
