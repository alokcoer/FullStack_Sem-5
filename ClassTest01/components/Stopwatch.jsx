import { useState, useEffect, useRef } from 'react';

export default function Stopwatch() {
    const [elapsedSeconds, setElapsedSeconds] = useState(0);
    const [isTimerActive, setIsTimerActive] = useState(false);
    const intervalRef = useRef(null);

    useEffect(() => {
        if (isTimerActive) {
            intervalRef.current = setInterval(() => {
                setElapsedSeconds((prev) => prev + 1);
            }, 1000);
        } else {
            clearInterval(intervalRef.current);
        }

        return () => clearInterval(intervalRef.current);
    }, [isTimerActive]);

    const handleStart = () => setIsTimerActive(true);
    const handlePause = () => setIsTimerActive(false);
    
    const handleReset = () => {
        setIsTimerActive(false);
        setElapsedSeconds(0);
    };

    return (
        <section className="component-container">
            <h2>System Stopwatch</h2>
            <div className="display-value" aria-live="off">
                {elapsedSeconds}s
            </div>
            <div className="button-group">
                <button onClick={handleStart} disabled={isTimerActive}>Start</button>
                <button onClick={handlePause} disabled={!isTimerActive} className="secondary-btn">Pause</button>
                <button onClick={handleReset} className="secondary-btn">Reset</button>
            </div>
        </section>
    );
}