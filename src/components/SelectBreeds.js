import React, { useState, useEffect } from "react";
import { getBreeds } from "../helpers/getBreeds";
import Select from "react-select";
import { dogImg } from "../helpers/dogImg";

const SelectBreed = ({ updateDog }) => {
    const [breeds, setBreeds] = useState([]);
    const [breedsImage, setBreedsImage] = useState("");
    const [error, setError] = useState(null);

    const handleSelection = (e) => {

        dogImg (e[e.length - 1].value).then(response => {
            console.log(response)
        })
    }

    useEffect (() => {
        updateBreeds();
    }, []);

    const updateBreeds = () => {
        getBreeds ()
            .then((newBreeds) => {
                const newOptions = [];

                Object.keys(newBreeds).forEach((element) => {
                  newOptions.push ({ value: element, label: element });  
                });
                setBreeds (newOptions);
            })
            .catch ((error) => {
                console.log(error);
                setError("Oh!, sorry, we can not load the breeds");
            });
    };

    return (
        <Select
        isMulti
        name="colors"
        options={breeds}
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={handleSelection}
      /> 
    );
};

export default SelectBreed;