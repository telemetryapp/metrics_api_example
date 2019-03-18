TelemetryTV Metrics API Example
===============================

This is an example of how to use the TelemetryTV Metrics API.  This uses node.js as an example platform for querying a metric from a local MongoDB database and sending it to the TelemetryTV API.

You will need to have node.js installed and have passing familiarity with it in order to use this example.  Additionally you will need to have a MongoDB database installed with a database named _database_ and an _accounts_ collection with some objects in it.

When this program runs it will send the count of the accounts collection to the 'accounts.count' metric in your TelemetryTV account.

## Installing Dependencies

### MacOS

1. Install Homebrew, a package manager for MacOS
    - Go to https://brew.sh/ and paste the command from the top of the page into your macOS Terminal
2. Install Node Version Manager
    - Go to https://github.com/creationix/nvm and paste the "Install & Update" cURL command into your macOS Terminal
3. Install a stable version of Node.js
    - Run `nvm install --lts` command in your macOS Terminal.
4. Install Yarn, a package manager for Node.js
    - Run `brew install yarn --ignore-dependencies` in your macOS Terminal
5. Install packages for metrics_api_example with the yarn package manager
    - From your macOS Terminal prompt, change directories to the root path of the metrics_api_example project (e.g. `cd /metrics_api_example/`).
    - Run `yarn` command from the project's root path to install node modules required to run the example
6. Install MongoDB
    - From your macOS Terminal, run `brew install mongodb-community@4.0` to install MongoDB
7. Run MongoDB Service
    - Run `brew services start mongodb-community@4.0` in your macOS Terminal
8. Create test database and insert with test data
    - Run `mongo` command in your macOS Terminal to open the mongo shell
    - Run `use database` command in mongo shell to create a new database named "database"
    - Run `db.accounts.insert()` as shown below to insert some accounts into your test database
    ```
    db.accounts.insert([{_id: new ObjectId(), name: 'Test Account 1'}, {_id: new ObjectId(), name: 'Test Account 2'},{_id: new ObjectId(), name: 'Test Account 3'}])
    ```
    - Run `db.accounts.find()` to view the test account data you've inserted
    - Run `exit` to exit the mongo shell

### Windows

- Coming soon!

## Running the Example

You'll need to CD to the source code directory and run the following command to execute the program, replacing _abc123_ with your API Token from the [https://app.telemetrytv.com/settings/apitokens](TelemetryTV API Token Page):

`./metrics.js -t abc123`
