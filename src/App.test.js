import signIn from './components/signIn';
import Update from './components/Update';
import Register2 from './components/Register2';
import Register1 from './components/Register1';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
test('testing login', () => {
  render(<signIn />);
  const linkElement = screen.getByTestId("SignIn");
  expect(linkElement).toBeInTheDocument();
});
test('testing update', () => {
  render(<Update />);
  const linkElement = screen.getByTestId("update");
  expect(linkElement).toBeInTheDocument();
});

test('testing buyer', () => {
  render(<Register2 />);
  const linkElement = screen.getByTestId("register2");
  expect(linkElement).toBeInTheDocument();
});
test('testing seller', () => {
  render(<Register1 />);
  const linkElement = screen.getByTestId("register1");
  expect(linkElement).toBeInTheDocument();
});


