import type { NextPage } from 'next';
import { useState } from 'react';
import ComponentBundle from '../components/ComponentBundle';

const Home: NextPage = () => {
  const [date, setDate] = useState<Date>(new Date());

  return <ComponentBundle date={date} holidays={[]} />;
};

export default Home;
