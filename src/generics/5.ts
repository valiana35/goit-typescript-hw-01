export enum UserRole {
    admin = 'admin',
    editor = 'editor',
    guest = 'guest',
  }

  type Role = 'admin' | 'editor' | 'guest';
  type RoleRecord = Record<Role, string>;
  
  const RoleDescription: RoleRecord = {
    admin: 'Admin User',
    editor: 'Editor User',
    guest: 'Guest User',
  }; 

  console.log(RoleDescription);
  