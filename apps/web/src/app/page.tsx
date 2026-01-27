import {Button} from '@bug-tracking-system/ui';
// import type { Issue } from '@bug-tracking-system/types';

// const mockIssue: Issue = {
//   id: '1',
//   title: 'Test issue',
//   projectId: '1',
//   status: 'not_started',
//   priority: 'low',
//   reporterId: '1',
//   createdAt: new Date().toISOString(),
// }

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <>
      <div className="bg-red-500 text-white p-8">
        Tailwind está funcionando correctamente
      </div>
      {/* <p>
        {JSON.stringify(mockIssue)}
      </p> */}
      <Button>
        Testing button
      </Button> 
    </>
  );
};
