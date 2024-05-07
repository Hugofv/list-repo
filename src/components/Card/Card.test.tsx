import { render, screen } from '@testing-library/react';
import Card from '.';

test('should render card child', () => {
  render(
    <Card>
      <div data-testid='card-child'>teste</div>
    </Card>
  );

  const cardChild = screen.getByTestId(/card-child/i);
  expect(cardChild).toBeInTheDocument();
});
