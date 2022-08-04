import TextField from '../../../components/atoms/text-field';
import { TextFieldType } from '../../../data';
import { render } from '../../testUtils';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      push: jest.fn(),
    };
  },
}));

describe('TextField components', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <TextField
        label={'test'}
        type={TextFieldType.Email}
        value={'defalut'}
        classes={['test1', 'test2']}
        error={false}
        onChange={() => console.log('hoge')}
      />,
      {},
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
