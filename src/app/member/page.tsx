import { Card, Title, Text } from '@tremor/react';
import MembersTable from './table';

export const dynamic = 'force-dynamic';


export default function IndexPage() {

    return (
        <main className="p-4 md:p-10 mx-auto max-w-7xl">
            <Title>Team Manage</Title>
            <Text>
                팀 멤버와 로스터 관리
            </Text>
            <Card className="mt-6">
                <MembersTable />
            </Card>
        </main>
    );
}