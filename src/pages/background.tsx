import Image from 'next/image';

import ViewSource from '../components/view-source';

const Background = () => (
  <div>
    <ViewSource pathname="pages/background.tsx" />
    <div className="fixed -z-10 h-screen w-screen overflow-hidden">
      <Image
        alt="Mountains"
        src="/img/mountains.jpg"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
    <p className="text-shadow m-0 pt-96 text-center text-2xl">
      Image Component
      <br />
      as a Background
    </p>
  </div>
);

export default Background;
