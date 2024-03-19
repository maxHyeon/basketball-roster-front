import { Card, Title, Text } from '@tremor/react';
import MembersTable from '../component/member/membersTable';

export const dynamic = 'force-dynamic';


export default function IndexPage() {

    return (
        <main className="p-4 md:p-10 mx-auto max-w-7xl">
            <p className="text-2xl antialiased font-light font-mono">Members</p>
            <Card className="mt-6">
                <MembersTable />
            </Card>
        </main>
    );
}