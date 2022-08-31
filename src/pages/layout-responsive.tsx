import Image from 'next/image';

import mountains from '../../public/img/mountains.jpg';
import ViewSource from '../components/view-source';

const Responsive = () => (
  <div>
    <ViewSource pathname="pages/layout-responsive.tsx" />
    <h1>Image Component With Layout Responsive</h1>
    <Image alt="Mountains" src={mountains} layout="responsive" width={700} height={475} />
  </div>
);

export default Responsive;
