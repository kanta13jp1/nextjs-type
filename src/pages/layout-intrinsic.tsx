import Image from 'next/image';

import mountains from '../../public/img/mountains.jpg';
import ViewSource from '../components/view-source';

const Intrinsic = () => (
  <div>
    <ViewSource pathname="pages/layout-intrinsic.tsx" />
    <h1>Image Component With Layout Intrinsic</h1>
    <Image alt="Mountains" src={mountains} layout="intrinsic" width={700} height={475} />
  </div>
);

export default Intrinsic;
