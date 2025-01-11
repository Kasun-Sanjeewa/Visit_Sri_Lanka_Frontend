const fetchLocationData = async (location) => {
    if (!location) {
        throw new Error('Location is required!');
    }

    const url = `http://localhost:5000/api/place?location=${location}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.locationUrl && data.photoUrl) {
            return {
                locationUrl: data.locationUrl,
                photoUrl: data.photoUrl
            };
        } else {
            throw new Error('No photos or location URL available for this location');
        }
    } catch (error) {
        console.error('Error fetching location data:', error);
        throw error;
    }
};


export default fetchLocationData;
