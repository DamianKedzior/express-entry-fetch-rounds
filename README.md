# express-entry-fetch-rounds

Fetches Express Entry rounds and saves latest one t Azure Storage

## Development environment setup

* NodeJs (18+) + npm installed
* Visual Studio Code installed
* The Azure Functions extension for Visual Studio Code installed
* Azure Functions Core Tools 4.x. installed
    * `npm install -g azure-functions-core-tools@4 --unsafe-perm true`
* Azurite emulator installed for local Azure Storage development
    * start emulator (Start Azure Blob Service at least) when running/debugging function locally
    * in `local.settings.json` set `"AzureWebJobsStorage": "UseDevelopmentStorage=true"` to use locally running storage emulator