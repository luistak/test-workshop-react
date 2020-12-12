import '@testing-library/jest-dom';

// Mocking native api's
const { reload } = window.location;

beforeAll(() => {
  Object.defineProperty(window, 'location', {
    writable: true,
    value: { reload: jest.fn() }
  });
});

afterEach(() => {
  window.location.reload.mockClear();
});

afterAll(() => {
  window.location.reload = reload;
});
