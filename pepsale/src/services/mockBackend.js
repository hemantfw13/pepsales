export const mockBackend = {
  filterBlocks: (attributes) => {
    console.log('Filtering blocks by:', attributes);
    return [];
  },
};