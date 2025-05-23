import React from 'react';
import ReactDOM from 'react-dom';
import "./Ocassion.css";
import Footer from '../Footer/Footer';
import pic14 from '../../assets/images/p14.avif';
import pic15 from '../../assets/images/p15.avif';
import pic16 from '../../assets/images/p16.avif';

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
                                src={pic14}
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
                                src={pic15}
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
                                src={pic16}
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
