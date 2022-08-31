import Image from 'next/image';

import mountains from '../../public/img/mountains.jpg';
import ViewSource from '../components/view-source';

const PlaceholderBlur = () => (
  <div>
    <ViewSource pathname="pages/placeholder.tsx" />
    <h1>Image Component With Placeholder Blur</h1>
    <Image alt="Mountains" src={mountains} placeholder="blur" width={700} height={475} />
  </div>
);

export default PlaceholderBlur;
