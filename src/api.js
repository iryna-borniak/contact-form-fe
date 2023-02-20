const BASE_URL = 'https://contact-form-api-xf7e.onrender.com/contacts';

export const postFeedback = async (name, email, message) => {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name,
      email,
      message,
    }),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
};
