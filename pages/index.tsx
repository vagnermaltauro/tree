import * as React from 'react';
import Head from 'next/head';

import Form from '@/components/form';
import NavBar from '@/components/navbar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Text to Image Generator | vagnermaltauro</title>
      </Head>
      <div className="container p-8 grid gap-8 mx-auto max-w-[1200px]">
        <NavBar />
        <Form />
      </div>
    </>
  );
}
