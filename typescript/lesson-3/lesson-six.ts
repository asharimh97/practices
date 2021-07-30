let userId = 0;
function createUser(name: string, role: 'admin' | 'member' | 'maintainer', isActive: boolean) {
  return {
    userId: userId++,
    name,
    role,
    isActive,
    createdAt: new Date()
  }
}

type GetReturn<T> = T extends (...args: any[]) => infer T ? T : never

// get the return type of a function or library, based on its params
type UserType = GetReturn<typeof createUser>
// equals to
type User = ReturnType<typeof createUser>

// Generates parameter of a function in array
type UserParam = Parameters<typeof createUser>

const user: UserParam = ["lorem ipsum", "admin", false];