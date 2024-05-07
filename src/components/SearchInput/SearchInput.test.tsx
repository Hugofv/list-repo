import { fireEvent, render, screen } from '@testing-library/react';
import SearchInput from '.';

type TestElement = Document | Element | Window | Node;

function hasInputValue(e: TestElement, inputValue: string) {
  return screen.getByDisplayValue(inputValue) === e;
}

test('should call on search', () => {
  const onSearch = jest.fn();

  render(<SearchInput onSearch={onSearch} />);

  const searchInput = screen.getByTestId('search-input');

  fireEvent.change(searchInput, { target: { value: 'test' } });
  expect(hasInputValue(searchInput, 'test')).toBe(true);

  fireEvent.click(screen.getByTestId('search-icon'));
  expect(onSearch).toBeCalled();
});
