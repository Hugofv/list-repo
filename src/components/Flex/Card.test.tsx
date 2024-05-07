import { render, screen } from '@testing-library/react';
import Flex from '.';

test('should render card child', () => {
  render(
    <Flex>
      <div data-testid='card-child'>teste</div>
    </Flex>
  );
  
  const cardChild = screen.getByTestId(/card-child/i);
  expect(cardChild).toBeInTheDocument();
});
