# Google BigQuery Javascript UDF Function Examples

[![Node.js CI](https://github.com/thedumbterminal/bigquery-js-udf-example/actions/workflows/node.js.yml/badge.svg)](https://github.com/thedumbterminal/bigquery-js-udf-example/actions/workflows/node.js.yml)

Examples of how to create, test and deploy Google BigQuery user defined functions (UDFs) written in Javascript.

For more information please see the accompanying blog post:

[Deploying Javascript functions on Google Big Query](https://www.thedumbterminal.co.uk/posts/2021/03/deploying_javascript_functions_on_google_big_query.html)

## Install

```
nvm use
npm install
```

## Testing

To run unit tests:

```
npm test
```

To run the distribution asset tests:

```
npm run build
npm run test:dist
````

To run the bigquery tests:

*This requires your terminal to be authenticated with the GCloud SDK*

```
export DEST_BUCKET=your_bucket_name
npm run build
npm run deploy
npm run test:bigquery
```
