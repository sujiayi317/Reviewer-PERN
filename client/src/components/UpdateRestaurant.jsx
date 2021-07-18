import React, { useState, useEffect, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import RestaurantFinder from '../apis/RestaurantFinder';

const UpdateRestaurant = (props) => {
  const { id } = useParams();
  let history = useHistory();
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await RestaurantFinder.get(`/${id}`);
      console.log(response.data.data);
      setName(response.data.data.restaurant.name);
      setLocation(response.data.data.restaurant.location);
      setPriceRange(response.data.data.restaurant.price_range);
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedRestaurant = await RestaurantFinder.put(`/${id}`, {
      name,
      location,
      price_range: priceRange,
    });
    console.log(updatedRestaurant);
    history.push('/');
  };

  console.log(id);
  return (
    <div>
      {/* <h1>{restaurants[0].name}</h1> */}
      <form action=''>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            name='name'
            id='name'
            className='form-control'
          />
        </div>

        <div className='form-group'>
          <label htmlFor='location'>Location</label>
          <input
            type='text'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            name='location'
            id='location'
            className='form-control'
          />
        </div>

        <div className='form-group'>
          <label htmlFor='price_range'>Price Range</label>
          <input
            type='number'
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            name='price_range'
            id='price_range'
            className='form-control'
          />
        </div>

        <button
          onClick={handleSubmit}
          type='submit'
          className='btn btn-primary'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateRestaurant;
