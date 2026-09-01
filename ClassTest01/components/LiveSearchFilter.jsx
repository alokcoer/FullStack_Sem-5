import { useState, useMemo } from 'react';

const EMPLOYEE_DIRECTORY = [
    'Alice Johnson',
    'Bob Smith',
    'Charlie Davis',
    'Diana Evans',
    'Evan Wright',
    'Fiona Clark',
    'George Miller',
    'Hannah White'
];

export default function LiveSearchFilter() {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredEmployees = useMemo(() => {
        const sanitizedQuery = searchQuery.trim().toLowerCase();
        if (!sanitizedQuery) return EMPLOYEE_DIRECTORY;

        return EMPLOYEE_DIRECTORY.filter((employeeName) =>
            employeeName.toLowerCase().includes(sanitizedQuery)
        );
    }, [searchQuery]);

    return (
        <section className="component-container">
            <h2>Directory Search</h2>
            <div className="input-group">
                <input
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search personnel..."
                    aria-label="Search directory"
                />
            </div>
            <ul className="item-list">
                {filteredEmployees.length > 0 ? (
                    filteredEmployees.map((employeeName) => (
                        <li key={employeeName} className="list-item">
                            {employeeName}
                        </li>
                    ))
                ) : (
                    <li className="list-item empty-state">No results found</li>
                )}
            </ul>
        </section>
    );
}