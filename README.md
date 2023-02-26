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
* Microsoft Azure Storage Explored installed
    * allows viewing data saved to local Azure Storage emulator

## Deployment

### Prerequisites

* Microsoft Azure account created
    * Azure Function app named `ExpressEntryFetchRounds` created with public ingress allowed
    * [Publish profile downloaded and saved into GitHub repository secrets](https://learn.microsoft.com/en-us/azure/azure-functions/functions-how-to-github-actions?tabs=javascript#download-your-publish-profile)

### Deployment with GitHub Actions

Code is build and deployed with GitHub Actions. You can find CICD workflow in `.github/workflows/cicd.yml` file. Workflow is automatically triggered when code is merged to `master` branch.