
import React, { useState } from 'react';

const SlokaDisplay = () => {
    const [chapter, setChapter] = useState('');
    const [sloka, setSloka] = useState('');
    const [slokaData, setSlokaData] = useState(null);
    const [error, setError] = useState(null);

    const fetchSloka = async () => {
        try {
            const response = await fetch(`/api/bg/${chapter}.${sloka}`);
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }
            const data = await response.json();
            setSlokaData(data);
            setError(null); // Clear any previous errors
        } catch (err) {
            setError(err.message);
            setSlokaData(null); // Clear any previous data
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchSloka();
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>BAGVATH GITA</h1>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>
                        Chapter:
                        <input
                            type="number"
                            value={chapter}
                            onChange={(e) => setChapter(e.target.value)}
                            required
                            style={styles.input}
                        />
                    </label>
                </div>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>
                        Sloka:
                        <input
                            type="number"
                            value={sloka}
                            onChange={(e) => setSloka(e.target.value)}
                            required
                            style={styles.input}
                        />
                    </label>
                </div>
                <button type="submit" style={styles.button}>Fetch Sloka</button>
            </form>

            {error && <p style={styles.error}>{error}</p>}
            {slokaData && (
                <div style={styles.result}>
                    <h2>Sloka {slokaData.number}</h2>
                    <p><strong>Sanskrit:</strong> {slokaData.sanskrit}</p>
                    <hr style={{ border: '1px solid gray', margin: '20px 0' }} />
                    <p><strong>Transliteration:</strong> {slokaData.transliteration}</p>
                    <hr style={{ border: '1px solid gray', margin: '20px 0' }} />
                    <p><strong>Translation:</strong> {slokaData.translation}</p>
                    <hr style={{ border: '1px solid gray', margin: '20px 0' }} />
                </div>
            )}
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    },
    header: {
        textAlign: 'center',
        color: '#333',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    },
    inputGroup: {
        display: 'flex',
        flexDirection: 'column',
    },
    label: {
        fontWeight: 'bold',
    },
    input: {
        padding: '8px',
        border: '1px solid #ccc',
        borderRadius: '4px',
    },
    button: {
        padding: '10px',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: '#007BFF',
        color: '#fff',
        cursor: 'pointer',
        fontWeight: 'bold',
    },
    buttonHover: {
        backgroundColor: '#0056b3',
    },
    error: {
        color: 'red',
    },
    result: {
        marginTop: '20px',
        padding: '10px',
        border: '1px solid #007BFF',
        borderRadius: '4px',
        backgroundColor: '#f9f9f9',
    },
};

export default SlokaDisplay;
