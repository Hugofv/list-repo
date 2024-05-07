// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
jest.mock('react-markdown', () => (props) => {
  return <>{props.children}</>;
});

jest.mock('axios', () => ({
  post: jest.fn(),
  get: jest.fn(),
  create: jest.fn()
}))