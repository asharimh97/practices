import { h } from "preact";
import { useEffect, useState } from "preact/hooks";

// Note: `user` comes from the URL, courtesy of our router
const Profile = ({ user }) => {
  const [time, setTime] = useState(Date.now());
  const [count, setCount] = useState(10);

  useEffect(() => {
    let timer = setInterval(() => setTime(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1 class="text-3xl font-bold">Profile: {user}</h1>
      <p>This is the user profile for a user named {user}.</p>

      <div>Current time: {new Date(time).toLocaleString()}</div>
      <button class="transition duration-300 ease-in-out bg-blue-300 hover:bg-red-300 transform hover:-translate-y-1 hover:scale-110">
        Lorem ipsum
      </button>

      <p>
        <button
          class="py-2 px-3 rounded-md bg-yellow-400 text-white"
          onClick={() => setCount(count => count + 1)}
        >
          Click Me
        </button>{" "}
        Clicked {count} times.
      </p>
    </div>
  );
};

export default Profile;
