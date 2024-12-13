```javascript
// pages/aboutSolution.js
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]';

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context, authOptions);
  // Handle potential undefined session gracefully
  return {
    props: { session: session || null },
  };
}

export default function About({ session }) {
  return (
    <div>
      <h1>About Page</h1>
      {session ? (
        <p>Signed in as {session.user.email}</p>
      ) : (
        <p>Not signed in</p>
      )}
    </div>
  );
}
```