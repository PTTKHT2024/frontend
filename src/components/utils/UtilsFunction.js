import DOMPurify from 'dompurify';
import { api } from './AuthApi';
import { convertToHTML } from 'draft-convert';

export const fileUploadRegex = /[^/]+$/;
export const fileURL =
  'https://toyota-nestjs-uploader.s3.ap-southeast-1.amazonaws.com';

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
