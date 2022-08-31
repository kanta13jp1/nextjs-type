import useSWR from 'swr';

import ViewSource from '@/components/view-source';

export const fetcher = (url: string) => fetch(url).then((res) => res.json());

function Profile() {
  const { data, error } = useSWR('/api/profile-data', fetcher);

  console.log(data);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  // render data
  return (
    <div>
      <ViewSource pathname="pages/swr.tsx" />
      Name : {data.name} Bio : {data.bio}
    </div>
  );
}

export default Profile;
