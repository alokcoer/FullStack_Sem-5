import { useState } from 'react';

export default function Counter() {
    const [activityCount, setActivityCount] = useState(0);

    const incrementCount = () => setActivityCount((prev) => prev + 1);
    const decrementCount = () => setActivityCount((prev) => Math.max(0, prev - 1));
    const resetCount = () => setActivityCount(0);

    return (
        <section className="component-container">
            <h2>Counter</h2>
            <div className="display-value" aria-live="polite">
                {activityCount}
            </div>
            <div className="button-group">
                <button onClick={incrementCount}>Increment</button>
                <button onClick={decrementCount} disabled={activityCount === 0}>
                    Decrement
                </button>
                <button onClick={resetCount} className="secondary-btn">Reset</button>
            </div>
        </section>
    );
}