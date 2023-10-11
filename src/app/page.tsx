import { Card, Title, Text } from '@tremor/react';
import UsersTable from './table';

export const dynamic = 'force-dynamic';

export default async function IndexPage({
  searchParams
}: {
  searchParams: { q: string };
}) {
  const search = searchParams.q ?? '';

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Team Manage</Title>
      <Text>
        팀 멤버와 로스터 관리
      </Text>
      <Card className="mt-6">
      </Card>
    </main>
  );
}