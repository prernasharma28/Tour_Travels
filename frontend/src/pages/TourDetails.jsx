import React, { useEffect, useRef, useState, useContext } from 'react';
import '../styles/tour-details.css';
import { Container, Row, Col, Form, ListGroup, Input, Button } from 'reactstrap';
import { useParams, useNavigate } from 'react-router-dom';
import calculateAvgRating from '../utils/avgRating';
import avatar from '../assets/images/avatar.jpg';
import Booking from '../components/Booking/Booking';
import NewsLetter from './../shared/Newsletter';
import useFetch from './../hooks/useFetch';
import { BASE_URL } from '../utils/config';
import { AuthContext } from './../context/AuthContext';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Footer from "../components/Footer/Footer";

const TourDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const reviewMsgRef = useRef('');
  const [tourRating, setTourRating] = useState(null);
  const { user } = useContext(AuthContext);

  // Fetch data from database
  const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/${id}`);

  const { photo, title, desc, price, address, reviews = [], city, distance, maxGroupSize } = tour || {};
  const { totalRating, avgRating } = calculateAvgRating(reviews);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tour]);

  return (
    <>
      <section>
        <Container>
          {loading && <h4 className="text-center pt-5">Loading...</h4>}
          {error && <h4 className="text-center pt-5">{error}</h4>}
          {!loading && !error && (
            <Row>
              <Col lg="8">
                <div className="tour__content">
                  <img src={photo} alt={title} />
                  <div className="tour__info">
                    <h2>{title}</h2>
                    <div className="d-flex align-items-center gap-5">
                      <span className="tour__rating d-flex align-items-center">
                        <i className="ri-star-s-fill" style={{ color: 'var(--secondary-color)', marginRight: '4px' }}></i>
                        <div className="rev">
                          {avgRating === 0 ? 'Not rated' : `${avgRating} (${reviews.length})`}
                        </div>
                      </span>
                      <span>
                        <i className="ri-map-pin-user-fill" style={{ marginRight: '0px' }}></i> {address}
                      </span>
                    </div>

                    <div className="tour__extra-details">
                      <span>
                        <i className="ri-map-pin-2-line" style={{ marginRight: '0px' }}></i> {city}
                      </span>
                      <span>
                        <i className="ri-money-dollar-circle-line" style={{ marginRight: '0px' }}></i> ₹{price} /per person
                      </span>
                      <span>
                        <i className="ri-map-pin-time-line" style={{ marginRight: '0px' }}></i> {distance} k/m
                      </span>
                      <span>
                        <i className="ri-group-line" style={{ marginRight: '0px' }}></i> {maxGroupSize} people
                      </span>
                    </div>
                    <h5>Description</h5>
                    <p>{desc}</p>
                  </div>
                </div>
              </Col>

              <Col lg="4">
                <Booking tour={tour} avgRating={avgRating} />
                <Button 
                  style={{ backgroundColor: "#faa93", color: "#fff" }} 
                  className="mt-3" 
                  onClick={() => navigate('/generate-ai')}
                >
                  Generate with AI
                </Button>
              </Col>
            </Row>
          )}
        </Container>
      </section>

      <NewsLetter />
      <Footer/>
    </>
  );
};

export default TourDetails;