import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'ovpwyqcy',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'sk73ix5XHO0MLrYlGg1xuQu5JZ4fehV9kRL6wLLJDs9GmoMWa9YGiSMNuyU8ydIwDoOYwVs4FvMBpUCZUNr4qk4KOt148dr4YoKsloTKoS7nt8xvpNme7YNWfNpzaYCHbZhPe4chYFqfy2ZhKp3W0BqYT7Nmd1Ky6CEigRiQls2tvYOOXQco',
  useCdn: false,
});
