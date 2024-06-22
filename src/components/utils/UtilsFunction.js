import DOMPurify from 'dompurify';
import { api } from './AuthApi';
import { convertToHTML } from 'draft-convert';
export const fileUploadRegex = /[^/]+$/;
export const fileURL =
  'https://toyota-nestjs-uploader.s3.ap-southeast-1.amazonaws.com';

export const preparePayload = (car) => {
  return {
    ...car,
    price: parseFloat(car.price),
    capacity: parseFloat(car.capacity),
    number_of_seats: parseInt(car.number_of_seats, 10),
    inventory: {
      ...car.inventory,
      quantity: parseInt(car.inventory.quantity, 10),
    },
    specification: {
      ...car.specification,
      weight: parseFloat(car.specification.weight),
      base_length: parseFloat(car.specification.base_length),
      base_front_width: parseFloat(car.specification.base_front_width),
      base_back_width: parseFloat(car.specification.base_back_width),
      light_undercarriage: parseFloat(car.specification.light_undercarriage),
      minimum_rev_radius: parseFloat(car.specification.minimum_rev_radius),
      fuel_capacity: parseFloat(car.specification.fuel_capacity),
      luggage_capacity: parseFloat(car.specification.luggage_capacity),
      urban_fuel_consumption: parseFloat(
        car.specification.urban_fuel_consumption
      ),
      fuel_consumption: parseFloat(car.specification.fuel_consumption),
      combine_fuel_consumption: parseFloat(
        car.specification.combine_fuel_consumption
      ),
      number_of_xylanh: parseInt(car.specification.number_of_xylanh, 10),
      xylanh_capacity: parseFloat(car.specification.xylanh_capacity),
      weight_load: parseFloat(car.specification.weight_load),
    },
  };
};

export const isFile = (file) => {
  return file instanceof File;
};

export function getImageFileName(imgaeURL) {
  const match = imgaeURL.match(fileUploadRegex);
  return match[0];
}

export function createMarkup(html) {
  return {
    __html: DOMPurify.sanitize(html),
  };
}

export async function uploadFile(fileUpload, accessToken) {
  const form = new FormData();
  form.append('fileUpload', fileUpload);
  try {
    const res = await api.post('/files/upload', form, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return { status: res.status, data: res.data.data.url };
  } catch (err) {
    throw new Error(err.message);
  }
}
