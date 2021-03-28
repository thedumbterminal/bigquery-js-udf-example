#!/usr/bin/env node

const {Storage} = require('@google-cloud/storage')

const storage = new Storage()

const createBucketIfNeeded = async (bucket) => {
	await storage.createBucket(bucket)
}

const upload = async () => {
	const bucket = process.env.DEST_BUCKET || 'thedumbterminal/bigquery-udf-example'
	await createBucketIfNeeded(bucket)
}

upload()
.catch((e) => {
	console.error(e.message)
	process.exit(1)
})
.then(() => {
	console.log('...Success')
})