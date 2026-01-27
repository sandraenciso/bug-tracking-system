import {Button} from '@bug-tracking-system/ui';
import type { Issue } from '@bug-tracking-system/types';
import { ISSUE_STATUSES } from '@bug-tracking-system/config';

const mockIssue: Issue = {
  id: '1',
  title: 'Test issue',
  projectId: '1',
  status: 'not_started',
  priority: 'low',
  reporterId: '1',
  createdAt: new Date().toISOString(),
}

export default function Index() {
  console.log(mockIssue);
  console.log(ISSUE_STATUSES);
  return (
    <>
      <div className="bg-red-500 text-white p-8">
        Tailwind está funcionando correctamente
      </div>
      <Button>
        Testing button
      </Button> 
    </>
  );
};
