import React from 'react';
import ReactDOM from 'react-dom';
import "./Ocassion.css";
import Footer from '../Footer/Footer';

const EventsAndConferences = () => {
    const styles = {
        container: { padding: '20px' },
        title: { textAlign: 'center', fontSize: '24px', marginBottom: '20px' },
        subtitle: { textAlign: 'center', marginBottom: '40px' },
        grid: { display: 'flex', justifyContent: 'space-between' },
        card: { textAlign: 'center', width: '30%' },
        image: { width: '100%', height: 'auto' },
        heading: { marginTop: '10px', fontSize: '18px' }
    };

    return (
        <div style={{ ...styles.container, width: '99%', padding: '90px', marginTop : '-120px'}}>
            <h2 style={{ ...styles.title, fontSize: '36px', fontFamily: 'Cinzel, Palatino Linotype, serif'}}>Events And Conferences</h2>
            <p style={styles.subtitle}>
                TravelEase elevates every occasion into an awe-inspiring, immersive experience to cherish forever.
            </p>
            <div style={styles.grid}>
                {/* Card 1 */}
                <div style={styles.card}>
                    <div style={{ position: 'relative' }}>
                        <a href="/dining">
                            <img 
                                src="https://cdn.sanity.io/images/ocl5w36p/prod2/6d34584a52ea8140cfca9cc30d693325abca5925-1400x1080.jpg?w=480&fm=webp&dpr=2"
                                alt="Meetings & Conferences"
                                style={{
                                    ...styles.image,
                                    transition: 'transform 0.3s ease', 
                                }}
                                className="hover-image"
                            />
                        </a>
                        <h3 style={{
                            ...styles.heading,
                            position: 'absolute',
                            bottom: '-25px', 
                            right: '-25px', 
                            backgroundColor: '#FFFFFF',
                            color: 'rgb(69, 68, 63)',
                            padding: '35px 15px',
                            boxShadow: '-6px 10px 24px 0px rgba(0, 0, 0, 0.10)',
                            fontFamily: 'inherit',
                            width: '65%',
                        }}>
                            MEETINGS & CONFERENCES
                        </h3>
                    </div>
                </div>

                {/* Card 2 */}
                <div style={styles.card}>
                    <div style={{ position: 'relative' }}>
                        <a href="/events">
                            <img 
                                src="https://cdn.sanity.io/images/ocl5w36p/prod2/d451ef209272bc10c3665a819b4865034801d2a2-1400x1080.jpg?w=480&fm=webp&dpr=2"
                                alt="Events"
                                style={{
                                    ...styles.image,
                                    transition: 'transform 0.3s ease', 
                                }}
                                className="hover-image"
                            />
                        </a>
                        <h3 style={{
                            ...styles.heading,
                            position: 'absolute',
                            bottom: '-25px', 
                            right: '-25px', 
                            backgroundColor: '#FFFFFF',
                            color: 'rgb(69, 68, 63)',
                            padding: '35px 35px',
                            float: 'left',
                            textAlign : 'left',
                            boxShadow: '-6px 10px 24px 0px rgba(0, 0, 0, 0.10)',
                            fontFamily: 'inherit',
                            width: '65%',
                        }}>
                            EVENTS
                        </h3>
                    </div>
                </div>

                {/* Card 3 */}
                <div style={styles.card}>
                    <div style={{ position: 'relative' }}>
                        <a href="/destinations">
                            <img 
                                src="https://cdn.sanity.io/images/ocl5w36p/prod2/8458083aed28ec653b7d55ebe021378a6fe40b17-1400x1080.jpg?w=480&fm=webp&dpr=2"
                                alt="Timeless Weddings"
                                style={{
                                    ...styles.image,
                                    transition: 'transform 0.3s ease', 
                                }}
                                className="hover-image"
                            />
                        </a>
                        <h3 style={{
                            ...styles.heading,
                            position: 'absolute',
                            bottom: '-25px', 
                            right: '-25px', 
                            backgroundColor: '#FFFFFF',
                            color: 'rgb(69, 68, 63)',
                            padding: '35px 15px',
                            boxShadow: '-6px 10px 24px 0px rgba(0, 0, 0, 0.10)',
                            fontFamily: 'inherit',
                            width: '65%',
                        }}>
                            TIMELESS WEDDINGS
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Render the component directly
// ReactDOM.render(<EventsAndConferences />, document.getElementById('root'));
export default EventsAndConferences;
