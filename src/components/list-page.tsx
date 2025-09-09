import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import ListComplete from '@/app/list-completed';
import ListToday from '@/app/list-today';
import ListUpcoming from '@/app/list-upcomig';

const ListPage = () => {
  return (
    <>
      <Tabs defaultValue='today'>
        <TabsList>
          <TabsTrigger value='today'>Today</TabsTrigger>
          <TabsTrigger value='upcoming'>Upcoming</TabsTrigger>
          <TabsTrigger value='completed'>Completed</TabsTrigger>
        </TabsList>
        <TabsContent value='today'>
          <ListToday />
        </TabsContent>
        <TabsContent value='upcoming'>
          <ListUpcoming />
        </TabsContent>
        <TabsContent value='completed'>
          <ListComplete />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default ListPage;
