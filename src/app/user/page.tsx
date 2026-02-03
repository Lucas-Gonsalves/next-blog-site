type UserListProps = {
  id: number;
  name: string;
}

async function fetchUsers() {
  return new Promise<UserListProps[]>((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" }
      ]);
    }, 4000);
  });
};

async function UserList() {
  const userList = await fetchUsers();
  return (
    <div>
      { userList.map((user) => (
          <p key={user.id} className="text-white">{ user.name }</p>
        )
      )}
    </div>
  );
};

export default function () {
  return (
    <div>
      <h2>User List</h2>
      <UserList/>
    </div>
  );
};