
import Navbar from './navbar';
interface User {
  id: string
}
export default async function Nav() {
  const session = { user: { id: "" } };
  return <Navbar user={session?.user} />;
}