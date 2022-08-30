import Image from 'next/image';

import mountains from '../../public/img/mountains.jpg';
import ViewSource from '../components/view-source';

const Fill = () => (
  <div>
    <ViewSource pathname="pages/layout-fill.tsx" />
    <h1>Image Component With Layout Fill</h1>
    <br />
    <h1>objectFit cover</h1>
    <div style={{ position: 'relative', width: '300px', height: '500px' }}>
      <Image alt="Mountains" src={mountains} layout="fill" objectFit="cover" />
    </div>
    <br />
    <h1>objectFit contain</h1>
    <div style={{ position: 'relative', width: '300px', height: '500px' }}>
      <Image alt="Mountains" src={mountains} layout="fill" objectFit="contain" />
    </div>
    <br />
    <h1>objectFit none</h1>
    <div style={{ position: 'relative', width: '300px', height: '500px' }}>
      <Image alt="Mountains" src={mountains} layout="fill" objectFit="none" quality={100} />
    </div>
  </div>
);

export default Fill;
