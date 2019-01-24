# DEV Assessment

This project is a skeleton project leveraging Vue, Bulma, and Webpack (NPM for dependencies).

To run the project, use :

```
npm run serve
```


# Your Mission
Your going to be using the [IEX API](https://iextrading.com/developer/docs/) to display stock tickers and data!

- You can use any IDE of your choice
- You must use Vue and Bulma
- You can install any other packages available in the node ecosystem to help you complete the assessment (included are some helpful libs and home brewed elements)

The base project **already includes** 
- Pulling the necessary data from the API (for the base requirements)
- A pre-built 
    - route (to the symbols page)
    - api service (to get IEX data)
    - view (to display the list of symbols)

### Requirements
Use the existing list of symbols being returned on the **Symbols** page to achieve the following :

- Clean up and display the list of symbols in a UI/UX friendly way
    - Leverage any of the available data points currently being returned by the API to achieve this

- Allow performing these actions on the list (do NOT re-fetch the data from the API):
    - **Searching** : On symbol and company name
    - **Sorting** : Ascending and descending on at least 1 data point
    - **Filtering** : On at least the following fields : 
        - "open"
        - "close" 
        - "primaryExchange"


### Bonus Points
(These are not mandatory and if you choose to do any of these - please only choose one)

- Ability to click a single stock ticker and navigate to a dedicated page (has it's own route and URL) for viewing it
    - Find and use the API end point for selecting a single ticker so you can load all possible information for it
    - Display as much or as little information as you like about the ticker in question
            
- Allow **favoriting** symbols by storing them in local storage and possibly Vuex
    - Add a menu item for viewing favorite symbols

- Allow **excluding** symbols by storing them in local storage and then preventing them from displaying in your main lists component
    - Add a menu item for viewing excluded symbols


### Finally
- Add any assumptions you made, challenges you over came, or anything note-worthy that you would like to have evaluated and/or discussed. Put these assumptions in the **ASSUMPTIONS.md** file.
- Commit your changes to a branch called **[firstname]_[lastname]** in this repo using your name as the branch name (DON'T push to master)



### Tips
- Effective us of white space and colors to make the data consumable
- Effective use of coloring to distinguish trends 



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
