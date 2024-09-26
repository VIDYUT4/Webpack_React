import React, { useState } from "react";
import InputField from "./common/InputField";



const App = () => {
    const [state, setState] = useState('');
    const [region, setRegion] = useState('');
    const [submittedData, setSubmittedData] = useState(null);

    const states = [
        { name: 'West Bengal', value: 'WB' },
        { name: 'Andhra Pradesh', value: 'AP' },
        { name: 'Assam', value: 'AS'},
        { name: 'Bihar', value: 'BH'},
    ];
    const regions = {
        WB: [
            { name: 'Kolkata', value: 'KOL' },
            { name: 'Howrah', value: 'HOW' }
        ],
        AP: [
            { name: 'Vijayawada', value: 'VIJ' },
            { name: 'Visakhapatnam', value: 'VIS' }
        ],
        AS: [
            { name: 'Guwahati', value: 'GU' },
            { name: 'Tejpur', value: 'TJP' }
        ],
        BH: [
            { name: 'Dhanbadh', value: 'DNB' },
            { name: 'Patna', value: 'PTN' }
        ],
    };

    const handleStateChange = (event) => {
        setState(event.target.value);
        setRegion(''); // Reset the region when state changes
    };

    const handleRegionChange = (event) => {
        setRegion(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (state && region) {
          const selectedState = states.find(s => s.value === state);
          const selectedRegion = regions[state].find(r => r.value === region);
          setSubmittedData({
            stateName: selectedState.name,
            stateValue: selectedState.value,
            regionName: selectedRegion.name,
            regionValue: selectedRegion.value
          });
        }
      };
    //   const { name, price } = inputValue;
    //     const handleChange = (e) => {
    //         const { name, value } = e.target;
    //         setInputValue((prev) => ({
    //             ...prev,
    //             [name]: value,
    //             [price]: value,
    //         }));
    //     }
    return (
        <div>
            <h1>Our application running in local server {new Date().toDateString()}</h1>
            <form onSubmit={handleSubmit}>
            <div>
                <h1>Dependent Dropdowns</h1>
                <label className="dropdownLabel">
                    Select State:
                    <select className="dropdownSelect" value={state} onChange={handleStateChange}>
                        <option value="" disabled>Select a state</option>
                        {states.map((state) => (
                            <option key={state.value} value={state.value}>
                                {state.name}
                            </option>
                        ))}
                    </select>
                </label>
                <br />
                <label className="dropdownLabel">
                    Select Region:
                    <select className="dropdownSelect" value={region} onChange={handleRegionChange} disabled={!state}>
                        <option value="" disabled>Select a region</option>
                        {state && regions[state].map((region) => (
                            <option key={region.value} value={region.value}>
                                {region.name}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
            <div>
                <button type="submit" className="btn btn-success" disabled={!state || !region}>Submit</button>
            </div>
            </form>
            {submittedData && (
                <div>
                    <h2>Submitted Data</h2>
                    <p>State: {submittedData.stateName} ({submittedData.stateValue})</p>
                    <p>Region: {submittedData.regionName} ({submittedData.regionValue})</p>
                </div>
            )}

        </div>
    )
}
export default App;