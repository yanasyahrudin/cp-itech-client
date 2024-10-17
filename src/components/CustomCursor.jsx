// CustomCursor.js
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

// Helper function to detect mobile devices
const isMobile = () => {
    return /Mobi|Android/i.test(navigator.userAgent) || window.innerWidth < 768;
};

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: -10, y: -10 });
    const [isVisible, setIsVisible] = useState(true);
    const [trailPositions, setTrailPositions] = useState(
        Array(10).fill({ x: 0, y: 0 })
    ); // 10 balls following the cursor
    const [isMobileDevice, setIsMobileDevice] = useState(false);

    useEffect(() => {
        // Detect if the device is mobile on component mount
        setIsMobileDevice(isMobile());

        if (isMobileDevice) return; // Do not add event listeners for mobile devices

        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseEnter = () => {
            setIsVisible(true);
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseenter', handleMouseEnter);
        window.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseenter', handleMouseEnter);
            window.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [isMobileDevice]);

    // Update the trail effect
    useEffect(() => {
        if (isMobileDevice) return; // Skip trail effect for mobile devices

        const interval = setInterval(() => {
            setTrailPositions((prevPositions) => {
                const newPositions = [...prevPositions];
                newPositions.pop(); // Remove the last position in the array
                newPositions.unshift(mousePosition); // Add the current mouse position to the start
                return newPositions;
            });
        }, 6); // Controls the speed of the trail

        return () => clearInterval(interval);
    }, [mousePosition, isMobileDevice]);

    // Function to render each ball in the trail
    const renderBalls = () => {
        return trailPositions.map((position, index) => {
            const size = 20 - index * 2; // Make each ball slightly smaller than the previous one
            const opacity = 1 - index * 0.1; // Gradually decrease the opacity for each ball
            const style = {
                position: 'fixed',
                left: `${position.x}px`,
                top: `${position.y}px`,
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: 'gray',
                borderRadius: '50%',
                pointerEvents: 'none',
                transform: 'translate(-50%, -50%)',
                transition: 'transform 0.1s ease-out',
                opacity: opacity,
                zIndex: 9999999999,
            };

            return <div key={index} style={style}></div>;
        });
    };

    // Render the balls using React Portal, but don't render on mobile
    return isMobileDevice
        ? null
        : ReactDOM.createPortal(isVisible && <>{renderBalls()}</>, document.body);
};

export default CustomCursor;
