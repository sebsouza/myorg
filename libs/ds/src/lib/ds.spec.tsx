import { render } from '@testing-library/react';

import Ds from './ds';

describe('Ds', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ds />);
    expect(baseElement).toBeTruthy();
  });
});
