import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { nanoid } from 'nanoid';

export const getDataTtn = createAsyncThunk(
  'post/getDataTtn',
  async function (data, { rejectWithValue }) {
    try {
      const response = await axios.post(
        'https://api.novaposhta.ua/v2.0/json/',
        {
          apiKey: '',
          modelName: 'TrackingDocument',
          calledMethod: 'getStatusDocuments',
          methodProperties: {
            Documents: [
              {
                DocumentNumber: data,
                Phone: '',
              },
            ],
          },
        }
      );
      if (!response.data.success) {
        throw new Error('Error invalid input!');
      }

      return { ...response.data.data[0], id: nanoid() };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getAddressPosts = createAsyncThunk(
  'post/getAddressPosts',
  async function (data, { rejectWithValue }) {
    try {
      const response = await axios.post(
        'https://api.novaposhta.ua/v2.0/json/',
        {
          apiKey: '',
          modelName: 'Address',
          calledMethod: 'getWarehouses',
          methodProperties: {
            CityName: data,
            CityRef: '',
            Page: '1',
            Limit: '50',
            Language: 'UA',
            TypeOfWarehouseRef: '',
            WarehouseId: '',
          },
        }
      );
      if (!response.data.success) {
        throw new Error('Error invalid input!');
      }

      const array = response.data.data.map(el => ({ ...el, id: nanoid() }));

      return array;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
