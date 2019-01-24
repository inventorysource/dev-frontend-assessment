# DEV Assessment

Running the project

```
npm run serve
```

# Your Mission
Your going to be using the [IEX API](https://iextrading.com/developer/docs/) to display stock tickers and data!

- You can use any IDE of your choice
- You must use Vue and Bulma
- You can install any other packages available in the node ecosystem to help you complete the assessment (included are some helpful libs and home brewed elements)

A basic example of using the API and the data it returns can be found on the symbols page when opening the app in the left hand menu.

### Requirements
- Select 5 [industries/lists](https://iextrading.com/developer/docs#list) of stocks of your choosing
- Get the data with the [collections endpoint](https://iextrading.com/developer/docs/#collections)
- Display each list of tickers separately (pages, selection buttons, dropdown etc) but in a reusable way. Keep this main list view tight and to the point
- Allow performing these actions on the list (but no re-fetching from the API):
    - Searching (on symbol and company name)
    - Sorting (pick a few import data points, allow ascending and descending and visualize it well)
    - Ability to pick data point (select at least 3 ie open price) and view only those tickers matching above, below, or a range (ie > 30, or >30 && < 50)
- Ability to click a single stock ticker and navigate to a dedicated page (has it's own route and URL) for viewing it
    - Find and use the API end point for selecting a single ticker so you can load all possible information for it
    - Display as much or as little information as you like about the ticker in question
        - At a minimum include most of the key data points in a well thought out consumable manner
        - Use good white space (lots or very little up to you) and colors to make the data quickly understandable
        - General thoughts on other possibilities
            - Color coded indicators for price movements
            - Graphs or charts of important data points
            - Possibly querying for relevant news information from other API endpoints

### Bonus Points
- Allow favoriting symbols by storing them in local storage and possibly Vuex
    - Add a menu item for viewing favorites
    - Reuse your main lists component to display the favorites so you don't have to rewrite it and can inherit the searching/sorting/linking etc
- Allow black listing symbols by storing them in local storage and then preventing them from displaying in your main lists component

### Finally
- Add any assumptions you made, challenges you over came, or generally anything note worthy that you would like evaluated and discussed in the ASSUMPTIONS.md file in the root of this repo 
- Commit your changes to a branch in this repo using your name as the branch name (don't push to master or you risk failing the assessment flat out)


#### Linting
Getting [lint](https://eslint.org/) errors? Fix them with:

```
npm run lint --fix
```

#### Foundation
[Vue](https://vuejs.org/v2/guide/) : Vue

##### Libs
[Bulma](https://bulma.io/documentation/) : CSS framework

[Axios](https://github.com/axios/axios) : Used for making AJAX/XHR requests

[Moment](https://momentjs.com/docs/) : Date helper

[_](https://underscorejs.org/) : You should know
