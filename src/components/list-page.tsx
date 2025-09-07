import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import TodoFooter from '@/app/footer';
import ListComplete from '@/app/list-completed';
import ListToday from '@/app/list-today';

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
          <TodoFooter />
        </TabsContent>
        <TabsContent value='upcoming'>
          Make changes to your incoming here.
          <TodoFooter />
        </TabsContent>
        <TabsContent value='completed'>
          <ListComplete />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default ListPage;
