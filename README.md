# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# borisdoes-test-task

Develop an app which makes a request to any of provided api and lists the result as a table of 3 columns:
time added, title and domain
- use React Hooks
- use any flux-like state management stategy(redux, useReducer hook, flux utilities)
- table headers should be clickable and should sort the entries by according column
- upon reaching end of page load new entries using pagination api
- entry should be clickable and should lead to HackerNews comments(link)
- implement mobile version which consists of entry title column only (fills screen completely) and has floating sort by date button
- make table adaptive: breakline entries, truncate by ellipsis any overflow that doesn't fit into 3 lines
- (optional) implement the same functionality for other list (news if you implemented newest, newest otherwise,etc.), add ability to transition between lists

you are free to use any npm packages
you are not obliged to do optional points

<!-- Разработайте приложение, которое запрашивает любой из предоставленных API и выводит результат в виде таблицы из 3 столбцов:
время добавления, заголовок и домен
- использовать React Hooks
- использовать любое состояние управления состоянием, подобное потоку (redux, обработчик useReducer, утилиты flux)
- заголовки таблиц должны быть интерактивными и должны сортировать записи по соответствующему столбцу
- по достижении конца страницы загружать новые записи, используя api разбиения на страницы -->
<!-- - запись должна быть интерактивной и вести к комментариям HackerNews (ссылка) -->
- реализовать мобильную версию, которая состоит только из столбца заголовка записи (полностью заполняет экран) и имеет плавающую кнопку сортировки по дате
<!-- - сделать таблицу адаптивной: записи структурных линий, усечение многоточием - любое переполнение, которое не помещается в 3 строки -->
- (необязательно) реализовать те же функции для другого списка (новости, если вы реализовали новейшие, в противном случае - самые новые и т. д.), добавить возможность перехода между списками

вы можете использовать любые пакеты npm
вы не обязаны делать дополнительные баллы

https://api.hnpwa.com/v0/news/1.json

[{"id":27673933,"title":"Google Compute Engine (GCE) VM Takeover via DHCP Flood","points":191,"user":"ithkuil","time":1624961777,"time_ago":"3 hours ago","comments_count":54,"type":"link","url":"https://github.com/irsl/gcp-dhcp-takeover-code-exec","domain":"github.com"},