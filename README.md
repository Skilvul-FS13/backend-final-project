
## API Installation

To run the API in your local machine, follow these steps: Clone the repository to your machine and install the needed dependencies. We use `npm` to manage our packages, so please make sure it is installed in your local machine.

```bash
git clone https://github.com/Skilvul-FS13/backend-final-project.git

cd backend-final-project

npm install
```

To start a server use this command:

```bash
npm run dev
```

After your application successfully installed we recommend you to do migration and seed(optional).

```bash
# migrate

npx sequelize-cli db:migrate
```

You can also undo migration.

```bash
# undoing migration

npx sequelize-cli db:migrate:undo
```

You can revert back to the initial state by undoing all migrations with the db:migrate:undo:all command. You can also revert back to a specific migration by passing its name with the --to option. 

For example:

```bash
# undoing all migration until user model

npx sequelize-cli db:migrate:undo:all --to 20231118065259-create-user.js
```
