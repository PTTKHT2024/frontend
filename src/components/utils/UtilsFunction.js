import DOMPurify from 'dompurify';

export function createMarkup(html) {
  return {
    __html: DOMPurify.sanitize(html),
  };
}
