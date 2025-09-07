import React from 'react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ListPage = () => {
  return (
    <>
      <Tabs defaultValue='today'>
        <TabsList>
          <TabsTrigger value='today'>Today</TabsTrigger>
          <TabsTrigger value='incoming'>Incoming</TabsTrigger>
          <TabsTrigger value='completed'>Completed</TabsTrigger>
        </TabsList>
        <TabsContent value='today'>
          Make changes to your today here.
        </TabsContent>
        <TabsContent value='incoming'>
          Make changes to your incoming here.
        </TabsContent>
        <TabsContent value='completed'>
          Make changes to your completed here.
        </TabsContent>
        <TabsContent value='password'>Change your password here.</TabsContent>
      </Tabs>
    </>
  );
};

export default ListPage;
