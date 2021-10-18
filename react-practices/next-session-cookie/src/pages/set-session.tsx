import { getSession } from '../lib/get-session';

function SetSession() {
  return <div />;
}

export const getServerSideProps = async ({req, res}) => {
  const session = await getSession(req, res);

  session.userId = 123455;
  session.userName = 'John Doe';

  return {
    props: {}
  }
}

export default SetSession;