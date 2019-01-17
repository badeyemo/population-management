# population-management

## Introduction 
This is a Population Management System that contains a list of locations and the total number of residents in each location broken down by gender.

An API that enables you to:

** Create a new location containing data on the total number of male and female residents within it. ** 
Please note that locations can be nested within other locations
> ** List all available locations and their population summaries (total male residents, total female residents, sum total residents) ** 
> ** Update data for a specific locations ** 
> **Delete a specified location **

## Available Endpoints
The documentation for the SMS Management API can be found here [Population API](https://documenter.getpostman.com/view/2052029/RznLGbGX)


## Dependencies

To install the Population Management API, you will need the following:
- Node
- PostgreSQL
- Other dependencies required are listed in the package.json file. Use `yarn install` on the command line
- Environment variables are defined in a .env file. You can find a .sample.env file in the repository root to guide you on setting up your .env file.

## Installation

The steps outline will provide a walkthrough on how to install the app on your local machine

- Clone this repository
- From the terminal, change directory to the population-management folder
- Ensure that you are on the **develop** branch. If on any other branch, run `git checkout develop` on the terminal.
-  Run `yarn install` from your terminal in your project directory to install all dependencies
-  Then run the app with the command `yarn start`


## Usage
To test out the endpoints, follow the following steps
- Once all dependencies have beeen installed, run `npm start` on your terminal to test the endpoints
The app link for the hosted app on heroku is "https://population-management-api.herokuapp.com".

## Limitations
- No form of authentication is implemented

## The DEV Team
- Raphael Etim
